export default function createIteratorObject(report) {
  // Generator function to yield each employee from each department
  function* employeeGenerator() {
    for (const department of Object.keys(report.allEmployees)) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }
  return employeeGenerator();
}
