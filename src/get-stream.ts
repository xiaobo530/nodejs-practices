import getStream from 'get-stream';
import * as fs from 'fs-extra';


async function asString(){

    const stream = fs.createReadStream('./data/example.json');
    console.log(await getStream(stream));
    
}

async function asBuffer(){
    const stream = fs.createReadStream('./data/example.json');
    console.log(await (await getStream.buffer(stream)).toString());
}


asString();
asBuffer();