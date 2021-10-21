'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('workflows', 'title', {
      type: Sequelize.STRING(80),
      allowNull: false,
    })
  },

  down: async (queryInterface) => {
    return queryInterface.changeColumn('workflows', 'title', {
      type: Sequelize.STRING(50),
      allowNull: false,
    })
  }
};
