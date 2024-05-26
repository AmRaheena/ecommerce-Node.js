const Order =require('../models/orders');
const mongoose=require('mongoose');
async function getAllOrders(){
    const orders=await Order.find().populate(['product']);
    return orders;
}
async function getOrderById(id){
    const order=await Order.findById(id);
    return order;
}

async function createOrder(order){

    const newOrder=new Order(order);
    try {
        const savedData=newOrder.save();
        return savedData;
    } catch (error) {
        return false;  
    }
   
}

async function updateOrder(id,newOrder){
    const updatedOrder=await Order.findByIdAndUpdate(id,newOrder);
    try {
        const savedData=updateOrder.save();
        return savedData;
    } catch (error) {
        return false;  
    }
}
async function deleteOrder(id){
    const order=await Order.findByIdAndDelete(id);
    return true;
}
module.exports={ createOrder,getAllOrders,getOrderById,updateOrder,deleteOrder };

