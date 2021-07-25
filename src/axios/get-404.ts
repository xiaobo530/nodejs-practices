import axios from 'axios';


async function test() {
    const url = "https://www.baidu.com/404";
    try {
        const response = await axios.get(url);
        console.log(response);
    } catch (err) {
        console.log(err.response.status);
        console.log(err.toJSON());
    }


}


test();

