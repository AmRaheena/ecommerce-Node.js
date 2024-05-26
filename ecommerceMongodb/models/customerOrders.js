const mongoose=require('mongoose');
const { Customer }=require('./customers');
const { Order }=require('./orders');
const customerOrderSchema=new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Order'
    }
});

const CustomerOrder=mongoose.model('CustomerOrder',customerOrderSchema);
module.exports={ CustomerOrder };