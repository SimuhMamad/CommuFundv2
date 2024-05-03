const express = require("express")
const router = express.Router()

const bookController = require('../controllers/book.controller')

// router.get("/", bookController.getAll)
// router.get("/:id", bookController.getById)
// router.post("/", bookController.create)
// router.put("/:id", bookController.updateById)
// router.delete("/:id", bookController.deleteById)

router.get("/", bookController.getUsers)
router.post("/postPass", bookController.checkUser)
router.post("/postRegis", bookController.insertUser)

module.exports = router