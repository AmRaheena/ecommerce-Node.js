const productsRepositories=require('../repositories/products');
const {getOfferPrice }=require('../services/services');
async function getAllProducts(req,res){
    const products=await productsRepositories.getAllProducts();
    res.status(200).json(products);
   }
async function getProductById(req,res){
       const id=req.params.id;
       const product=await productsRepositories.getProductById(id);
       res.status(200).json({message:"success",product:product});
   }
async function createProduct(req,res){
    
       product={
           title:req.body.title,
           actual_price:req.body.actual_price,
           offer_percentage:req.body.offer_percentage,
           category:req.body.category,
           brand:req.body.brand
       }
       product.offer_price=getOfferPrice(product.actual_price,product.offer_percentage);
       const newProduct=await productsRepositories.createProduct(product);
       res.status(201).json({message:"product created successfully",product:newProduct});
   }
async function updateProduct(req,res){
   
       const id=req.params.id;
       product={
            title:req.body.title,
           actual_price:req.body.actual_price,
           offer_percentage:req.body.offer_percentage,
           category:req.body.category,
           brand:req.body.brand
       }
       product.offer_price=getOfferPrice(product.actual_price,product.offer_percentage);
       const newProduct=await productsRepositories.updateProduct(id,product);
       
       res.status(200).json({message:"product updated successfully"});
   }
async function deleteProduct(req,res){
       const id=req.params.id;
       const product=await productsRepositories.deleteProduct(id);
       res.status(200).json({message:"product deleted successfully"});
   }

module.exports={ getAllProducts,getProductById,createProduct,updateProduct,deleteProduct };