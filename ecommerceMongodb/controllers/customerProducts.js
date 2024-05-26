const customerProductRepositories=require('../repositories/customerProducts');
async function getAllCustomerProducts(req,res){
    const customerProducts=await customerProductRepositories.getAllCustomerProducts();
    res.status(200).json(customerProducts);
   }
   async function getCustomerProductById(req,res){
       const id=req.params.id;
       const customerProduct=await customerProductRepositories.getCustomerProductById(id);
       res.status(200).json({message:"success",customerProduct:customerProduct});
   }
   async function createCustomerProduct(req,res){
       customerProduct={
           customerId:req.body.customerId,
           productId:req.body.productId
       }
       const newCustomerProduct=await customerProductRepositories.createCustomerProduct(customerProduct);
       res.status(201).json({message:"customerProduct created successfully",customerProduct:newCustomerProduct});
   }
   async function updateCustomerProduct(req,res){
   
       const id=req.params.id;
       customerProduct={
            customerId:req.body.customerId,
           productId:req.body.productId
    }
       const newCustomerProduct=await customerProductRepositories.updateCustomerProduct(id,customerProduct);
       res.status(200).json({message:"customerProduct updated successfully",customerProduct:newCustomerProduct});
   }
   async function deleteCustomerProduct(req,res){
       const id=req.params.id;
       const customerProduct=await customerProductRepositories.deleteCustomerProduct(id);
       res.status(200).json({message:"customerProduct deleted successfully"});
   }
   module.exports={
    getAllCustomerProducts,
    getCustomerProductById,
    createCustomerProduct,
    updateCustomerProduct,
    deleteCustomerProduct
};