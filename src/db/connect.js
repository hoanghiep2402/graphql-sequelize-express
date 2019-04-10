const Sequelize= require('sequelize');


const db= new Sequelize('user','root','12345678x@X',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
}, );

db.authenticate().then(()=>{
    console.log('Connected to Database');
}).catch((err)=>{
    console.log('Fail to connect to Database');
});

db.sync(()=>{console.log('Waiting for sync DB')}).then(()=>{
    console.log(`DB created!`)
});



module.exports={db};
