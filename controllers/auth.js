//controller for authentication ? do i need it ?


import { User } from '@models'
import { EMAIL_EXISTS, INCORRECT_CREDENTIALS, EMAIL_NOT_FOUND, SOMETHING_WRONG, IS_OK } from '@constants/handleMessages'
import { generalErrors } from '@helpers/errorHandlers'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const postLogin = (req, res, next) => {
  const { email, password } = req.body
  return User.findOne({ where: { email } })
    .then((user) => {
      if (user) {
        return user.verifyPassword(password, user.passwordHash).then((isMach) => {
          if (isMach) return res.status(IS_OK).json(user.generateToken())
          return generalErrors(res, INCORRECT_CREDENTIALS.statusCode, INCORRECT_CREDENTIALS.msg)
        })
      }
      return generalErrors(res, EMAIL_NOT_FOUND.statusCode, EMAIL_NOT_FOUND.msg)
    })
    .catch((err) => next(err))
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const postSignUp = (req, res, next) => {
  const { email, password, fullName } = req.body
  return User.findOne({ where: { email } })
    .then((user) => {
      if (user) {
        return generalErrors(res, EMAIL_EXISTS.statusCode, EMAIL_EXISTS.msg)
      }
      return User.create({ email, password, fullName }).then((user) => {
        delete user.dataValues.password
        return res.status(IS_OK).json(user.generateToken())
      })
    })
    .catch((err) => next(err))
  //generalErrors(res, SOMETHING_WRONG.statusCode, SOMETHING_WRONG.msg)
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const logout = (req, res, next) => {
  return User.findByPk(req.user.id)
    .then((user) => {
      user.update({ acceptTokenAfter: new Date() }).then(() => {
        return res.status(IS_OK).json({ message: 'Log out successfully' })
      })
    })
    .catch((err) => next(err))
}