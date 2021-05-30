// 终端命令代码在此
// 如何执行终端命令？
// 子进程：为什么要单独开启一个进程
// 把当前的命令在另外的一个进程执行
// spawn更接近于底层
const { exec, spawn } = require('child_process')
const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    // 对子进程关闭操作对监听
    childProcess.on('close', () => {
      resolve()
    })
  })
  
}


module.exports = {
  commandSpawn
}