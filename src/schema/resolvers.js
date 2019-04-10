const {User} =require('../models/User');

const resolver={
    Query:{
        async getAllUsers(){
          return await User.findAll();

        },
        async getUserById(id){
            return await User.findByPk(id);
        },


    },
    Mutation:{
        async createUser(root,{input}){

            return await User.create(input);
        },
        async deleteUser(root,{id}){
            return await  User.destroy({where:{id:id}})
        },
        async updateUser(root,{id,input}){
            return await  User.update({...input,id},{where:{id}}).then((res)=>{
                if (res[0]===1){
                    return User.findOne({where:{id}})
                }
                return 'fail';
            })
        }

    }
};


module.exports=resolver;
