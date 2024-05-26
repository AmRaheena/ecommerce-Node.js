const { CustomerOrder } = require('../models/customerOrders');
async function getAllCustomerOrders() {
  const customerOrders = await CustomerOrder.findAll();
  return customerOrders;
}
async function getCustomerOrderById(id) {
  const customerOrder = await CustomerOrder.findByPk(id);
  return customerOrder;
}

async function createCustomerOrder(customerOrder) {
  const newCustomerOrder = await CustomerOrder.create(customerOrder);
  return newCustomerOrder;
}

async function updateCustomerOrder(id, newCustomerOrder) {
  const oldCustomerOrder = await CustomerOrder.findByPk(id);
  const updatedCustomerOrder = await oldCustomerOrder.update(newCustomerOrder);
  return updateCustomerOrder;
}
async function deleteCustomerOrder(id) {
  const customerOrder = await CustomerOrder.findByPk(id);
  customerOrder.destroy();
  return true;
}
module.exports = {
  createCustomerOrder,
  getAllCustomerOrders,
  getCustomerOrderById,
  updateCustomerOrder,
  deleteCustomerOrder
};
