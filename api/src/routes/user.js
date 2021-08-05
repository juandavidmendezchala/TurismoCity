const {Router} = require('express');
const bcrypt = require('bcrypt');
const {User} = require('../models/index')
const generateToken = require('../utils')


const router = Router();

router.post('/signin', async(req, res) => {
    const user = await User.findOne({
        where: { email: req.body.email 
    }})
    if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)){
        res.send({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user)
        })
        return;
    }
}
    res.status(401).send({message: 'Invalid email or password'})
})

router.post('/register', async(req, res) => {
    const user = await User.create({
        name: req.body.name, 
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    const [createdUser] = await User.findAll();
    res.send({
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        token: generateToken(createdUser)
    })
})

module.exports = router;
