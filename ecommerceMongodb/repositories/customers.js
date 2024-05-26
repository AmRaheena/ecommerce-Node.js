const Customer=require('../models/customers');
const mongoose=require('mongoose');
async function getAllCustomers(){
    const customers=await Customer.find();
    return customers;
}
async function getCustomerById(id){
    const customer=await Customer.findById(id);
    return customer;   
}
async function createCustomer(customer){
    const newCustomer=new Customer(customer);
    try {
        const savedData=await newCustomer.save();
        return savedData;
    } catch (error) {
        return false;
    }
    
}
async function updateCustomer(id,customer){
    const updatedCustomer=await Customer.findByIdAndUpdate(id,customer);
    try {
        const savedData=await updatedCustomer.save();
        return savedData;
    } catch (error) {
        return false;
    }
}
async function deleteCustomer(id){
    const customer=await Customer.findByIdAndDelete(id);
    return true;
}
module.exports={
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};