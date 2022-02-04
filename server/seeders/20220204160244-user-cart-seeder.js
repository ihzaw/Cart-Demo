'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const userData = [
      {
        username: 'sampleuser1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    const cartData = [
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('Users', userData);
    await queryInterface.bulkInsert('Carts', cartData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users')
    await queryInterface.bulkDelete('Carts');
  }
};
