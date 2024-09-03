'use strict';
const {
  Model
} = require('sequelize');
const Enums = require('../libs/enums');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    static associate(models) {

      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user', sourceKey: 'id', });
      models.User.hasMany(Record, { foreignKey: 'user_id', as: 'record', sourceKey: 'id', });

    }
  }
  Record.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
    },
    jsonb: {
      type: DataTypes.JSONB,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Record is required'
        },
        notNull: {
          msg: 'Record is required'
        },
      }
    },
    status: {
      type: DataTypes.ENUM(...Object.values(Enums.RECORD_STATUS)),
      defaultValue: 'active',
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      validate: {
        notEmpty: {
          msg: 'User is required'
        },
        notNull: {
          msg: 'User is required'
        },
      }
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deleted_at: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Record',
  });
  return Record;
};