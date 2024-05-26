const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:Number,
    unit_price:Number,
    total_amount:Number,
    order_date:Date
});
const Order=mongoose.model('Order',orderSchema);
module.exports=Order;