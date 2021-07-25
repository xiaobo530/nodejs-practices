import axios from 'axios';


async function test() {
    const baseURL = "http://www.cma-cgm.com";
    const agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36';
    const instance = axios.create({ baseURL });
    instance.defaults.headers.common['User-Agent'] = agent;
    instance.defaults.timeout = 500;
    const response = await instance.get('products-services/line-services/flyer/fal2', { timeout: 5000 });
    console.log(response.data);
}

test();

// @base_url = http://www.cma-cgm.com

// @vessel_name = 9783497/cosco-shipping-aries
// get {{base_url}}/en/group/at-a-glance/fleet/ships/{{vessel_name}}
