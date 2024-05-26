const customerOrderRepositories=require('../repositories/customerOrders');

async function getAllCustomerOrders(req,res){
 const customerOrders=await customerOrderRepositories.getAllCustomerOrders();
 res.status(200).json(customerOrders);
}
async function getCustomerOrderById(req,res){
    const id=req.params.id;
    const customerOrder=await customerOrderRepositories.getCustomerOrderById(id);
    res.status(200).json({message:"success",customerOrder:customerOrder});
}
async function createCustomerOrder(req,res){
    customerOrder={
        customer_id:req.body.customer_id,
        order_id:req.body.order_id
    };
    const newCustomerOrder=await customerOrderRepositories.createCustomerOrder(customerOrder);
    res.status(201).json({message:"Customer-Order created successfully",customerOrder:customerOrder});
}
async function updateCustomerOrder(req,res){

    const id=req.params.id;
    customerOrder={
        customer_id:req.body.customer_id,
        order_id:req.body.order_id
    }
    const newCustomerOrder=await customerOrderRepositories.updateCustomerOrder(id,customerOrder);
    res.status(200).json({message:"CustomerOrder updated successfully",customerOrder:newCustomerOrder});
}
async function deleteCustomerOrder(req,res){
    const id=req.params.id;
    const customerOrder=await customerOrderRepositories.deleteCustomerOrder(id);
    res.status(200).json({message:"CustomerOrder deleted successfully"});
}


module.exports={ createCustomerOrder,getAllCustomerOrders,getCustomerOrderById,updateCustomerOrder,deleteCustomerOrder };