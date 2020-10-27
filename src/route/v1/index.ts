import express from 'express';

const router = express.Router()

const article = require("./article")
const user = require("./user")
const login = require('./login')
const logout = require('./logout')

router.use("/article", article)
router.use("/user", user)
router.use("/login", login)
router.use("/logout", logout)

module.exports = router