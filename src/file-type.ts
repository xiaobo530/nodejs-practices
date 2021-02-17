import * as ft from 'file-type';

async function one(){
    console.log(await ft.fromFile('./data/fish.jpeg'));
}

one();

