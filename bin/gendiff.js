#!/usr/bin/env node
import * as comander from 'commander'
const { program } = comander

program
    .version("0.0.1")
    .description('Compares two configuration files and shows a difference.')
    .option("-h, --help", "output usage information")
    .parse(process.argv);


const options = program.opts();
console.log(options)
if (options.help) {
    console.log(" Usage: gendiff [options]")
    console.log("Compares two configuration files and shows a difference.")
    console.log(" Options:")
    console.log(" - V, --version        output the version number")
    console.log(" - h, --help           output usage information")
}