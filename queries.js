const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    //  Should find all businesses
    //  return the result of your query
    const getBusinesses = await Business.findAll()
    return getBusinesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    //  return the result of your query
    const getAllAddresses = await Business.findAll({include: Address})
    return getAllAddresses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    //  return the result of your query
    const getEmployees = await Business.findAll({include: Employee})
    return getEmployees
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
    const getAddressEmployee = await Business.findAll({include: [Address, Employee]})
    return getAddressEmployee
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
