const { Business, Address, Employee } = require('./models')

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}


const getAllBusinesses = async () => {
  const result = await Business.findAll()
  return result
}

const getBusinessAddress = async () => {
  try { 
    const result = await Business.findAll({ include: [Address] })
    return result
    // Should find all businesses and their associated address
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const result = await Business.findAll({ include: [Employee]})
    return result
    // Should find all businesses with and associated employees
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const result = await Business.findAll({ include: [Address, Employee]})
    return result
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
