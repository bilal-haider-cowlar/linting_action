const router = require('express').Router()
const authController = require('./user.controller')
router.post('/signup', authController.signUp)
router.post('/login', authController.login)
router.get('/all', (req, res) => {
  res.send({ success: true })
})

module.exports = router
