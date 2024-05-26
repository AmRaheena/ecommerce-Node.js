const customerRepositories=require('../repositories/customers');
async function getAllCustomers(req,res){
    const customers=await customerRepositories.getAllCustomers();
    res.status(200).json(customers);
   }
   async function getCustomerById(req,res){
       const id=req.params.id;
       const customer=await customerRepositories.getCustomerById(id);
       res.status(200).json({message:"success",customer:customer})
   }
   async function createCustomer(req,res){
       customer={
           name:req.body.name,
           email:req.body.email,
           address:req.body.address,
           phone:req.body.phone
       }
       const newCustomer=await customerRepositories.createCustomer(customer);
       res.status(201).json({message:"customer created successfully",customer:newCustomer});
   }
   async function updateCustomer(req,res){
   
       const id=req.params.id;
       customer={
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        phone:req.body.phone
    }
       const newCustomer=await customerRepositories.updateCustomer(id,customer);
       res.status(200).json({message:"customer updated successfully"});
   }
   async function deleteCustomer(req,res){
       const id=req.params.id;
       const customer=await customerRepositories.deleteCustomer(id);
       res.status(200).json({message:"customer deleted successfully"});
   }
   module.exports={
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};