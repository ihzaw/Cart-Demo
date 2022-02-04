'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('CartProducts', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    })
    await queryInterface.addColumn('CartProducts', 'cartId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Carts',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('CartProducts', 'userId')
    await queryInterface.removeColumn('CartProducts', 'cartId')
  }
};
