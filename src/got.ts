import got from 'got';


async function baidu() {
    const response = await got("https://baidu.com");
    console.log(response.body);
}

async function getJson(){
    const {body} = await got.post('https://httpbin.org/anything', {
		json: {
			hello: 'world'
		},
		responseType: 'json'
	});

	console.log(body);
}

baidu();
getJson();
