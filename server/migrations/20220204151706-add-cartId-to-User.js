'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'cartId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Carts',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'cartId')
  }
};
