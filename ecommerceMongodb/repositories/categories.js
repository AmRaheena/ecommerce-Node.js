const Category =require('../models/categories');
async function getAllCategories(){
    const categories=await Category.find();
    return categories;
}
async function getCategoryById(id){
    const category=await Category.findById(id);
    return category;   
}
async function createCategory(category){
    const newCategory=new Category(category);
    try {
        const savedData=newCategory.save();
        return savedData;
    } catch (error) {
        return false;
    }
}
async function updateCategory(id,category){
    const newCategory=await Category.findByIdAndUpdate(id,category);
    try {
        const savedData=await newCategory.save();
        return savedData;
    } catch (error) {
        return false;
    }
}
async function deleteCategory(id){
    const category=await Category.findByIdAndDelete(id);
    return true;
}
module.exports={
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};