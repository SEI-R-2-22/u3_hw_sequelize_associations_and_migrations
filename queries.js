const { Business, Address, Employee } = require('./models')

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
    const businessAddress = await Business.findAll({ include: Address })
    return businessAddress
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const businessEmployees = await Business.findAll({ include: Employee })
    return businessEmployees
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const businesses = await Business.findAll({ include: [Address, Employee] })
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
