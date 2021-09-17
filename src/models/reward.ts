import { Db, ObjectId } from 'mongodb'
import  * as mongodb from '../libs/mongodb'

export default class RewardModels {

    private db:Db

    constructor(){
        this.db =  mongodb.db
    }

    public async getReward(limit = 1) {

        const reward = await this.db.collection('pantip_point_reward').find().limit(limit).toArray()

        return reward
    }

    public async getRewardById(rewardId: string) {

        const query = {
            _id : new ObjectId(rewardId)
        }

        const reward = await this.db.collection('pantip_point_reward').findOne(query)

        return reward
    }
}