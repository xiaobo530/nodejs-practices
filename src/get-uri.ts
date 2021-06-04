import getURI from 'get-uri';

// Install
// yarn add get-uri -S


// Run
// ts-node src/get-uri.ts


async function getHttpPage() {
    const uri = "https://www.baidu.com/";
    const readable = await getURI(uri);
    readable.pipe(process.stdout);
}

getHttpPage();

async function getHttpFile() {
    const uri = "https://hub.fastgit.org/lorenwest/node-config/blob/master/README.md";
    const readable = await getURI(uri);
    readable.pipe(process.stdout);
}

getHttpFile();


