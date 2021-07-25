import axios from 'axios';


async function test() {
    const response = await axios.head('https://baidu.com');
    console.log(response.data);
}


test();