'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartProduct.init({
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Carts',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }
  }, {
    sequelize,
    modelName: 'CartProduct',
  });
  return CartProduct;
};