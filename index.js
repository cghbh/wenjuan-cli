#! /usr/bin/env node
const { program } = require('commander')
const helpOptions = require('./lib/core/help.js')
const createCommands = require('./lib/core/create.js')

program.version(require('./package.json').version)

// 帮助和可选项
helpOptions()
// 创建action
createCommands()

program.parse(process.argv)