const mongoose=require('mongoose');
const { INTEGER, FLOAT } = require('sequelize');
const addressSchema=new mongoose.Schema({
    house_no:{
        require:true,
        type:String
    },
    street:String,
    city:String,
    district:String,
    state:String
});
const customerSchema=new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:String,
    phone:Number,
    address:addressSchema

});
const Customer=mongoose.model('Customer',customerSchema);
module.exports=Customer;