import * as yaml from 'js-yaml'
import * as fs from 'fs';

//load yaml from string

let str = 'abc : \n  - 1 \n  - 2 \n  - 3 '
let doc = yaml.load(str);
console.log(doc);

str = 'website: \n name: 中文名称 \n url : \n  - https://a.com \n  - https://b.com \n  - https://c.com '
doc = yaml.load(str);
console.log(doc);


str = `
movies: 
  title: 风声 
  url: 
    - https://a.com
    - https://b.com
    - https://c.com
`

// - \n
// name: 第一集 \n
// url: https://1.com \n
doc = yaml.load(str);
console.log(doc);

str = `
movies: 
  title: 风声 
  url: 
    - 
      name: one
      uri: 1.com
    - 
      name: two
      uri: 2.com
    - 
      name: three
      uri: 3.com
`

doc = yaml.load(str);
console.log(JSON.stringify(doc));


// load yaml from a file

const file = fs.readFileSync('./data/example.yaml');

doc = yaml.load(file.toString());

console.log(doc);


console.log(yaml.dump(doc));