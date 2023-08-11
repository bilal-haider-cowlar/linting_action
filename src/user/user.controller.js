const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Check_Existing_User, Create_User } = require('./user.service')
const { validateEmailPassword } = require('../../utils/validator')

const signUp = async (req, res) => {
  const { password, email } = req.body

  const { error } = validateEmailPassword(req.body)
  if (error) {
    console.log(error)
    return res.json({ success: false, message: 'Invalid Email and Password' })
  }
  let existingUses
  try {
    existingUses = await Check_Existing_User(email)
  } catch (e) {
    return res.json({ success: false, message: 'Error in finding user' })
  }
  if (existingUses) {
    return res.json({
      error: 'User of this email already exists',
      success: false,
    })
  }
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    await Create_User(email, hashedPassword)
    console.log('user added')
    const token = jwt.sign({ email }, 'weather', { expiresIn: 360000 })
    return res.json({
      token: token,
      success: true,
    })
  } catch (e) {
    return res.json({ error: 'Error in signUp', success: false })
  }
}

const login = async (req, res) => {
  const { password, email } = req.body
  const { error } = validateEmailPassword(req.body)
  if (error) {
    console.log(error)
    return res.json({ success: false, message: 'Invalid Email and Password' })
  }
  let existingUses
  try {
    existingUses = await Check_Existing_User(email)
  } catch (e) {
    return res.json({ success: false, message: 'Error in finding user' })
  }

  if (!existingUses) {
    return res.json({ success: false, msg: 'User not found' })
  }
  console.log(existingUses.password)
  console.log(password)
  let isMatch = await bcrypt.compare(password, existingUses.password)

  if (!isMatch) {
    return res.json({
      msg: 'Invalid Credentials',
      success: false,
    })
  }
  const token = jwt.sign({ email }, 'weather', { expiresIn: 360000 })

  return res.json({
    token,
    success: true,
  })
}

exports.signUp = signUp
exports.login = login
