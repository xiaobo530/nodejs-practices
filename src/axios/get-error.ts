import axios from 'axios';


async function test() {
    const url = "https://error.url";
    try {
        const response = await axios.get(url);
        console.log(response.status);
    } catch (err) {
        console.log(err);
    }


}


test();

