const { Router } = require('express');
const { Purchase, Activity, User, favorite, FeedBack,Type, type_activity } = require('../models/index')

const { Op } = require("sequelize");

const router = Router();


router.get("/", async (req, res) => {
  try {
    const getAllActivities = await Activity.findAll(
       {where:
         {active: true,
          estadoAdmin:'ACE'}
       ,
       include: [{
        model: Purchase
       }]
      });
    return res.send(getAllActivities);
  } catch (err) {
    return res.send({
      message:
        "Ha ocurrido un error con el servidor, ¡Intentá refrescar la página!",
    });
  }
});


router.post("/filter", async (req, res) => {
  let {
    country,
    city,
    price,
    startDate,
    endDate,
    type
  } = req.body;

  if (country && !city && !price && !startDate && !endDate && !type ){
    /* console.log("country && !city && !price && !startDate && !endDate") */
    Activity.findAll({
      where: {
        country: country, 
        active: true
      },
      include: 
        { model: Type, through: type_activity } 
      
    })
    .then((resut) => 
    res.send(resut));
  }
  if (country && city && !price && !startDate && !endDate && !type ){
    /* console.log("country && city && !price && !startDate && !endDate")
    console.log(country, city) */
    Activity.findAll({
      where: {
        country: country,
        city: city, 
        active: true
      },
      include: 
        { model: Type, through: type_activity } 
      
    })
    .then((resut) => 
    res.send(resut));
  }
 
  
  if (country && city && price && !startDate && !endDate && !type ){
   /*  console.log("country && city && price && !startDate && !endDate") */
    Activity.findAll({
      where: {
        country: country,
        city: city,
        price: {
          [Op.lte]: price,
        }, 
        active: true
      },
      include: 
        { model: Type, through: type_activity } 
      
    })
    .then((resut) => 
    res.send(resut));
  }

  if (country && city && startDate && endDate && price && type){
    /* console.log("country && city && price && startDate && endDate")
    console.log(country, city, price, startDate, endDate) */
    Activity.findAll({
      where: {
        country: country,
        city: city,
        price: {
          [Op.lte]: price,
        },
        active: true,
        date: {
          [Op.between]: [startDate, endDate]
        }},
          
        include: 
        { model: Type,
          where:{
          id: type
        },
           through: type_activity } 
      
    })
    .then((resut) => 
    res.send(resut));
  }

  if (!country && !city && price && !startDate && !endDate && !type){
    Activity.findAll({
      where: {
        price: {
          [Op.lte]: price,
        },
        active: true
      },
      include: 
        { model: Type, through: type_activity } 
      
    })
    .then((resut) => 
    res.send(resut));
  }
  if (!country && !city && !price && startDate && endDate && !type ){
    Activity.findAll({
      where: {
        active: true,       
        date: {
          [Op.between]: [startDate, endDate]
        }
      },
      include: 
        { model: Type, through: type_activity } 
      
    })
    .then((resut) => 
    res.send(resut));
  }
  if (!country && !city && !price && !startDate && !endDate && type){
    Activity.findAll({
     where: {
        active: true
      },
      include: 
        { model: Type,
          where:{
          id: type
        },
           through: type_activity } 
      
    })
    .then ((resut) =>
    res.send(resut));
  }
  
  /*if (
    country ||
    city ||
    price ||
    places ||
    duration ||
    initialTime ||
    startDate ||
    endDate
  ) {
    try {
      const getCountries = await Activity.findAll({
        where: {
          country,
          city,
          date: {
            [Op.between]: [startDate || "1999-01-01", endDate || "2025-01-01"],
          },
          price: {
            [Op.between]: [price || "1.0", "9.999"],
          },
          places: {
            [Op.between]: [places || "1", "999"],
          },
          duration: {
            [Op.between]: [0, duration || 99],
          },
          initialTime: {
            [Op.between]: [initialTime || "00:00", "24:00"],
          },
          active: true
        },
      });
      return res.send(getCountries);
    } catch (err) {
      console.log(err);
      return res.send({ message: "Por favor, rellene todos los campos" });
    }
  }*/
});
router.get("/adminTodas", async (req, res) => {
  
  
  const todas = await Activity.findAll()

  res.send(todas)
})
router.put("/admin/:id/:s", async (req, res) => {
  const { id, s } = req.params

  console.log(id, s)
  await Activity.update({
      estadoAdmin: s
  }, {
      where: {
          id: id
      }
  })

  res.send(console.log("Estado de la publicacions cambiado con exito"))
})

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  const activityDetail = await Activity.findOne({
    where: {
      id,
    },
    include: [{
          model: Purchase
         }]
  });
  res.send(activityDetail);
});

router.get("/get/landingGet", async(req, res) => {
  const LandingActivities = await Activity.findAll({limit: 3})
  return res.send(LandingActivities)
})

router.post("/", async (req, res) => {
  let {
    email,
    name,
    date,
    description,
    price,
    places,
    duration,
    initialTime,
    images,
    country,
    city,
    type
  } = req.body;
  const createPack = await Activity.create({
    name,
    date,
    description,
    price,
    places,
    duration,
    initialTime,
    images,
    country,
    city,
    active: true,
    estadoAdmin: 'PEN'
  });
  // const updateUser = await User.update({
  //   isAdmin: true
  // }, {
  //   where: {
  //     email
  //   }
  // })
  const findUser = await User.findOne({
    where: {
      email,
    },
  });
  console.log('FINDUSER----->',findUser)
  await createPack.addType(type) //Recibe el Id del type
  await findUser.addActivity(createPack);
  return res.send(createPack);
});



module.exports = router;
