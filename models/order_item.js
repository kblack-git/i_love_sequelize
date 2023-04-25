'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Order_item.hasMany(models.Order, {
      //   foreignKey: 'order_id',
      //   as: 'orders'
      // })
      // Order_item.hasMany(models.Product, {
      //   foreignKey: 'product_id',
      //   as: 'products'
      // })
    }
  }
  Order_item.init({
    order_id: DataTypes.STRING,
    product_id: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order_item',
  });
  return Order_item;
};