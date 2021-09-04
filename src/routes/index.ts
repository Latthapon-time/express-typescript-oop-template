// Routes
import Post from './post'
import Member from './member'

export type Routers = (typeof Post | typeof Member)

export const routers: Routers[] = [
    Post,
    Member
]
