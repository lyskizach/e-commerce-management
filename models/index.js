// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // foreignKey: 'product_tag',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // foreignKey: 'product_tag',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
