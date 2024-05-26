const Sequelize = require('sequelize');
const dbConfig={
    user:'trainingdb_user',
    password:'upcode',
    host:'localhost',
    port:5432,
    database:'ecommerce_db'
}

const sequelize = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password, {
    host: 'localhost',
    dialect:'postgres'
  });
  
  module.exports=sequelize;