import express from 'express';


const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message:"Article Hello, World!!!"
    })
})

module.exports = router