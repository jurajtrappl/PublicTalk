const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('../models/user');

dotenv.config({
    path: path.resolve(`${__dirname}/../config/.env`)
});

const { validateRegisterInput } = require('../validation/register');
const { validateLoginInput } = require('../validation/login');

const register = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(422).json({
                    email: "Email already exists"
                });
            } else {
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(req.body.password, salt, function (err, hash) {
                        if (err) throw err;

                        const newUser = new User({
                            name: req.body.name,
                            email: req.body.email,
                            password: hash
                        });

                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        })
        .catch(err => res.status(500).send({
                message:
                    err.message || 'Some error when retrieving all messages.'
            })
        );
}

const login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    emailnotfound: "Email not found"
                });
            } 

            bcrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name
                        };

                        jwt.sign(
                            payload,
                            process.env.SECRET,
                            {
                                expiresIn: 31556926
                            },
                            (err, token) => {
                                if (err) throw err;

                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                })
                            }
                        )
                    } else {
                        return res.status(400).json({
                            passwordincorrect: "Incorrect password"
                        });
                    }

                    
                })
                .catch(err => {
                    res.status(500).json({
                        errors: err
                    });
                })
        })
        .catch(err => res.status(500).send({
            message:
                err.message || 'Some error when retrieving all messages.'
        })
    );
}

module.exports = { register, login }