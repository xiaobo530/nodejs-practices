
import axios from 'axios';
import qs from 'qs'

async function test() {
    const url = "https://ecomm.one-line.com/ecom/CUP_HOM_3003GS.do";

    const headers = {
        "content-type": "application/x-www-form-urlencoded"
    }
    const data = qs.stringify({ f_cmd: 3, vsl_cd: 'OACT', skd_voy_no: '0005' })
    const response = await axios.post(url, data, { headers });
    console.log(response.status);
    console.log(response.data);
}


test();


// post https://ecomm.one-line.com/ecom/CUP_HOM_3003GS.do
// content-type: application/x-www-form-urlencoded

// f_cmd=3
// &vsl_cd=OACT
// &skd_voy_no=0005