import MemoryStream from 'memorystream';
import * as fs from 'fs-extra';

let ms = new MemoryStream();

ms.pipe(fs.createWriteStream('./output/memorystream-demo.txt'));
ms.write('123\n');
ms.write('abc\n');
ms.end('ok!\n');

