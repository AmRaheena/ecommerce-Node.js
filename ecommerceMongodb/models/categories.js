const mongoose=require('mongoose');
const Brand=require('./brands');
const categorySchema=new mongoose.Schema({
    name:String
});
const Category=mongoose.model('Category',categorySchema);
module.exports=Category ;

