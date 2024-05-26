const Product=require('../models/products');
const mongoose=require('mongoose');
async function getAllProducts(){
    const products=await Product.find();
    return products;
}
async function getProductById(id){
    const product=await Product.findById(id);
    return product;
}

async function createProduct(product){

    const newProduct=new Product(product);
    try {
        const savedData=await newProduct.save();
        return savedData;
      } catch (error) {
        return false;
      }
}

async function updateProduct(id,newProduct){
    const updatedProduct=await Product.findByIdAndUpdate(id,newProduct);
    try {
        const savedData=await updatedProduct.save();
        return savedData;
      } catch (error) {
        return false;
      }
}
async function deleteProduct(id){
    const product=await Product.findByIdAndDelete(id);
    return true;
}
module.exports={ getAllProducts,getProductById,createProduct,updateProduct,deleteProduct };

