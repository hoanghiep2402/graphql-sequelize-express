const {db} = require('../db/connect');
const Sequelize = require('sequelize');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:true,
        primaryKey:true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM('Male','Female'),
        allowNull: false
    },
    post:{
        type: Sequelize.JSON,
        allowNull:true
    },
},{
    freezeTableName: true,
    timestamps:false
});

User.associate=(models)=>{
    User.hasMany(models.post);
};


module.exports={User};




