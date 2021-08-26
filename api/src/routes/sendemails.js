const { Rueter, Router } = require('express')
const { Scheduler, User } = require('../models/index')
const nodemailer = require('nodemailer')
const router = Router()

router.post('/sched-email/:fecha', async (req, res) => {
    const { fecha } = req.params 
    const listEmail = await Scheduler.findAll({
        include: User,
        where: {
            fecharec: fecha
        }
    })
    const enviarEmail = listEmail.map(correo => {
        console.log(correo.user.email)

        enviandoEmail(correo.user.email, correo.notas, correo.user.name)
    // console.log(listEmail[0]["id"])

 
})
    res.status(200).json( listEmail )
})

async function enviandoEmail(correo, texto, name) {
    contentHTML = `
    <h1>Mensaje de Agenda de lowHenry</h1>
    `
    const transporter = nodemailer.createTransport({
        host: 'mail.sib-2000.com.ar',
        port: 587,
        secure: false,
        auth: {
            user: 'lowhenry@sib-2000.com.ar',
            pass: 'lowhenry2021'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const info = await transporter.sendMail({
        from: 'Low Henry te recuerda!, <lowhenry@sib-2000.com.ar>',
        to: correo,
        subject:  'Hola ' + name + " agendaste en nuestro servicio el siguiente recordatorio",
        text: texto + "<br>" + contentHTML + "<br>Muchas Gracias"
    })

} 

module.exports = router