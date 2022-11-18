import { Request, Response, Router } from 'express'
import UserController from './app/controllers/UserController'

const router = Router()

router.post('/users', (req: Request, res: Response) => {
  console.log('entro')
  return res.send('ok')
})

export default router
