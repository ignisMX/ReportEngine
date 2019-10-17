import fs from 'fs';
import path from 'path';

export const readFile = (html) => {
    let file = fs.readFileSync(path.resolve(__dirname, html), 'utf8');
    return file;
}