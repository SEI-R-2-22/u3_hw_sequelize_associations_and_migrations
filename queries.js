const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const allBusinesses = await Business.findAll()
    return allBusinesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    let businessAddress = await Business.findAll({
      include: [Address]
    })
    return businessAddress
    // Should find all businesses and their associated address
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    let businessEmployees = await Business.findAll({
      include: [Employee]
    })
    return businessEmployees
    // Should find all businesses with and associated employees
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    let businessAddEmpl = await Business.findAll({
      include: [Address, Employee]
    })
    return businessAddEmpl
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
