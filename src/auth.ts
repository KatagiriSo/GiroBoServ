import express from 'express';


export class Auth {
    public static isAuthenticated(req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log("isAuthenticated")
        console.log(req)
        console.log(req.isAuthenticated)
        console.log(req.isAuthenticated())
        if (req.isAuthenticated()) {
            return next()
        } else {
            return res.json({ "message": "do login"})
        }
    }
}
