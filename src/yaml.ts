import * as yaml from 'yaml';
import * as fs from 'fs'

let file = fs.readFileSync('./data/example.yaml', 'utf8')
let doc = yaml.parse(file);
console.log(doc);
console.log(typeof doc);

console.log(yaml.stringify(doc));

doc = yaml.parse('3.14159')
console.log(doc); 
console.log(typeof doc);

doc = yaml.parse('[ true, false, maybe, null ]\n')
console.log(doc);
console.log(typeof doc);
console.log(Array.isArray(doc));

