const express = require('express');
const app = express();
const index = require('./views/index.js');
const morgan = require('morgan');
const path = require('path');
const models = require('./models');

models.db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', (req, res) => {
    res.send(index.main());
});

const init = async () => {
    await models.User.sync();
    await models.Page.sync();

    const PORT = 1337;
    app.listen(PORT, () => {
        console.log('starting')
    });
}

init();

