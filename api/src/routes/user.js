const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models/index')
const generateToken = require('../utils')


const router = Router();

router.post('/signin', async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })
    if (user) {
        if (req.body.token === user.token) {
            res.send({
                id: user.id,
                name: user.name,
                email: user.email,
                country: user.country,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            })
            return;
        }
    }
    res.status(401).send({ message: 'Invalid email or password' })
})

router.post('/register', async (req, res) => {
    let {
        name,
        email,
        birthdate,
        userCountry
    } = req.body;

    const user = await User.findOne({
        where: {
            email: email
        }
    })
    if (!user) {
        await User.create({
            name: name,
            email: email,
            birthdate: birthdate,
            country: userCountry,
            isAdmin: false
        }
        )
    }

    const createdUser = await User.findOne({
        where: {
            email: email
        }
    });
    res.send({
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        birthdate: createdUser.birthdate,
        country: createdUser.country? createdUser.country : "",
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser)
    })
})

module.exports = router;
