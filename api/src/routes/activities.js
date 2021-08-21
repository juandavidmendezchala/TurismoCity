const { Router } = require('express');
const { Purchase, Activity, User, favorite } = require('../models/index')
const { Op } = require("sequelize");

const router = Router();


router.get("/", async (req, res) => {
  try {
    const getAllActivities = await Activity.findAll();
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
  } = req.body;
   
  if (country && !city && !price && !startDate && !endDate){
    Activity.findAll({
      where: {
        country: country
      },
    })
    .then((resut) => 
    res.send(resut));
  }

  if (country && city && !price && !startDate && !endDate){
    Activity.findAll({
      where: {
        country: country,
        city: city
      },
    })
    .then((resut) => 
    res.send(resut));
  }

  
  if (country && city && price && !startDate && !endDate){
    Activity.findAll({
      where: {
        country: country,
        city: city,
        price: {
          [Op.lte]: price,
        }
      },
    })
    .then((resut) => 
    res.send(resut));
  }

  if (country && city && price && startDate && endDate){
    Activity.findAll({
      where: {
        country: country,
        city: city,
        price: {
          [Op.lte]: price,
        },
        date: {
          [Op.between]: [startDate, endDate]
        },
      },
    })
    .then((resut) => 
    res.send(resut));
  }

  if (!country && !city && price && !startDate && !endDate){
    Activity.findAll({
      where: {
        price: {
          [Op.lte]: price,
        }
      },
    })
    .then((resut) => 
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
        },
      });
      return res.send(getCountries);
    } catch (err) {
      console.log(err);
      return res.send({ message: "Por favor, rellene todos los campos" });
    }
  }*/
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  const activityDetail = await Activity.findOne({
    where: {
      id,
    },
  });
  res.send(activityDetail);
});

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
  });
  const findUser = await User.findOne({
    where: {
      email,
    },
  });
  await findUser.addActivity(createPack);
  return res.send(createPack);
});

module.exports = router;
