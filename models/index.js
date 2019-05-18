const Page = require('./page.js');
const User = require('./user.js');

Page.belongsTo(User, {as: 'author'});

module.exports = { Page, User };