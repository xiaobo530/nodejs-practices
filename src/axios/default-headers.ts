import axios from 'axios';


async function test() {
    const baseURL = "https://www.oocl.com/eng/ourservices/vessels";
    const agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36';
    const instance = axios.create({baseURL});
    instance.defaults.headers.common['User-Agent'] = agent;
    const response = await instance.get('pclass4500/Pages/ooclpanama.aspx');
    console.log(response.data);
}

test();

