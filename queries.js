const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const result = await Business.findAll()
    return result
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const result = await Business.findAll({ include: Address })
    return result
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const result = await Business.findAll({ include: [Employee] })
    return result
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const result = await Business.findAll({ include: [Address, Employee] })
    return result
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
