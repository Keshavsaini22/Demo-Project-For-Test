'use strict';
const { Model } = require('sequelize');
const Enums = require('../libs/enums');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      //   this.belongsTo(models.User_role, { foreignKey: 'role' });
      //   models.User_role.hasOne(User, { foreignKey: 'role' });

      //   this.belongsTo(models.Company_detail, { foreignKey: 'company_id' });
      //   models.Company_detail.hasOne(User, { foreignKey: 'company_id' });
    }
  }
  User.init({
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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 100],
          msg: 'First Name should be less than 100 characters'
        },
        notEmpty: {
          msg: 'First Name is required'
        },
        notNull: {
          msg: 'First Name is required'
        },
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 100],
          msg: 'Last Name should be less than 100 characters'
        },
        notEmpty: {
          msg: 'Last Name is required'
        },
        notNull: {
          msg: 'Last Name is required'
        },
      }
    },
    role: {
      type: DataTypes.ENUM(...Object.values(Enums.USER_ROLE)),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Role is required'
        },
        notNull: {
          msg: 'Role is required'
        },
      }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Email is required'
        },
        notNull: {
          msg: 'Email is required'
        },
        isEmail: {
          args: true,
          msg: 'Email is required'
        },
        is: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        len: {
          args: [1, 255],
          msg: 'Email should be less than 255 characters'
        }
      }
    },
    docs: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    // company_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'company_details',
    //     key: 'id',
    //   },
    //   validate: {
    //     notEmpty: {
    //       msg: 'Company id is required'
    //     },
    //     notNull: {
    //       msg: 'Company id is required'
    //     },
    //   }
    // },
    username: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [1, 100],
          msg: 'User Name should be less than 100 characters'
        },
        notEmpty: {
          msg: 'User Name is required'
        },
        notNull: {
          msg: 'User Name is required'
        },
      }
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        len: {
          args: [1, 64],
          msg: 'Password should be less than 64 characters'
        }
      }
    },
    date_of_birth: {
      type: DataTypes.DATE,
    },
    phone: {
      type: DataTypes.STRING(10),
      validate: {
        len: {
          args: [1, 10],
          msg: 'Phone should be less than 10 characters'
        }
      }
    },
    pincode: {
      type: DataTypes.STRING(6),
      validate: {
        len: {
          args: [1, 6],
          msg: 'Pincode should be less than 6 characters'
        }
      }
    },
    country: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1, 100],
          msg: 'Country should be less than 100 characters'
        }
      }
    },
    state: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1, 100],
          msg: 'State should be less than 100 characters'
        }
      }
    },
    city: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1, 100],
          msg: 'City should be less than 100 characters'
        }
      }
    },
    street: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1, 100],
          msg: 'Street should be less than 100 characters'
        }
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
    modelName: 'User',
  });
  return User;
};