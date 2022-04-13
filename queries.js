const { Business, Address, Employee } = require('./models')

function stringify(data) {
  console.log(JSON.stringify(data, null, 4))
}

const getAllBusinesses = async () => {
  try {
    const businesses = await Business.findAll()
    stringify(businesses)
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const addresses = await Address.findAll({
      include: [Business],
      as: 'business'
    })
    stringify(addresses)
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const employees = await Employee.findAll({
      include: [Business],
      as: 'business'
    })
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const result = await Business.findOne({
      where: {}
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllBusinesses,
  getBusinessAddress,
  getBusinessEmployees,
  getBusinessAddressAndEmployee,
  stringify
}
