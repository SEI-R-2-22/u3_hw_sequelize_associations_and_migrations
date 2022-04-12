const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const business = await Business.findAll()
    return business
    //  Should find all businesses
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const busWithAdd = await Business.findAll({include: Address})
    return busWithAdd
    // Should find all businesses and their associated address
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const busWithEmp = await Business.findAll({include: Employee})
    return busWithEmp
    // Should find all businesses with and associated employees
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const all = await Business.findAll(
      {include: Address },
      {include: Employee}
    )
    return all
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
