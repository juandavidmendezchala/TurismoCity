const { Router } = require('express');
const router = Router();

router.get("/", (req, res) => {
    console.log(req.body)
    res.send("recibe")
})

module.exports = router;