
import * as fs from 'fs-extra'


fs.realpath('.').then(val => {
    console.log(val);
});

fs.readdir('.').then(dirs => {
    dirs.forEach(async dir => {
        const dd = await fs.realpath(dir);
        console.log(dd);
    })
})


fs.readJson('./data/example.json')
    .then(json => {
        console.log(json) // => 0.1.3
    })
    .catch(err => {
        console.error(err)
    })

fs.ensureDir('./output');

fs.createReadStream('./data/example.json').pipe(fs.createWriteStream('./output/example.json'));

