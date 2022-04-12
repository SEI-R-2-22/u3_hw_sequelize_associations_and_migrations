const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    const busi = await Business.findAll()
    //  Should find all businesses
    //  return the result of your query
    return (busi)
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    const busi = await Business.findAll({
      include: { model : Address }
    })
    return (busi)

    // Should find all businesses and their associated address
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    const busi = await Business.findAll({
      include: { model : Employee }
    })
    return (busi)

    // Should find all businesses with and associated employees
    //  return the result of your query
  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    const busi = await Business.findAll({
      include: [{ model : Address },{ model : Employee }]
    })
    return (busi)

    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query 
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
