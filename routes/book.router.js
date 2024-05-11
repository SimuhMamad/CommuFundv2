const express = require("express")
const router = express.Router()

const bookController = require('../controllers/book.controller')

router.get("/", (req, res) => {
    res.sendFile("../login.html", {root: __dirname});
})

router.get("/get-User", bookController.getUser)
router.post("/postPass", bookController.checkUser)
router.post("/postRegis", bookController.insertUser)
router.post("/postOrganisasi", bookController.insertOrganisasi)
router.post("/postProyek", bookController.insertProyek)

module.exports = router