import joi from 'joi';

function one() {

    const schema = joi.object(
        {
            username: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
        }
    );

    const { error, value } = schema.validate({ username: 'abc', birth_year: 1994 });

    console.log(error);
    console.log(value);


}

one();