"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("workflow_fan_negotiated_funds", {
      fields: ["workflow_fan_id"],
      type: "foreign key",
      name: "workflow_fan_negotiated_funds_fan",
      references: {
        table: "workflow_fan",
        field: "id",
      },
      onDelete: "no action",
      onUpdate: "no action",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "workflow_fan_negotiated_funds",
      "workflow_fan_negotiated_funds_fan"
    );
  },
};
