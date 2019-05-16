const wikiRouter = require('express').Router();
const { addPage } = require('../views');
const { Page } = require('../models/index')

wikiRouter.get('/', (req, res) => {
    res.send('hello wiki');
})

wikiRouter.post('/', async (req, res, next) => {
    const page = new Page( {
        title: req.body.title,
        content: req.body.someText,
    })

    try {
        await page.save();
        res.redirect('/');
    } catch (error) { next(error) }

})

wikiRouter.get('/add', (req, res) => {
    res.send(addPage());
})

module.exports = wikiRouter;