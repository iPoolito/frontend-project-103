import fs from 'fs';
import path from 'path';
import getDiff from './utils/diff.js';
import { parseFile } from './utils/parse.js';
import format from './utils/format.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (fullFilePath) => {
  try {
    const extension = path.extname(fullFilePath).split('.').pop();
    const data = parseFile(fs.readFileSync(fullFilePath, 'utf-8'), extension);
    return data;
  } catch (err) {
    console.error(`Error reading file "${fullFilePath}":`, err.message);
    return null;
  }
};

export default function genDiff({ path1, path2, formatType = 'json' }) {
  const firstFilePath = getFullPath(path1);
  const secondFilePath = getFullPath(path2);

  const firstFileData = readFile(firstFilePath);
  const secondFileData = readFile(secondFilePath);

  if (!firstFileData || !secondFileData) {
    console.error('Error reading one or both files. Please check the file paths and formats.');
    return;
  }

  const diff = getDiff({ dataFile1: firstFileData, dataFile2: secondFileData });
  const formattedDiff = format({ data: diff, formatType });
  console.log({ formattedDiff });
  return formattedDiff;
}
