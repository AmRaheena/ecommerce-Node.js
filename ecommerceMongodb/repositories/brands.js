const mongoose=require('mongoose');
const Brand = require("../models/brands");
async function getAllBrands() {
  const brands = await Brand.find();
  return brands;
}
async function getBrandById(id) {
  const brand = await Brand.findById(id);
  return brand;
}

async function createBrand(brand){
  const newBrand =new Brand(brand);
  try {
    const savedData=await newBrand.save();
    return savedData;
  } catch (error) {
    return false;
  }
 
}

async function updateBrand(id, newBrand) {
  const updatedBrand = await Brand.findByIdAndUpdate(id,newBrand);
  try {
    const savedData=await updatedBrand.save();
    return savedData;
  } catch (error) {
    return false;
  }
}
async function deleteBrand(id) {
  const brand = await Brand.findByIdAndDelete(id);
  return true;
}
module.exports = {
  createBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand
};
