/*
 * @Author: Liu LongBin
 * @Date: 2020-01-16 16:22:16
 * @Last Modified by: Liu LongBin
 * @Last Modified time: 2020-01-20 10:47:23
 */

// 需求：
// 1. 格式化时间
// 2. HTML Escape

const date = require('itheima-utils1/src/dateFormat')
const escape = require('itheima-utils1/src/htmlEscape')

module.exports = {
  ...date,
  ...escape
}
