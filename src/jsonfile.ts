import * as jsonfile from 'jsonfile'

let filename = './data/example.json';

jsonfile.readFile(filename, function (err, obj) {
    if (err)
        console.error(err)
    console.dir(obj)
})

jsonfile.readFile(filename)
    .then(obj => console.dir(obj))
    .catch(error => console.error(error))
