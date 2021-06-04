import * as ftp from 'basic-ftp'
import * as fs from 'fs-extra'

// Install
// yarn add basic-ftp -S

// Run
// ts-node src/basic-ftp.ts

const client = new ftp.Client();

async function test() {

    console.log('start...');

    await client.access({
        host: "ift.north.inttra.cn",
        user: "s0642981",
        password: "sO2MmQwj",
        // secure: true
    })

    const files = await client.list('/temp');
    files.forEach(file => {
        console.log(file.name);
    })
}

async function test2() {

    console.log('start...');

    await client.access({
        host: "ift.north.inttra.cn",
        user: "s0642981",
        password: "sO2MmQwj",
    })

    const files = await client.list('/temp');
    await client.ensureDir('/temp2');
    // files.forEach(async file => {
    //     console.log(file.name);
    //     await client.rename(`/temp/${file.name}`, `/temp2/${file.name}`);
    // })

    for (let file of files) {
        console.log(file.name);
        await client.rename(`/temp/${file.name}`, `/temp2/${file.name}`);
    }
}

async function test3() {

    console.log('start...');

    await client.access({
        host: "ift.north.inttra.cn",
        user: "s0642981",
        password: "sO2MmQwj",
    })

    const files = await client.list('/temp');
    await client.ensureDir('/temp2');
    // files.forEach(async file => {
    //     console.log(file.name);
    //     await client.rename(`/temp/${file.name}`, `/temp2/${file.name}`);
    // })

    for (let file of files) {
        console.log(file);
        console.log(file.name + "  " + file.modifiedAt?.getTime());
        const ws = fs.createWriteStream(`${file.name}.tmp`);
        ws.on('finish', () => {
            ws.close();
        });
        await client.downloadTo(ws, `/temp/${file.name}`);
        ws.close();
        // await fs.utimes(`${file.name}.tmp`, <Date>file.modifiedAt, <Date>file.modifiedAt);
        await fs.rename(`${file.name}.tmp`, file.name);
    }
}

// test();
// test2();
test3();




