const express=require('express');
const router=express.Router();
const customerProductControllers=require('../controllers/customerProducts');
router.get('/',customerProductControllers.getAllCustomerProducts);
router.get('/:id',customerProductControllers.getCustomerProductById);
router.post('/',customerProductControllers.createCustomerProduct);
router.put('/:id',customerProductControllers.updateCustomerProduct);
router.delete('/:id',customerProductControllers.deleteCustomerProduct);

module.exports=router;