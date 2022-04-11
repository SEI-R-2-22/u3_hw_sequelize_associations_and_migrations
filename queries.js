const { Business, Address, Employee } = require('./models')

// const stringify = (data) => {
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
    const businessesWithAddresses = await Business.findAll({ include: Address })
    return businessesWithAddresses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const businessesAndEmployees = await Business.findAll({ include: Employee })
    return businessesAndEmployees
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
