const { CustomerProduct }=require('../models/customerProducts');
async function getAllCustomerProducts(){
    const customerProducts=await CustomerProduct.findAll();
    return customerProducts;
}
async function getCustomerProductById(id){
    const customerProduct=await CustomerProduct.findByPk(id);
    return customerProduct;   
}
async function createCustomerProduct(customerProduct){
    const newCustomerProduct=await CustomerProduct.create(customerProduct);
    return newCustomerProduct;
}
async function updateCustomerProduct(id,customerProduct){
    const oldCustomerProduct=await CustomerProduct.findByPk(id);
    const newCustomerProduct=await oldCustomerProduct.update(customerProduct);
    return newCustomerProduct;
}
async function deleteCustomerProduct(id){
    const customerProduct=await CustomerProduct.findByPk(id);
    await customerProduct.destroy();
    return true;
}
module.exports={
    getAllCustomerProducts,
    getCustomerProductById,
    createCustomerProduct,
    updateCustomerProduct,
    deleteCustomerProduct
};