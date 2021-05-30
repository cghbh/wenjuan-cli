const { program } = require('commander')
const { createProjectActions, addComponentAction } = require('./actions.js')

// 创建所有的command命令
const createCommands = () => {
  // create后面跟上的是项目的名称 wj create xxx
  program
    .command('create <project> [others...]')
    .description('create a new project<创建一个新的项目>')
    // project是创建的项目的名称，others是其他的参数
    // 就是wj create demo01 aaa bbb ccc
    // project --> demo01 others ---> [aaa, bbb, ccc]
    .action(createProjectActions)


    // console.log(, '---program')
    program
    .command('addcpn <component> [others...]')
    .description('add a vue components<创建一个Vue的组件>，例如-d src/components')
    // project是创建的项目的名称，others是其他的参数
    // 就是wj create demo01 aaa bbb ccc
    // project --> demo01 others ---> [aaa, bbb, ccc]
    .action(name => {
      addComponentAction(name, 'src/components')
    })
}

module.exports = createCommands