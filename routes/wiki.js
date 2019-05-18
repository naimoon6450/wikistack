const wikiRouter = require('express').Router();
const { addPage, wikiPage, main } = require('../views/index');
const { Page } = require('../models/index')


wikiRouter.get('/', async (req, res, next) => {
    try {
        const allPages = await Page.findAll();
        res.send(main(allPages));
    } catch (error) { next(error) }
})


wikiRouter.post('/', async (req, res, next) => {
    const page = new Page( {
        title: req.body.title,
        content: req.body.someText,
    })
    try {
        await page.save();
        // this gave me issues, used req.params.slug smh
        res.redirect(`/wiki/${page.slug}`);
    } catch (error) { next(error) }

})

wikiRouter.get('/add', (req, res) => {
    res.send(addPage());
})

wikiRouter.get('/:slug', async (req, res, next) => {
    try {
        const somePage = await Page.findOne( {
            where: {slug: req.params.slug}
        })
        res.send(wikiPage(somePage));
    } catch (error) { next(error) }
})


module.exports = wikiRouter;