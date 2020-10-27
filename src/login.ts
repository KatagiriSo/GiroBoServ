import express from "express"
import passport, { Passport, use } from "passport"
import { Strategy } from "passport-local"
import { nextTick } from "process"

const router: express.Router = express.Router()
const user1 = {
    name: "Taro",
    password: "Taro123"
}

passport.use(new Strategy((username, password, done) => {
    if (username !== user1.name) {
        return done(null, false)
    } else if (password !== user1.password) {
        return done(null, false)
    } else {
        return done(null, {username:username, password:password})
    }
}))

passport.serializeUser((user, done) => {
    console.log("Serialize ...")
    done(null, user)
})

passport.deserializeUser((user, done) => {
    console.log('Deserialize ...')
    done(null, user)
})



router.get('/', (req, res) => {
    console.log(req.session);
    res.json({"message":"do login"})
})

router.get('/failure', (req, res) => {
    console.log(req.session);
    res.json({ "message": "failure" })
})

router.post('/', (req, res, next) => {
        console.log(req);
        next()
    },
    passport.authenticate('local', {
        session: true,
        failureRedirect: '/failure'
    }),
    (req, res) => {
        console.log(req.user);
        res.json({ "message": "success" });
    }
)

router.post('/logout', (req, res) => {
    req.logout();
    res.json({ "message": "success" });
})

module.exports = router


// const app: express.Express = express()

// //CORS許可
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//     next()
// })

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


// const router: express.Router = express.Router()

// app.get('/', function (req, res) {
//     res.send('hello world')
// })

// router.get('/api/getTest', (req: express.Request, res: express.Response) => {
//     res.send(req.query)
// })
// router.post('/api/postTest', (req: express.Request, res: express.Response) => {
//     res.send(req.body)
// })

// app.use(router)

// app.listen(3000, () => {console.log('Example app listning on port 3000')})
