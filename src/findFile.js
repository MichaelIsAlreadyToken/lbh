'use strict'

const path = require('path')
const fs = require('fs')
let  join = require('path').join;

/**
 *
 * @param filePath
 */
function findFile (filePath) {
  
    let result = []
    function finder(path){
      let files=fs.readdirSync(path);
      files.forEach((val,index) => {
        let fPath=join(path,val);
        let stats=fs.statSync(fPath);
        if(stats.isDirectory()) finder(fPath);
        if(stats.isFile()) result.push(fPath);
      });
    }
    finder(filePath);
    return result;
}



module.exports = findFile

