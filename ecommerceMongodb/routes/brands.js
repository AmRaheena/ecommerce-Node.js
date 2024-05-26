const express=require('express');
const router=express.Router();
const brandControllers=require('../controllers/brands')
router.get('/',brandControllers.getAllBrands);
router.get('/:id',brandControllers.getBrandById);
router.post('/',brandControllers.createBrand);
router.put('/:id',brandControllers.updateBrand);
router.delete('/:id',brandControllers.deleteBrand);

module.exports=router;