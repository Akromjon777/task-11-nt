import { NextFunction, Request, response, Response } from 'express'
import { AppDataSource } from '../../config/config'
import { Users } from '../../entities/user.entities'
import { ErrorHandling } from '../../exceptions/error.handling'
import { Client } from '../redis/createClient'
import { SET_INTERVAL } from '../redis/setInterval'

const GET = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cilint = await Client()
    const users = await cilint?.get('get')

    if (!users) {
      const user: Users[] = await AppDataSource.getRepository(Users).find()
      await cilint?.set('get', JSON.stringify(user))
      return res.json({
        data: user,
      })
    }

    if (users) {
      res.json({
        data: JSON.parse(users),
      })
    }
  } catch (error) {
    console.log(error)
    next(new ErrorHandling(error as any, 400))
  }
}
const POST = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cilint = await Client()
    const users = await cilint?.get('get')
    const postUsers = await cilint?.get('post')
    const { first_name, last_name, email, gender, ip_address } = req.body
    await SET_INTERVAL()

    if (!postUsers) {
      await cilint?.set(
        'post',
        JSON.stringify([
          {
            first_name,
            last_name,
            email,
            gender,
            ip_address,
          },
        ]),
      )
    } else {
      const posts = JSON.parse(postUsers)
      posts.push({
        first_name,
        last_name,
        email,
        gender,
        ip_address,
      })  
      await cilint?.set('post', JSON.stringify(posts))
    }

    if (!users) {
      await cilint?.set(
        'get',
        JSON.stringify([
          {
            first_name,
            last_name,
            email,
            gender,
            ip_address,
          },
        ]),
      )
    } else {
      const posts = JSON.parse(users)
      posts.push({
        first_name,
        last_name,
        email,
        gender,
        ip_address,
      })
      await cilint?.set('get', JSON.stringify(posts))
    }

    res.status(200).json({
      status: 200,
      message: 'Successful'
    })
  } catch (error) {
    console.log(error)
    next(new ErrorHandling(error as any, 400))
  }
}

export { POST, GET }