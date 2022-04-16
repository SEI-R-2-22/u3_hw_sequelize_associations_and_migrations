const { Business, Address, Employee } = require('./models')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const getAllBusinesses = async () => {
  try {
    //  Should find all businesses
    //  return the result of your query
    const businesses = await Business.findAll()
    return (
      stringify(businesses)
    )
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    //  return the result of your query
    const businessAddress = await Business.findAll({ include: [Address] })
    return (
      stringify(businessAddress)
    )
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    //  return the result of your query
    const businessEmployees = await Business.findAll({ include: [Employee] })
    return (
      stringify(businessEmployees)
    )
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
    const businessAddressAndEmployee = await Business.findAll({ include: [Address, Employee] })
    return (
      stringify(businessAddressAndEmployee)
    )
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
