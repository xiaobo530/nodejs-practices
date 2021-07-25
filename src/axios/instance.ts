import axios from 'axios';


async function test() {
    const baseURL = "http://news.baidu.com";
    const instance = axios.create({baseURL});
    const response = await instance.get('guonei');
    console.log(response.data);
}

test();