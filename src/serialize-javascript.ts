import jsserialize from 'serialize-javascript';

let obj = {
    str: 'string',
    num: 0,
    obj: { foo: 'foo' },
    arr: [1, 2, 3],
    bool: true,
    nil: null,
    undef: undefined,
    inf: Infinity,
    date: new Date("Thu, 28 Apr 2016 22:02:17 GMT"),
    map: new Map([['hello', 'world']]),
    set: new Set([123, 456]),
    fn: function echo(arg: any) { return arg; },
    re: /([^\s]+)/g,
    big: BigInt(10),
};


let str = jsserialize(obj);

console.log(str);
