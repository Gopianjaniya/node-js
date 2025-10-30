const express = require('express')
const { register, getUser } = require('../Controller/user.controller')

const userRoute = express.Router()

userRoute.post('/register',register)
userRoute.get('/get-user',getUser)

module.exports={userRoute}