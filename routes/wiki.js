const wikiRouter = require('express').Router();
const { addPage, wikiPage, main } = require('../views/index');
const { Page, User } = require('../models/index')


wikiRouter.get('/', async (req, res, next) => {
    try {
        const allPages = await Page.findAll();
        res.send(main(allPages));
    } catch (error) { next(error) }
})


wikiRouter.post('/', async (req, res, next) => {
    // const page = new Page( {
    //     title: req.body.title,
    //     content: req.body.someText,
    // })
    try {
        // using .create automatically stores in db where as new Page requires .save
        // await page.save();
        const page = await Page.create({title: req.body.title, content: req.body.someText});

        // findOrCreate returns an array, where array[0] is the instance val and array[1] is boolean of instance existance
        const [user, wasCreated] = await User.findOrCreate({where: {name: `${req.body.authName}`, email: `${req.body.email}`}});
        // setAuthor instead of setUser (since we said belongsTo User as 'author')
        page.setAuthor(user);
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