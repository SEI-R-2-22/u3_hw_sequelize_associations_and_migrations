const { Business, Address, Employee } = require('./models')
const employee = require('./models/employee')

const getAllBusinesses = async () => {
  try {
    const business = await Business.findAll()
    //  Should find all businesses
    //  return the result of your query
    return business
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const address = await Business.findAll({ include: Address })
    return address
    // Should find all businesses and their associated address
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const employee = await Business.findAll({ include: [Employee] })
    return employee
    // Should find all businesses with and associated employees
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const business = await Business.findAll({
      include: [Address, Employee]
    })
    return business
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
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
