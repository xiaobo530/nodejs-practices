import qs from 'qs'

let obj = qs.parse('a=c');

console.log(obj);

obj = qs.parse('a=1&b=2&c=3');

console.log(obj);

let obj2 = {
    a: '123',
    b: '456',
    c: 888
}

console.log(qs.stringify(obj2));


