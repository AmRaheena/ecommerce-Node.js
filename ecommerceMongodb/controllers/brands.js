const brandRepositories=require('../repositories/brands');

async function getAllBrands(req,res){
 const brands=await brandRepositories.getAllBrands();
 res.status(200).json(brands);
}
async function getBrandById(req,res){
    const id=req.params.id;
    const brand=await brandRepositories.getBrandById(id);
    res.status(200).json({message:"success",brand:brand})
}
async function createBrand(req,res){
    brand={
        name:req.body.name
    }
    const newBrand=await brandRepositories.createBrand(brand);
    res.status(201).json({message:"brand created successfully",brand:newBrand});
}
async function updateBrand(req,res){

    const id=req.params.id;
    brand={
        name:req.body.name
    }
    const newBrand=await brandRepositories.updateBrand(id,brand);
    res.status(201).json({message:"brand updated successfully"});
}
async function deleteBrand(req,res){
    const id=req.params.id;
    const brand=await brandRepositories.deleteBrand(id);
    res.status(200).json({message:"brand deleted successfully"});
}


module.exports={createBrand,getAllBrands,getBrandById,updateBrand,deleteBrand};