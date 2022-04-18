const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const getAllBusiness = await Business.findAll()
    return getAllBusiness
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const getBusiness = await Business.findAll({ include: [Address] })
    return getBusiness
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const getBusinessAndEmployees = await Business.findAll({ include: [Employee] })
    return getBusinessAndEmployees
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
    const everything = await Business.findAll({ include: [Address, Employee] })
    return everything
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
