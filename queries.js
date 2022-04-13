const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    //  Should find all businesses
    //  return the result of your query
    const getAllBusinesses = await Business.findAll()
    return getAllBusinesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    //  return the result of your query
    const getAddress = await Business.findAll({include: Address})
    return getAddress
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    //  return the result of your query
    const getAllEmployees = Business.findAll({include: Employee})
    return getAllEmployees
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
    const getAddressOfEmployee = await Business.findAll({include: [Address,  Employee]})
    return getAddressOfEmployee
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
