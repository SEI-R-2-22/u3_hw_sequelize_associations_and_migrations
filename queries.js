const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const res = Business.findAll()
    return res
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const res = Business.findAll({ include: Address })
    return res
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const res = Business.findAll({ include: [Employee] })
    console.log(res)
    return res
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const res = Business.findAll({ include: [Address, Employee] })
    return res
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
