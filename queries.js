const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const bus = await Business.findAll()
      return bus
    //  Should find all businesses
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const busAdd = await Business.findAll({
      include: [Address]
    })
    return busAdd
    // Should find all businesses and their associated address
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const busEmpl = await Business.findAll({
      include: [Employee]
    })
    return busEmpl
    // Should find all businesses with and associated employees
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const busAddEmpl = await Business.findAll({
      include: [Employee, Address]
    })
    return busAddEmpl
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
