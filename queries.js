const { Business, Address, Employee } = require('./models')

function stringify(data) {
  console.log(JSON.stringify(data, null, 4))
}

const getAllBusinesses = async () => {
  try {
    const businesses = await Business.findAll()
    stringify(businesses)
    //  Should find all businesses
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const addresses = await Business.findAll({
      include: [Address]
    })
    stringify(addresses)
    // Should find all businesses and their associated address
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const employees = await Business.findAll({
      include: [Employee]
    })
    stringify(employees)
    // Should find all businesses with and associated employees
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const both = await Business.findAll({
      include: [Address, Employee]
    })
    stringify(both)
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllBusinesses,
  stringify,
  getBusinessAddress,
  getBusinessEmployees,
  getBusinessAddressAndEmployee
}
