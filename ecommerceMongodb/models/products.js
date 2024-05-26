const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    title:{
        require:true,
        type:String
    },
    actual_price:Number,
    offer_percentage:Number,
    offer_price:Number,
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Brand'
    }
});
const Product=mongoose.model('Product',productSchema);
module.exports=Product;