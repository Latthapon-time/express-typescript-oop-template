// Libs 
import { Request, Response } from 'express'

// Models
import RewardModels from '../models/reward'

export default class RewardControllers {

    public async getReward(_req: Request, res: Response):Promise<Response> {

        const rewardModels = new RewardModels()

        const rewardList = await rewardModels.getReward()

        return res.status(200).json({
            data: rewardList
        })
    }

    public async getRewardById(req: Request, res: Response) {

        const { rewardId } = req.params

        const rewardModels = new RewardModels()

        const reward = await rewardModels.getRewardById(rewardId)
        
        return res.status(200).json({
            data: reward
        })
    }
}