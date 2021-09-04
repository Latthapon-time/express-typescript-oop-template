import express, { Request, Response, Router } from 'express';

export default class memberRoutes { 

    public router: Router = express.Router()
    public path: string = '/member'

    public config(): Router {

        this.router.get('/', (req: Request, res: Response): Response => {
            return res.status(200).json({ path : this.path })
        })

        return this.router
    }
}