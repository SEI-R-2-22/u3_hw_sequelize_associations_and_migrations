const { Business, Address, Employee } = require('./models')

const getAllBusinesses = async () => {
  try {
    //  Should find all businesses
    //  return the result of your query
    
    const allBus = await Business.findAll();
    return allBus;

  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddress = async () => {
  try {
    // Should find all businesses and their associated address
    //  return the result of your query

    busWithAddress = await Business.findAll( 
      {include: Address}                    //Or - { include: {model: Employee} }
    )
    return busWithAddress

  } catch (error) {
    console.log(error)
  }
}

const getBusinessEmployees = async () => {
  try {
    // Should find all businesses with and associated employees
    //  return the result of your query

    busWithPpl = await Business.findAll( 
      {include: Employee}                   //Or - { include: {model: Employee} }
      ) 
    return busWithPpl

  } catch (error) {
    console.log(error)
  }
}

const getBusinessAddressAndEmployee = async () => {
  try {
    //  Find all businesses and include the address and empoyees
    // The address should come before the employee
    //  return the result of your query
    busWithAddPpl = await Business.findAll(
      { include: [                          // Or - {include: [Address, Employee]}
        {model: Address}, 
        {model: Employee}
      ] }  
    )
    return busWithAddPpl

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
