const { Business, Address, Employee } = require('./models')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const getAllBusinesses = async () => {
  try {
    //  Should find all businesses
    //  return the result of your query
    const result = await Business.findAll()
    stringify(result)
    return result
  } catch (error) {
    console.log(error)
  }
  return result
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    //  return the result of your query
    const result = await Business.findAll({include: Address})
    stringify(result)
    return result
  } catch (error) {
    console.log(error)
  }
  return result
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    //  return the result of your query
    const result = await Business.findAll({include: Employee})
    stringify(result)
    return result
  } catch (error) {
    console.log(error)
  }
  return result
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and employees
    // The address should come before the employee
    //  return the result of your query
    const result = await Business.findAll({ include: [Address, Employee] })
    stringify(result)
    return result
  } catch (error) {
    console.log(error)
  }
  return result
}

module.exports = {
  getAllBusinesses,
  getBusinessAddress,
  getBusinessEmployees,
  getBusinessAddressAndEmployee
}
