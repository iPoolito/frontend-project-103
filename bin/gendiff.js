#!/usr/bin/env node
import * as commander from 'commander';
import genDiff from '../index.js'
const { program } = commander;

program
    .version("0.0.1")
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1> <filepath2>')
    .option("-f, --format <type>", "output format")
    .action((path1, path2) => {
        console.log(path1, path2, program.opts().format);
        genDiff({ path1, path2, options: program.opts().format })
    });

// Display help if no arguments are provided
if (process.argv.length <= 2) {
    program.outputHelp();
    process.exit(0);
}

program.parse(process.argv);

