import express from 'express';
import session from 'express-session';
import Mongoose from "mongoose";
import passport from 'passport';
import { Auth } from './auth';
const app: express.Express = express()
const port = process.env.PORT || 3000

Mongoose.Promise = global.Promise
Mongoose.connect("mongodb://localhost:27017/ExpressAPI", {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
Mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

//CORS許可
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

const router = require('./route/v1/')
console.log("router" + router)
app.use('/api/v1/', router)

// app.get('/', (req, res) => {
//     res.send('Hello World2!')
// })

// app.get('/api/v1/', (req, res) => {
//     res.json({
//         message:"Hello, Json"
//     })
// })

const server = app.listen(port, () => {
    console.log(`listen on http://localhost:${port}`)
})