const {db} = require('../db/connect');
const Sequelize = require('sequelize');

const Post = db.define('post', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:true,
        primaryKey:true,
        autoIncrement: true,
    },
    body: {
        type: Sequelize.JSON,
        allowNull: false
    },
    authorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    totalComment: {
        type: Sequelize.ENUM('Male','Female'),
        allowNull: false
    },
    comment:{
        type: Sequelize.JSON,
        allowNull:true
    },

},{
    freezeTableName: true,
});

Post.associate=(models)=>{
    Post.belongsTo(models.user)
};


module.exports={Post};




