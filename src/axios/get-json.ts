import axios from 'axios';


async function test() {
    const response = await axios.get('https://api.maersk.com//vessels?maerskCode=766');
    console.log(response.data);
}


test();

