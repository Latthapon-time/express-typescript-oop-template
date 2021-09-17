// Libs
import Server from './libs/server'
import * as mongodb from './libs/mongodb'

// Router
import { routers } from './routes'

class App {

    private server: Server
    private mongodb

    constructor() {

        this.server = new Server()
        this.mongodb = mongodb

        this.runningApplication()
    }

    private async runningApplication(): Promise<void> {
        
        await this.mongodb.connect()
        this.server.initializeMiddlewares()
        this.server.initializeRouter(routers)
        this.server.listen()
    }
}

new App()