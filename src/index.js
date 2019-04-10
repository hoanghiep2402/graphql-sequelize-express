const {buildSchema} =require("graphql") ;
const express =require('express') ;
const bodyParser= require('body-parser');
const {PORT} =require('./config');
const app= express();
const graphqlExpress=require('express-graphql');
const {schema}= require('./schema/Schema');
const {User}=require('./models/User');
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json());




app.use('/graphql', graphqlExpress({
    schema: schema,
    graphiql:true
}));



// app.put('/user/:id',(req,res)=>{
//     console.log(req.body);
//     User.update(req.body,{where:{id:req.params.id}}).then((result)=>{
//         console.log(result)
//     }).catch((e)=>{
//         console.log(e)
//     })
// });




app.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)});


