module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    banner_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    image_url: { type: DataTypes.STRING, allowNull: false },
    link_url: { type: DataTypes.STRING, allowNull: true },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
  }, {
    tableName: 'banners',
    timestamps: true,
  });
  return Banner;
};