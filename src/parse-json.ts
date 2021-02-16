import parseJson from 'parse-json'


let jsonStr = '{"foo": true}';

let obj = parseJson(jsonStr);

console.log(obj);
