const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    //  Should find all businesses
    //  return the result of your query
    const business = await Business.findAll()
    return business
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    //  return the result of your query
    const business = await Business.findAll({
      include: { model: Address }
    })
    return business
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    //  return the result of your query
    const business = await Business.findAll({
      include: { model: Employee }
    })
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
    const business = await Business.findAll({
      include: { model: [Employee, Address] }
    })
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
