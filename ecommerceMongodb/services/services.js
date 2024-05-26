const moment =require('moment');
const  Product =require('../models/products');
const mongoose=require('mongoose');
function getOfferPrice(actualPrice,offerPercentage){
    const offerPrice=actualPrice*(100-offerPercentage)/100;
    return offerPrice;
}
function findTotalAmount(unitPrice,quantity){
    const totalAmount=unitPrice*quantity;
    return totalAmount;
}
async function findUnitPrice(productId){
    const product=await Product.findById(productId);
    return product.offer_price;

}

module.exports={ getOfferPrice,findTotalAmount,findUnitPrice };