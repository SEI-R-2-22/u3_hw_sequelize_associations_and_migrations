const { Business, Address, Employee } = require("./models");

const getAllBusinesses = async () => {
  try {
    const business = await Business.findAll();
    //  Should find all businesses
    //  return the result of your query
    return business;
  } catch (error) {
    console.log(error);
  }
};

const getBusinessAddress = async () => {
  try {
    const businessaddresses = await Business.findAll({ include: Address });
    // Should find all businesses and their associated addres
    return businessaddresses;
    //  return the result of your query
  } catch (error) {
    console.log(error);
  }
};

const getBusinessEmployees = async () => {
  try {
    const businessEmployees = await Business.findAll({ include: Employee });
    // Should find all businesses with and associated employees
    //  return the result of your query
    return businessEmployees;
  } catch (error) {
    console.log(error);
  }
};

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
    const both = await Business.findAll({ include: [Address, Employee] });
    return both;
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
