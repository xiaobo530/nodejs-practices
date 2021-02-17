import axios from 'axios';


async function baidu() {
    const response = await axios.get('https://baidu.com');
    console.log(response.data);
}


baidu();