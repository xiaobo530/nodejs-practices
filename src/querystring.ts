import qs from 'querystring';

let search = qs.parse('a=1&b=2&c=3');

console.log(search);

let {a,b,c} = qs.parse('a=1&b=2&c=3');

console.log(a);
console.log(b);
console.log(c);