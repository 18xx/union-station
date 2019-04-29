const library = require('18xx-library');
const path = require('path');

const pathLookup = (name) => {
  if (name === '18??') {
    name = '18-question-marks';
  }
  return `rules/${name}/`;
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/rules.tsx`);

  library.all().forEach((game) => {
    createPage({
      path: pathLookup(game.name),
      component: template,
      context: {
        game,
      },
    });
  });
};
