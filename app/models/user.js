module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
      uid: { type: DataTypes.STRING, primaryKey: true},
      email: { type: DataTypes.STRING, required: true, unique: true, allowNull: false, validate: {isEmail: true} },
      username: { type: DataTypes.STRING, required: true, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, required: true, allowNull: false },
      salt: { type: DataTypes.STRING, required: true, allowNull: false },
      name: { type: DataTypes.STRING, required: true, allowNull: false },
      activationcode: { type: DataTypes.STRING, required: true, allowNull: false},
    	isActive: { type: DataTypes.STRING, required: true, allowNull: false },
      createdate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
     	updatedate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      activationdate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
     	token: { type: DataTypes.STRING, required: true, allowNull: false },
      link: { type: DataTypes.STRING, required: true, allowNull: false },
      id_ua_role: { type: DataTypes.STRING, required: true, allowNull: false },
      permission: { type: DataTypes.STRING, required: true, allowNull: false },
    	deltime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    	last_access:{ type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      current_access:{ type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      id_am_crm: { type: DataTypes.STRING, required: true, allowNull: false },
     	last_password_change_date_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      force_password_change_date_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },


    },
        {
            tableName: 'ua_user_customer'
        });
    return User;
}
