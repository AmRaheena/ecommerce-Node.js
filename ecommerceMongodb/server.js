const express=require('express');
const dotenv=require('dotenv').config();
const PORT=process.env.PORT;
const DB_CONNECTION_STRING=process.env.DATABASE_URL;
const mongoose=require('mongoose');
const brandRoutes=require('./routes/brands');
const categoryRoutes=require('./routes/categories');
const productRoutes=require('./routes/products');
const customerRoutes=require('./routes/customers');
const orderRoutes=require('./routes/orders');
const customerOrderRoutes=require('./routes/customerOrders');
const customerProductRoutes=require('./routes/customerProducts');
const app=express();

mongoose.connect(DB_CONNECTION_STRING);
const database=mongoose.connection;
database.on('error',(error)=>{
  console.log("Db error",error);
});
database.once('connected',()=>{
  console.log("Databse connected successfully");
});
app.use(express.json());
app.use('/api/brands',brandRoutes);
app.use('/api/categories',categoryRoutes);
app.use('/api/products',productRoutes);
app.use('/api/customers',customerRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/customerOrders',customerOrderRoutes);
app.use('/api/customerProducts',customerProductRoutes);
app.listen(PORT,()=>{
  console.log("Server is waiting for requests in port ",PORT);
})
