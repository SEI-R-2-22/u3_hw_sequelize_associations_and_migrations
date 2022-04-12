const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    let businesses = await Business.findAll()
    return businesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    let businesses = await Business.findAll({
      include: {
        model: Address
      }
    })
    return businesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    let businesses = await Business.findAll({
      include: {
        model: Employee
      }
    })
    return businesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    let businesses = await Business.findAll({
      include: {
        model: Address,
        model: Employee
      }
    })
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
