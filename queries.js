const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    //  Should find all businesses
    const res = await Business.findAll()
    //  return the result of your query
    return res
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    const res = await Business.findAll({
      include: { model: Address}
    })
    //  return the result of your query
    return res
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    const res = await Business.findAll({
      include: { model: Employee }
    })
    //  return the result of your query
    return res
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    const res = await Business.findAll({
      include: { model: Address, Employee }
    })
    // The address should come before the employee
    //  return the result of your query
    return res
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
