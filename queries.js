const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    //  Should find all businesses
    //  return the result of your query
    const allTheBusiness = await Business.findAll()
    return allTheBusiness
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    //  return the result of your query
    const insideTheBusinessesAddress = await Business.findAll({include: Address})
    return insideTheBusinessesAddress
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    //  return the result of your query
    const whereTheEmployeesWork = await Business.findAll({include: Employee})
    return whereTheEmployeesWork
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
    const letsGetItAll = await Business.findAll({include: [Address, Employee]})
    return letsGetItAll
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
