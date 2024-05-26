const express=require('express');
const router=express.Router();
const customerOrederControllers=require('../controllers/customerOrders');
router.get('/',customerOrederControllers.getAllCustomerOrders);
router.get('/:id',customerOrederControllers.getCustomerOrderById);
router.post('/',customerOrederControllers.createCustomerOrder);
router.put('/:id',customerOrederControllers.updateCustomerOrder);
router.delete('/:id',customerOrederControllers.deleteCustomerOrder);

module.exports=router;