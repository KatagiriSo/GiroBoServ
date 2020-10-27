import express from "express"
const router: express.Router = express.Router()

router.post('/', (req, res) => {
    req.logout();
    res.json({ "message": "success" });
})

module.exports = router
