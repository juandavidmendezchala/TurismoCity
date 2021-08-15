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
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user)
            })
            return;
        }
    }
    res.status(401).send({ message: 'Invalid email or password' })
})

router.post('/register', async (req, res) => {
    console.log(req.body)
    let {
        name,
        email,
        password,
        birthdate
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
            password: bcrypt.hashSync(password, 8)
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
        birthdate: user.birthdate,
        token: generateToken(createdUser)
    })
})

module.exports = router;
