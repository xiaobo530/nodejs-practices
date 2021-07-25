import axios from 'axios';
import qs from 'qs'

async function test() {
    const url = "https://api.maersk.com/vessels";
    const params = { maerskCode: 766 };
    const response = await axios.get(url, { params });
    console.log(response.status);
    console.log(response.data);
}

async function test2() {
    const url = "https://api.maersk.com/vessels";
    const params = new URLSearchParams();
    params.append('maerskCode', '766')
    const response = await axios.get(url, { params });
    console.log(response.status);
    console.log(response.data);
}

async function test3() {
    const url = "https://api.maersk.com/vessels";
    const params = qs.stringify({ maerskCode: 766 });
    // params.append('maerskCode', '766')
    const response = await axios.get(url, { params });
    console.log(response.status);
    console.log(response.data);
}

// test();
// test2();
test3();

