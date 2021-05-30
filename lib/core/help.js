const { program } = require('commander')

const helpOptions = () => {
  program.option('-d --dest <dest>', 'dest参数就是文件夹的名称，例如：/src/components')
}

module.exports = helpOptions