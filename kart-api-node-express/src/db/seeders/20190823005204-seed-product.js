'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Products', [
        {
          name: 'LG TV',
          price: 250.0,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
      {
        name: 'Sony TV',
        price: 450.0,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        name: 'Samsung TV',
        price: 150.0,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Products', null, {});
  }
};
