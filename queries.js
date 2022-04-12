const { Business, Address, Employee } = require("./models");

const getAllBusinesses = async () => {
  try {
    const businesses = await Business.findAll();
    return businesses;
  } catch (error) {
    console.log(error);
  }
};

const getBusinessAddress = async () => {
  try {
    const business = await Business.findAll({
      include: { model: Address },
    });
    return business;
  } catch (error) {
    console.log(error);
  }
};

const getBusinessEmployees = async () => {
  try {
    const findBE = await Business.findAll({ include: { model: Employee } });
    return findBE;
  } catch (error) {
    console.log(error);
  }
};

const getBusinessAddressAndEmployee = async () => {
  try {
    const findAll =await Business.findAll({
      include: [{ model : Address },{ model : Employee }],
    });
      return findAll
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllBusinesses,
  getBusinessAddress,
  getBusinessEmployees,
  getBusinessAddressAndEmployee,
};
