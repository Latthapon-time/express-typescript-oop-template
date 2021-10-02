import { Db, ObjectId } from 'mongodb'
import  * as mongodb from '../libs/mongodb'

export default class UserModels {

    private db:Db

    constructor(){
        this.db =  mongodb.db
    }

    public async getUser(limit = 1) {

        const user = await this.db.collection('pantip_point_user').find().limit(limit).toArray()

        return user
    }

    public async getUserById(userId: string) {

        const query = {
            _id : new ObjectId(userId)
        }

        const user = await this.db.collection('pantip_point_user').findOne(query)

        return user
    }
}