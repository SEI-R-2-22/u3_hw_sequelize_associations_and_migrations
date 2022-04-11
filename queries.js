const { Business, Address, Employee } = require('./models')
// const stringify = function (data) {
//   console.log(JSON.stringify(data, null, 4))
// }

const getAllBusinesses = async () => {
  try {
    const businesses = await Business.findAll()
    return businesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    //  return the result of your query
    const businesses = await Business.findAll({ include: [Address] })
    return businesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    //  return the result of your query
    const businesses = await Business.findAll({ include: [Employee] })
    return businesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and employees
    // The address should come before the employee
    //  return the result of your query
    const businesses = await Business.findAll({
      include: [Address, Employee]
    })
    return businesses
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
