
import axios from 'axios';
import qs from 'qs'

async function test() {
    const url = "https://schedule.api.maersk.com/maeu/deadlines";
    const data = {
        "params": [
            {
                "sC": "37O5HQ17XCL3X",
                "vC": "766",
                "vN": "128W"
            }
        ]
    }
    const headers = {
        "content-type": "application/json"
    }
    const response = await axios.post(url, data, { headers });
    console.log(response.status);
    console.log(response.data);
}


test();



// post https://schedule.api.maersk.com/maeu/deadlines
// content-type: application/json

// {
//     "params": [
//         {
//             "sC": "37O5HQ17XCL3X",
//             "vC": "766",
//             "vN": "128W"
//         },
//         {
//             "sC": "37O5HQ17XCL3X",
//             "vC": "Y28",
//             "vN": "129W"
//         }
//     ]
// }
