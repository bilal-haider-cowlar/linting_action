const User = require('../../models/users')

const Check_Existing_User = async (email) => {
  return await User.findOne({ email: email })
}

const Create_User = async (email, password) => {
  const createdUser = await User.create({ email: email, password: password })
  createdUser.save()
  return null
}

exports.Check_Existing_User = Check_Existing_User
exports.Create_User = Create_User
