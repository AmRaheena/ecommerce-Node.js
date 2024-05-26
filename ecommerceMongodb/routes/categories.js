const express=require('express');
const router=express.Router();
const categoryControllers=require('../controllers/categories');
router.get('/',categoryControllers.getAllCategories);
router.get('/:id',categoryControllers.getCategoryById);
router.post('/',categoryControllers.createCategory);
router.put('/:id',categoryControllers.updateCategory);
router.delete('/:id',categoryControllers.deleteCategory);

module.exports=router;