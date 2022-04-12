const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const business = await Business.findAll()
    return business
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const business = await Business.findAll({
      inlude: { mode: Address }
    })
    return business
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const business = await Business.findAll({
      inlude: { mode: Employee }
    })
    return business
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const business = await Business.findAll({
      inlude: { mode: [Employee, Address] }
    })
    return business
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
