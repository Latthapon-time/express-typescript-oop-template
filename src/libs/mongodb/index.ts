// Libs
import { MongoClient, Db } from 'mongodb'

export let db: Db

export const connect = async (): Promise<void> => {

    const url: string = ''
    const port: number = 0
    const username: string = ''
    const password: string = ''
    const dbname: string = ''

    const databaseURL: string = `mongodb://${username}:${password}@${url}:${port}/${dbname}`

    const client: MongoClient = new MongoClient(databaseURL)

    await client.connect()

    db = client.db(dbname)

    console.log(`Successfully connected monngodb to database: ${dbname} .`)
}

// export default class Mongodb {

//     private client: MongoClient

//     private readonly url: string = 'mongo-router.devops'
//     private readonly port: number = 27017
//     private readonly username: string = 'dev'
//     private readonly password: string = '4XX7rfa>j}'
//     private readonly dbname: string = 'pantip_month10'

//     private readonly databaseURL: string = `mongodb://${this.username}:${this.password}@${this.url}:${this.port}/${this.dbname}`

//     constructor() {
//         this.client = new MongoClient(this.databaseURL)
//     }

//     public async connect(): Promise<void> {

//         await this.client.connect()

//         console.log(`Successfully connected monngodb to database .`)
//     }

//     public useDatabase() {

//         return this.client.db(this.dbname)
//     }
// }