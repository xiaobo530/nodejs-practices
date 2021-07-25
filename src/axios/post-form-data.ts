
import axios from 'axios';
import qs from 'qs';
import FormData from 'form-data';
import fs from 'fs';

async function test() {
    const url = "https://ecomm.one-line.com/ecom/CUP_HOM_3003GS.do";

    const form = new FormData();
    form.append('my_field', 'my value');
    form.append('my_buffer', Buffer.alloc(10));
    form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

    axios.post('https://example.com', form, { headers: form.getHeaders() })
}


test();


// post https://ecomm.one-line.com/ecom/CUP_HOM_3003GS.do
// content-type: application/x-www-form-urlencoded

// f_cmd=3
// &vsl_cd=OACT
// &skd_voy_no=0005