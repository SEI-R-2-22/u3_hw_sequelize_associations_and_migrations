const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const allBusinesses = await Business.findAll();
    return allBusinesses;
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const allBusinesses = await Business.findAll( { include: Address});
    return allBusinesses;
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const allBusinesses = await Business.findAll( { include: Employee});
    return allBusinesses;
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const allBusinesses = await Business.findAll( { include: [Address, Employee]});
    return allBusinesses;
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllBusinesses,
  getBusinessAddress,
  getBusinessEmployees,
  getBusinessAddressAndEmployee
}
