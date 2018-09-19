/**
 * 使用module.exports = value向外暴露一个函数
 */
"use strict"
module.exports.aapa = function () {
  console.log('module2() aapa1')
}
module.exports.aapa2 = function () {
    console.log('module2() aapa2')
}