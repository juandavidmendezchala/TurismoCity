const { Rueter, Router } = require("express");
const {
  Scheduler,
  User,
  MailSends,
  Whishes,
  Activity,
} = require("../models/index");
const nodemailer = require("nodemailer");
const { Op } = require("sequelize");
const router = Router();

contentHTML = `
<h2>Mensaje de Agenda de lowHenry</h2>
`;

contentHTML2 = `
<h2>Mensaje de Deseos Guardados en lowHenry</h2>
`;

const transporter = nodemailer.createTransport({
  host: "mail.sib-2000.com.ar",
  port: 587,
  secure: false,
  auth: {
    user: "lowhenry@sib-2000.com.ar",
    pass: "lowhenry2021",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

var activitiesAEnviar = [];

router.post("/sched-email/:fecha", async (req, res) => {
  const { fecha } = req.params;
  console.log(fecha);
  const listEmail = await Scheduler.findAll({
    include: User,
    where: {
      fecharec: fecha,
      enviado: false,
    },
  });
  let emailsenviados = 0;
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let fechactual = day + "/" + month.toString().padStart(2, "0") + "/" + year;
  let horactual = hour + ":" + minute;

  const aenviarEmail = listEmail.map((correo) => {
    console.log(correo.user.email);
    emailsenviados++;
    enviandoEmail(correo.user.email, correo.notas, correo.user.name);
    guardandoEnvio(fecha, horactual, correo.user.email);
    setearEnviado(correo.id);
    // console.log(listEmail[0]["id"])
  });
  if (emailsenviados === 0)
    return res.status(200).json("No se encontraron recordatorios");
  else
    return res
      .status(200)
      .json("Se enviaron " + emailsenviados + " recordatorios");
});

async function enviandoEmail(correo, texto, name) {
  const info = await transporter.sendMail({
    from: "Low Henry te recuerda!, <lowhenry@sib-2000.com.ar>",
    to: correo,
    subject: "Agendaste en nuestro servicio el siguiente recordatorio",
    html:
      "<h1>Hola " +
      name +
      "</h1><br>" +
      contentHTML +
      "<br><h2>Agendaste</h2><br><h3>" +
      texto +
      "<h3><br><h3>Muchas Gracias por elegir nuestros servicios<h3><br><img src='' alt='LowHenry' />",
  });
}

const guardandoEnvio = async (date, time, emailsend) => {
  objGuardar = {
    date,
    time,
    emailsend,
  };
  const guardaenvio = await MailSends.create(objGuardar);
};

const setearEnviado = async (id) => {
  objGuardar = {
    enviado: true,
  };
  let modificado = await Scheduler.update(objGuardar, { where: { id: id } });
};

router.get("/emailsended", async (req, res) => {
  try {
    const mailsended = await MailSends.findAll();
    console.log(mailsended);
    res.status(200).send(mailsended);
  } catch (err) {
    res.status(400).send("No se pudo obtener los envios" + err);
  }
});

var actividades = [];
let deseosenviados = 0;

router.get("/whish-emails", async (req, res) => {
  const WhishList = await Whishes.findAll({
    include: User,
  });

  WhishList &&
    WhishList.map( async (whish) => {
      enviarWhishDestino(
        whish.destino,
        whish.fechaini,
        whish.fechafin,
        whish.presupuesto,
        whish.cupos,
        whish.user.email,
        whish.user.name
      );
    });

  if ((deseosenviados = 0))
    return res.status(200).send("No se encontraron listas de deseos");
  else {
    return res.status(200).json({
      message: "Se enviaron emails coincidentes con deseos guardados",
      enviados: deseosenviados,
    });
  }
});

const enviarWhishDestino = async (
  destino,
  fechini,
  fechfin,
  presup,
  cupos,
  email,
  nombre
) => {
  //ver si puedo traer actividades coincidentes con la agenda
  var arraycondestino = [];
  if (!destino || destino === "") {
    try {
      const getAllActivity = await Activity.findAll({
        include: User,
        where: {
          date: {
            [Op.between]: [fechini, fechfin],
          },
          price: {
            [Op.between]: [0, presup],
          },
          places: {
            [Op.gte]: [cupos],
          },
        },
      });
      getAllActivity &&
        getAllActivity.map((activity) => {
          objectActivity = {
            idactivity: activity.id,
            dia: activity.date,
            destino: activity.city,
            precio: activity.price,
            nombre: activity.name,
            detalle: activity.description,
            cupos: activity.places,
            ofrece: activity.user.email,
          };
          arraycondestino.push(objectActivity);
        });
      if (arraycondestino.length > 0) {
        var linea1 =
          "Se encontraron las siguientes actividades correspondientes a tu deseo<br <br/>";
        var texto2 = "";
        arraycondestino.map((acti) => {
            let link = "https://lowhenry-psi.vercel.app/activity/" + acti.idactivity
            texto2 += "<a href=" + link +">" + acti.nombre + "</a><br/>";
          });
        var texto = linea1 + texto2;
        deseosenviados++;
        // console.log(deseosenviados)
        // console.log(texto)
        // Mandar email de a cuerdo al deseo y sus actividades
        enviandoEmailWhish(email, texto, nombre);
        texto = "";
        linea1 = "";
        texto2 = "";
      }
      return arraycondestino;
    } catch (err) {
      console.log(err);

      // return res.send({ message: "No se pudo obtener la agenda" + err, });
    }
  } else {
    try {
      // const { destino, fechini, fechfin, presup, cupos } = req.params;
      // const destabuscar = destino.toUpperCase()
      const getAllActivity = await Activity.findAll({
        include: User,
        where: {
          city: {
            [Op.iLike]: "%" + [destino] + "%",
          },
          date: {
            [Op.between]: [fechini, fechfin],
          },
          price: {
            [Op.between]: [0, presup],
          },
          places: {
            [Op.gte]: [cupos],
          },
        },
      });

      getAllActivity &&
        getAllActivity.map((activity) => {
          objectActivity = {
            idactivity: activity.id,
            dia: activity.date,
            destino: activity.city,
            precio: activity.price,
            nombre: activity.name,
            detalle: activity.description,
            cupos: activity.places,
            ofrece: activity.user.email,
          };
          arraycondestino.push(objectActivity);
        });

      if (arraycondestino.length > 0) {
        var linea1 =
          "Se encontraron las siguientes actividades correspondientes a tu deseo<br <br/>";
        var texto2 = "";
        arraycondestino.map((acti) => {
           let link = "https://lowhenry-psi.vercel.app/activity/" + acti.idactivity
          texto2 += "<a href=" + link +">" + acti.nombre + "</a><br/>";
        });
        var texto = linea1 + texto2;
        deseosenviados++;
        // console.log(deseosenviados)
        // console.log(texto)
        // Mandar email de a cuerdo al deseo y sus actividades
        enviandoEmailWhish(email, texto, nombre);
        texto = "";
        linea1 = "";
        texto2 = "";
      }
      return arraycondestino;
      // return res.statusend(getAllActivity);
    } catch (err) {
      console.log(err);
      // return res.send({
      //  message: "No se pudo obtener la agenda" + err,
      // });
    }
  }
  
};


async function enviandoEmailWhish(correo, texto, name) {
  console.log("enviando cporre", correo, texto, name);
   const info = await transporter.sendMail({
    from: "Low Henry encontró actividades para vos!, <lowhenry@sib-2000.com.ar>",
    to: correo,
    subject: "Segun tus deseos guardados, aquí te mostramos actividades",
    html:
      "<h1>Hola " +
      name +
      "</h1><br>" +
      contentHTML +
      "<br><h2>Deseo de actividades</h2><br><h3>" +
      texto +
      "<h3><br><h3>Muchas Gracias por elegir nuestros servicios<h3><br><img src='' alt='LowHenry' />",
  });
}

module.exports = router;
