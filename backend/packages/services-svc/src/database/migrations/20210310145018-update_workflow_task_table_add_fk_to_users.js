'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('workflow_tasks', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_workflow_tasks_to_users',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
    })
  },

  down: async (queryInterface) => {
    return queryInterface.removeConstraint('workflow_tasks', 'fk_workflow_tasks_to_users')
  }
};
