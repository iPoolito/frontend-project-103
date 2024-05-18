import fs from 'fs';
import path from 'path';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (fullFilePath) => {
    try {
        const data = fs.readFileSync(fullFilePath, 'utf-8');
        const extension = path.extname(fullFilePath)
    } catch (err) {
        console.error(err);
    }
}

export default function genDiff({ path1, path2, options }) {

    const firstFilePath = getFullPath(path1)
    const secondFilePath = getFullPath(path2)
    console.log({ firstFilePath, secondFilePath })
    readFile(firstFilePath)
}