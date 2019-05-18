const Sequelize = require('sequelize');
const db = require('./db.js')

const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
});

const slugify = (title) => {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

// hook to create the slug within the instance
Page.beforeValidate((pageInstance) => {
    pageInstance.slug = slugify(pageInstance.title);
}); 

module.exports = Page;
