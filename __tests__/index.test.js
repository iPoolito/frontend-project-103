import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import genDiff from '../src';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) => path.join(__dirname, '../', '__fixtures__', filename);
const readTestsFiles = (filename) => fs.readFileSync(getPath(filename), 'utf-8').trim();

const stylishResult = readTestsFiles('stylish-result.txt');

describe('gendiff', () => {
  test('Format for stylish Result YAML', () => {
    const filepath1 = getPath('file1-y.yaml');
    const filepath2 = getPath('file2-y.yaml');
    expect(genDiff({ path1: filepath1, path2: filepath2, formatType: 'stylish' })).toEqual(stylishResult);
  });
});
