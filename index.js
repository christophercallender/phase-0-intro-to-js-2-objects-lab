// describe('employees', function() {
//     describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
//       beforeEach(function () {
//         for (const key in employee) {
//           delete employee[key];
//         }

//         employee.name = 'Sam';
//       });

const employee = {

}

//       it('returns an employee with the original key value pairs and the new key value pair', function () {
//         expect(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')).to.eql({
//           name: 'Sam',
//           streetAddress: '11 Broadway'
//         });
//       });

function updateEmployeeWithKeyAndValue(object, key, value){
    const newObject = { ...object };
    newObject[key] = value;					//use value given to key, use value given to value
    return newObject;
}
    updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

//       it('it does not modify the original employee, but rather returns a clone with the new data', function () {
//         updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
  
//         expect(employee['streetAddress']).to.equal(undefined);
//       });
//     });
  
//     describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
//       it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
//         expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')).to.eql({
//           name: 'Sam',
//           streetAddress: '12 Broadway'
//         });
  
//         expect(employee).to.eql({
//           name: 'Sam',
//           streetAddress: '12 Broadway'
//         });
//       });
//     });

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
  }
    destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam');
    destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

//     describe('deleteFromEmployeeByKey(employee, key)', function () {
//       it('deletes `key` from a clone of employee and returns the new employee (it is non-destructive)', function () {
//         let newEmployee = deleteFromEmployeeByKey(employee, 'name');
  
//         expect(newEmployee['name']).to.equal(undefined);
//         expect(typeof newEmployee).to.equal('object');
//       });
  
//       it('does not modify the original employee (it is non-destructive)', function () {
//         deleteFromEmployeeByKey(employee, 'name');
  
//         expect(employee['name']).to.equal('Sam');
//       });
//     });

function deleteFromEmployeeByKey(object, key){
    const newEmployee = { ...object };
    delete newEmployee[key];
    return newEmployee;
}
    deleteFromEmployeeByKey(employee, streetAddress)

//     describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
//       it('returns employee without the deleted key/value pair', function () {
//         let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  
//         expect(newEmployee['name']).to.equal(undefined);
//       });
  
//       it('modifies the original employee', function () {
//         let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  
//         expect(employee['name']).to.equal(undefined);
//         expect(employee).to.equal(newEmployee);
//       });
//     });

function destructivelyDeleteFromEmployeeByKey(object, key){
    const newEmployee = employee;
    delete newEmployee[key];
    return newEmployee;
}
    deleteFromEmployeeByKey(employee, name)

//   });