const path = require('path')
const fs = require('fs')
const debug = require('debug')("mock");
const chalk = require("chalk")
const context = process.cwd()
let mock = {}
function walk(dirPath){
 fs.readdirSync(dirPath).forEach(function(file){
      if(fs.statSync(dirPath+"/"+file).isDirectory()){
        walk(dirPath+"/"+file)
      }else{
        Object.assign(mock, require(dirPath+"/"+file))
      }
  })
}

walk(path.resolve(context,'../mock'))

// function walk (dirPath) {
//   fs.readdirSync(dirPath)
//     .forEach(function (file) {
//       if (fs.statSync(dirPath + '/' + file).isDirectory()) {
//         walk(dirPath + '/' + file)
//       } else if (path.extname(file) === '.js') {
//         Object.assign(mock, require(dirPath + '/' + file))
//       }
//     })
// }

// walk(path.join(__dirname + '/mock'))
debug(JSON.stringify(mock))
module.exports = mock
