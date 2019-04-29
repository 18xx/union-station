const library = require('18xx-library');
const path = require('path');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/rules.tsx`);

  library.all().forEach((game) => {
    createPage({
      path: `/rules/${game.name}`,
      component: template,
      context: {
        game,
      },
    });
  });
};
