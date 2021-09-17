// Libs
import { Router } from 'express'

// Controllers
import RewardController from '../controllers/reward'

export default class reward {

    public router: Router = Router()
    public path: string = '/reward'

    private controller: RewardController

    constructor(){

        this.controller = new RewardController()
    }

    public config(): Router {

        this.router.get('/', this.controller.getReward)

        this.router.get('/:rewardId', this.controller.getRewardById)

        return this.router
    }
}