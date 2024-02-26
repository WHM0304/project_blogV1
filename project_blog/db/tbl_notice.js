import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_notice extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    n_seq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    n_uid: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    n_title: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_notice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "n_seq" },
        ]
      },
    ]
  });
  }
}
