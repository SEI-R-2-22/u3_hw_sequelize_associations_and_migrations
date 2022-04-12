const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const getBusiness = await Business.findAll()
    return getBusiness
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
     const result = await Business.findAll({ include: [Address] })
     return result
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const getEmployees = await Business.findAll({ include: [Employee] })
    return getEmployees
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
   const getAll = await Business.findAll({include: [Address, Employee]})
   return getAll
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
