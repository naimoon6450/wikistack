const express = require('express');
const app = express();
// const index = require('./views/index.js');
const morgan = require('morgan');
const path = require('path');
const db = require('./models/db');
const { User, Page } = require('./models/index');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use(express.urlencoded());

db.authenticate().
then(() => {
  console.log('connected to the database');
})
.catch((e) => {
    console.error(e);
})

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', (req, res) => {
    res.redirect('/wiki');
});

app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

const init = async () => {
    await User.sync();
    await Page.sync();
    // drops the old tables and creates new ones if there were any changes made
    db.sync({force: true});
    const PORT = 1337;
    app.listen(PORT, () => {
        console.log('starting')
    });
}

init();

