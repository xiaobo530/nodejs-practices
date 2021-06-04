import getURI from 'get-uri';

function getHttps() {
    const uri = "https://hub.fastgit.org/lorenwest/node-config/blob/master/README.md";
    getURI(uri).then(readable => {
        readable.pipe(process.stdout);
        // readable.on('data', (chunk) => {
        //     // console.log(`接收到 ${chunk.length} 个字节的数据`);
        //     console.log(chunk.toString());
        // });
        // readable.on('end', () => {
        //     console.log('已没有数据');
        // });
    })
}

function get(params:type) {
    
}

getHttps();