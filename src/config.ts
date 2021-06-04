import config from 'config';

// Install
// yarn add config -S
// yarn add js-yaml -S
// yarn add @types/config -D


// Run
// set NODE_ENV=bob
// ts-node src/config.ts

const configObj = <any>config;

console.log("hello config.");

console.log(config.get('dbConfig'));

console.log(config.get('bob-config'));

console.log(config.get('bob-config.key'));

console.log(config.get('bob-config.array-obj'));

console.log(configObj.dbConfig);

console.log(configObj.null);

console.log(configObj["bob-config"]);
