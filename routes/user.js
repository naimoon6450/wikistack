const userRouter = require('express').Router();
const { userList, userPage } = require('../views/index')
const { Page, User } = require('../models/index');

userRouter.get('/', async (req, res, next) => {
    const allUsers = await User.findAll();
    res.send(userList(allUsers));
})

userRouter.get('/:id', async (req, res, next) => {
    
})

module.exports = userRouter;