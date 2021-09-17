// Libs
import express, { Application } from 'express'
import http from 'http' 

// Routers
import { routers, Routers } from '../routes'

export default class Server{

    private app: Application = express()
    private readonly port: number

    constructor(prot = 3000){
        this.port = prot
    }

    public listen(): http.Server {
        return this.app.listen(this.port, (): void => console.log(`The server is running on port ${this.port}`))
    }

    public initializeMiddlewares(): void {

        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
    }

    public initializeRouter(arrRouters: Routers[], version = '/v1.0.0'){

        for(const Router of arrRouters) {

            const router = new Router()

            this.app.use(`${version}${router.path}`, router.config())
        }
    }
}