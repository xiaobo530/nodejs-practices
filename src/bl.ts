import BufferList from 'bl';
import * as fs from 'fs-extra'

function one() {
    const bl = new BufferList()
    bl.append(Buffer.from('abcd'))
    bl.append(Buffer.from('efg'))
    bl.append('hi')                     // bl will also accept & convert Strings
    bl.append(Buffer.from('j'))
    bl.append(Buffer.from([0x3, 0x4]))

    console.log(bl.length) // 12

    console.log(bl.slice(0, 10).toString('ascii')) // 'abcdefghij'
    console.log(bl.toString('ascii')) // 'abcdefghij'
    console.log(bl.toString()) // 'abcdefghij\u0003\u0004'
    console.log(bl.readUInt16BE(10)) // 0x0304
}

one();