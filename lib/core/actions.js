// actions创建所有program.actions里面的执行函数
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const ora = require('ora')
const { commandSpawn } = require('../utils/terminal.js')
const { compile, existDirHandle } = require('../utils/utils.js')
const path = require('path')
const fs = require('fs')
const writeFile = promisify(fs.writeFile)
const chalk = require('chalk')
const inquire = require('inquirer')

// 创建一个项目的action
const createProjectActions = async (project, others) => {
  await inquire.prompt([
    {
      type: 'list',
      message: '请选择需要使用的Vue的版本',
      choices: ['Vue2', 'Vue3'],
      default: 'Vue2',
      name: 'version'
    }
  ])
  const spinner = ora('正在下载模板中，请稍后').start()
  // 1.clone代码
  try {
    await download('cghbh/vue-cli-template', `${project}/`)
    spinner.succeed(chalk.greenBright('模板下载成功，正在安装项目依赖中，请稍候......'))
  } catch (err) {
    console.log(err)
    return spinner.fail(chalk.redBright('模板下载下载失败，请检查后重试！'))
  }
  
  // 2.npm install
  // cwd: current word directory
  // npm在Windows上面运行会有问题 npm.cmd MacBook上面是npm
  const newCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(newCommand, ['install'], { cwd: `./${project}` })
  // 3.npm run serve，使用vue-cli中的open指令默认打开浏览器
  await commandSpawn(newCommand, ['run', 'serve'], { cwd: `./${project}` })
}

// 创建一个组件的action
const addComponentAction = async (name, dest) => {
  // dest 就是创建的组件名称
  // folder就是文件夹
  const value = await compile('component.vue.ejs', { name: name, lowerName: name.toLowerCase() })
  // 1.对应的ejs模板
  // 2.编译ejs模板
  // 3.将result写入到指定的文件中
  const writePath = path.resolve(dest, `${name}.vue`)
  console.log(writePath, 'writePath')
  console.log(dest,'dest')
  if (existDirHandle(writePath)) {
    console.log(chalk.redBright('文件已经存在，请不要重复创建！'))
    return
  }
  await writeFile(writePath, `${value}`)
}

module.exports = {
  createProjectActions,
  addComponentAction
}