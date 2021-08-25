const { Rueter, Router } = require('express')
const { Scheduler, User, MailSends } = require('../models/index')
const nodemailer = require('nodemailer')
const router = Router()

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

router.post('/sched-email/:fecha', async (req, res) => {
    const { fecha } = req.params 
    console.log(fecha)
    const listEmail = await Scheduler.findAll({
        include: User,
        where: {
            fecharec: fecha,
            enviado: false
        }
    })
    let emailsenviados = 0
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let fechactual = day+"/"+month.toString().padStart(2,'0')+"/"+year
    let horactual = hour+":"+minute

    const aenviarEmail = listEmail.map(correo => {
        console.log(correo.user.email)
        emailsenviados++
        enviandoEmail(correo.user.email, correo.notas, correo.user.name)
        guardandoEnvio(fecha,horactual,correo.user.email)
        setearEnviado(correo.id)
        // console.log(listEmail[0]["id"])

 
    })
    if (emailsenviados === 0)
    return res.status(200).json("No se encontraron recordatorios")
    else
    return res.status(200).json("Se enviaron " + emailsenviados + " recordatorios")
})

async function enviandoEmail(correo, texto, name) {
    const info = await transporter.sendMail({
        from: 'Low Henry te recuerda!, <lowhenry@sib-2000.com.ar>',
        to: correo,
        subject:  'Hola ' + name + " agendaste en nuestro servicio el siguiente recordatorio",
        text: texto + "<br>" + contentHTML + "<br>Muchas Gracias"
    })
} 

const guardandoEnvio = async (date, time, emailsend) => {
    objGuardar = {
        date,
        time,
        emailsend
    }
    const guardaenvio = await MailSends.create(objGuardar)
}

const setearEnviado = async (id) => {
    objGuardar = {
        enviado: true,
    }
    let modificado = await Scheduler.update(objGuardar, { where: { id: id }})
}

router.get("/emailsended", async (req,res) => {
    try {
        const mailsended = await MailSends.findAll()
        console.log(mailsended)
        res.status(200).send(mailsended)
    } catch (err) {
        res.status(400).send("No se pudo obtener los envios"+err)
    }
})

module.exports = router