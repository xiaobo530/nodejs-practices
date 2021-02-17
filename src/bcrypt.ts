import bcrypt from 'bcrypt';

function one() {

    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const someOtherPlaintextPassword = 'not_bacon';

    bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
        console.log(hash);

        bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
            console.log(result);
        });

    });

}


async function two() {
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const someOtherPlaintextPassword = 'not_bacon';

    const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
    const result = await bcrypt.compare(myPlaintextPassword, hash);
    
    console.log(hash);
    console.log(result);
}

one();

two();
