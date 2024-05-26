const Product = require('../models/products');
const orderRepositories=require('../repositories/orders');
const { findTotalAmount ,findUnitPrice }=require('../services/services');
async function getAllOrders(req,res){
    const orders=await orderRepositories.getAllOrders();
    res.status(200).json(orders);
   }
   async function getOrderById(req,res){
       const id=req.params.id;
       const order=await orderRepositories.getOrderById(id);
       res.status(200).json({message:"success",order:order});
   }
   async function createOrder(req,res){
    
       order={
            customer:req.body.customer,
            product:req.body.product,
            quantity:req.body.quantity,
            order_date:new Date()
        }
        order.unit_price=await findUnitPrice(order.product);
       order.total_amount=findTotalAmount(order.unit_price,order.quantity);
       const newOrder=await orderRepositories.createOrder(order);
       res.status(201).json({message:"order placed successfully",order:newOrder});
   }
   async function updateOrder(req,res){
   
       const id=req.params.id;
       order={
        customer:req.body.customer,
        product:req.body.product,
        quantity:req.body.quantity,
        order_date:new Date()
    }
    order.unit_price=await findUnitPrice(order.product);
    order.total_amount=findTotalAmount(order.unit_price,order.quantity);
    const newOrder=await orderRepositories.createOrder(order);
        res.status(200).json({message:"order updated successfully",order:newOrder});
}
   async function deleteOrder(req,res){
       const id=req.params.id;
       const order=await orderRepositories.deleteOrder(id);
       res.status(200).json({message:"order cancelled successfully"});
   }

module.exports={ createOrder,getAllOrders,getOrderById,updateOrder,deleteOrder };