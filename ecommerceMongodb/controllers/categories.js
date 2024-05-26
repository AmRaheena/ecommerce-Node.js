const categoryRepositories=require('../repositories/categories');

async function getAllCategories(req,res){
    const categories=await categoryRepositories.getAllCategories();
    res.status(200).json(categories);
   }
   async function getCategoryById(req,res){
       const id=req.params.id;
       const category=await categoryRepositories.getCategoryById(id);
       res.status(200).json({message:"success",category:category})
   }
   async function createCategory(req,res){
       category={
           name:req.body.name,
           brandId:req.body.brandId
       }
       const newCategory=await categoryRepositories.createCategory(category);
       res.status(201).json({message:"category created successfully",category:newCategory});
   }
   async function updateCategory(req,res){
   
       const id=req.params.id;
       category={
           name:req.body.name,
           brandId:req.params.brandId
       }
       const newCategory=await categoryRepositories.updateCategory(id,category);
       res.status(200).json({message:"category updated successfully"});
   }
   async function deleteCategory(req,res){
       const id=req.params.id;
       const category=await categoryRepositories.deleteCategory(id);
       res.status(200).json({message:"category deleted successfully"});
   }
   module.exports={
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};