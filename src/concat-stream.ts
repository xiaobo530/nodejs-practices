import * as fs from 'fs-extra';
import concat from 'concat-stream';

function buffers() {

    let rs = fs.createReadStream('./data/example.json');
    let cs = concat(buffer => {
        console.log(buffer);
        console.log(buffer.toString());
    });

    rs.pipe(cs);
}

function arrays() {
    var write = concat(buffer => {
        console.log(buffer);

    })
    write.write([1, 2, 3]);
    write.write([4, 5, 6]);
    write.end();
}

function uint8Arrays() {

    var write = concat(buffer => {
        console.log(buffer);

    })
    
    var a = new Uint8Array(3)
    a[0] = 97; a[1] = 98; a[2] = 99
    write.write(a)
    write.write('!')
    write.end(Buffer.from('!!1'))
}

buffers();
arrays();
uint8Arrays();