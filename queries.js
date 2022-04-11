const { Business, Address, Employee } = require('./models')

function stringify(data) {
  console.log(JSON.stringify(data, null, 4))
}

const getAllBusinesses = async () => {
  try {
    const getBusinesses = await Business.findAll()
    return getBusinesses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const getAddresses = await Business.findAll({
      include: {
        model: Address
      }
    })
    return getAddresses
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const getEmployees = await Business.findAll({
      include: {
        model: Employee
      }
    })
    return getEmployees
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const getAddressEmployees = await Business.findAll({
      include: [
        { model: Address },
        { model: Employee }
      ]
    })
    stringify(getAddressEmployees)
    return getAddressEmployees
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
