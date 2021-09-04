// Libs
import Server from './libs/server'

// Router
import { routers } from './routes'

const server: Server = new Server()

Promise.resolve().then(() => {
    server.initializeRouter(routers)
    server.listen()
})