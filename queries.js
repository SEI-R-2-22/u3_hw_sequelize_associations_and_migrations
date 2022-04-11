const { Business, Address, Employee } = require('./models')

function stringify(data) {
  console.log(JSON.stringify(data, null, 4))
}

const getAllBusinesses = async () => {
  try {
    //  Should find all businesses
    //  return the result of your query
    const res = await Business.findAll()
    return res
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    //  return the result of your query
    const res = await Business.findAll({
      include: { model: Address }
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    //  return the result of your query
    const res = await Business.findAll({
      include: { model: Employee }
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
    const res = await Business.findAll({
      include: [{ model: Address }, { model: Employee }]
    })
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
