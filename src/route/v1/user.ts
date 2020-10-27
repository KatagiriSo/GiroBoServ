import express from 'express';
import { Auth } from '../../auth';
import UserModel from "./../../models/userModel"
const router = express.Router()


router.get('/', Auth.isAuthenticated, (req, res) => {
    UserModel
        .find()
        .then((users) => {
        res.json(users)
    })
})

router.get('/:id', Auth.isAuthenticated, (req, res) => {
    const userId = req.params.id;
    UserModel
        .findById(userId, (err, user) => {
        res.json(user)
    })
})

router.post('/', Auth.isAuthenticated, (req, res) => {

    let user = new UserModel()
    console.log("1")

    user.name = req.body.name;
    user.screen_name = req.body.screen_name;
    user.bio = req.body.bio;
    console.log("2")
    console.log(user)
    console.log(user.save)


    const saved = user.save(function (err,pro) {
        console.log(pro)
        if (err) {
            res.send(err)
        } else {
            console.log("success")
            res.json({message:"Success"})
        }

    })

    console.log(saved)
})



router.put('/:id', Auth.isAuthenticated, (req, res) => {
    const userId = req.params.id
    UserModel
        .findById(userId, (err, user) => {
            if (err) {
                res.send(err)
            } else {
                if (user == null) {
                    res.json({ message: "no user" })
                    return
                }
                user.name = req.body.name;
                user.screen_name = req.body.screen_name;
                user.bio = req.body.bio

                user.save((err) => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.json({message:"Success"})
                    }
                })


            }
    })
})

module.exports = router