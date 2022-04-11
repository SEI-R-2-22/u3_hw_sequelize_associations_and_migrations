const { Business, Address, Employee } = require('./models')

// const stringify = function (data) {
//   console.log(JSON.stringify(data, null, 4))
// }

const getAllBusinesses = async () => {
  try {
    const res = await Business.findAll()
    return res
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const busAd = await Business.findAll({ include: Address })
    return busAd
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const busEm = await Business.findAll({ include: Employee })
    return busEm
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const busEmAd = await Business.findAll({ include: [Address, Employee] })
    return busEmAd
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
