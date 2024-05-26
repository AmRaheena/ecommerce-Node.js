const express=require('express');
const router=express.Router();
const productControllers=require('../controllers/products')
router.get('/',productControllers.getAllProducts);
router.get('/:id',productControllers.getProductById);
router.post('/',productControllers.createProduct);
router.put('/:id',productControllers.updateProduct);
router.delete('/:id',productControllers.deleteProduct);

module.exports=router;