import express from "express"

const app: express.Express = express()

//CORS許可
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const router: express.Router = express.Router()

app.get('/', function (req, res) {
    res.send('hello world')
})

router.get('/api/getTest', (req: express.Request, res: express.Response) => {
    res.send(req.query)
})
router.post('/api/postTest', (req: express.Request, res: express.Response) => {
    res.send(req.body)
})

app.use(router)

app.listen(3000, () => {console.log('Example app listning on port 3000')})
