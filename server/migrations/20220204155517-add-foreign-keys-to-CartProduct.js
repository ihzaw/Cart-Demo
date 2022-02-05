'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('CartProducts', 'cartId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Carts',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
    await queryInterface.addColumn('CartProducts', 'productId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Products',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('CartProducts', 'productId')
    await queryInterface.removeColumn('CartProducts', 'cartId')
  }
};
