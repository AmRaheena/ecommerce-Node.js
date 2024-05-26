const mongoose=require('mongoose');
const customerProductSchema=new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }   
});
const CustomerProduct=mongoose.model('CustomerProduct',customerProductSchema);
module.exports={ CustomerProduct };