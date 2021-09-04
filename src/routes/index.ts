// Routes
import Post from './post'
import Member from './member'
import Blog from './blog'

export type Routers = (typeof Post | typeof Member | typeof Blog)

export const routers: Routers[] = [
    Post,
    Member,
    Blog
]
