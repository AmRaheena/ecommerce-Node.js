const express=require('express');
const router=express.Router();
const orderControllers=require('../controllers/orders')
router.get('/',orderControllers.getAllOrders);
router.get('/:id',orderControllers.getOrderById);
router.post('/',orderControllers.createOrder);
router.put('/:id',orderControllers.updateOrder);
router.delete('/:id',orderControllers.deleteOrder);

module.exports=router;