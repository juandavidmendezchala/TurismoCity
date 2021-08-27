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
                isAdmin: user.isAdmin,
                token: generateToken(user)
            })
            return;
        }
    }
    res.status(401).send({ message: 'Invalid email or password' })
})

router.get('/seller', async (req, res) => {

    //const {id} = req.params

    const user = await User.findAll({
        where: {
            type: 'SELLER'
        }
    })
    
    return res.send(user)
})

router.get('/email/:id', async (req, res) => {

    const {id} = req.params

    const user = await User.findOne({
        where: {
            id: id
        }
    })
    
    return res.send(user)
})

router.put("/:idUser/:status", async (req, res) => {
    
    const { idUser} = req.params
    const status = req.params.status
    console.log(idUser, status)
    await User.update({
        state: status
    }, {
        where: {
            id: idUser
        }
    })

    res.send(console.log("Estado de la publicacion cambiado con exito"))
})

router.post('/register', async (req, res) => {
    let {
        name,
        email,
        password,
        birthdate,
        picture
    } = req.body;
    console.log('pas',password)
    const user = await User.findOne({
        where: {
            email: email
        }
    })
    
    if(email == 'lowhenryapp@gmail.com'){
        if (!user) {
            await User.create({
                name: name,
                email: email,
                birthdate: birthdate,
                password:"1234",
                picture: picture,
                isAdmin: true,
                type:"CLI"
            }
            )
        }
    }else{
    if (!user) {
        await User.create({
            name: name,
            email: email,
            birthdate: birthdate,
            password:"1234",
            picture: picture,
            isAdmin: false,
            type:"CLI"
        }
        )
    }
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
        token: generateToken(createdUser),
        type: createdUser.type,
        state: createdUser.state,
        birthdate: createdUser.birthdate,
        isAdmin: createdUser.isAdmin,
       
    })
})

module.exports = router;
