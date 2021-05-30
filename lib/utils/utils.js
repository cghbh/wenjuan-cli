// 将文件进行编译
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

// 编译文本
const compile =  (template, data) => {
  const pathPosition = path.resolve(__dirname, `../templates/${template}`)
  return new Promise((resolve, reject) => {
    ejs.renderFile(pathPosition, { data }, function(err, str){
      if (err) {
        reject(err)
      }
      resolve(str)
    });
  })
}

// 检测路径是否存在
const existDirHandle = (dest) => {
  return fs.existsSync(dest)
}

module.exports = {
  compile,
  existDirHandle
}
