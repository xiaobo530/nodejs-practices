import { read, ReadStream } from 'fs-extra';
import * as iconv from 'iconv-lite'
import * as stream from 'stream';
import { Readable } from 'stream';
import * as fs from 'fs-extra';
import MemeryStream from 'memorystream';

let buf = iconv.encode("中文字符串!", 'utf-8');

console.log(buf.toString());

buf = iconv.encode("中文字符串!", 'gb2312');

console.log(iconv.decode(buf, 'gb2312'));


let ms = new MemeryStream();

ms.pipe(iconv.decodeStream('utf-8'))
    .pipe(iconv.encodeStream('gb2312'))
    .pipe(fs.createWriteStream('./output/gb2312.txt'));

ms.write('中文字符串');
ms.write('!\n');
ms.write('笑傲江湖!\n');
ms.end('!');

