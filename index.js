// Write your solution in this file!


//const employee = {
    //name: "Angeline"
    //streetaddress: "12 Ngong"
//}


//unction updateEmployeeWithKeyAndValue(employee, key, value) {
    //const newEmployee = {...employee};
    //newEmployee[key]= value;
   // return newEmployee;
  //}
  const employee = {};
  employee.name = "Angeline";
  employee.streetAddress = "01 Ngong";


  employee;

  //it does not modify the original employee,
  //but rather returns a clone with the new data
  //copy the contents from the employee data
  // modifying objects

  function updateEmployeeWithKeyAndValue(employee, key, value){
      const newEmployee = {...employee};
      newEmployee[key] = value

      return newEmployee
  }

  const nonDestructiveUpdatedEmployee = updateEmployeeWithKeyAndValue(
      employee,
      "name",
      "sam"
      )

      //adding object using dot notation

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
      employee[key] = value;

      return employee;
  }

  const destructiveEmployeeUpdates = destructivelyUpdateEmployeeWithKeyAndValue(
      employee,
      "name",
      "sam"
     )
     console.log(destructiveEmployeeUpdates)

  function deleteFromEmployeeByKey(employee,key){
      const employeeCopy = {...employee}
      delete employeeCopy["name"]


      return employeeCopy;
  }

  function destructivelyDeleteFromEmployeeByKey(employee,key){
      const newEmployee = delete employee["name"]

      return employee;
  }