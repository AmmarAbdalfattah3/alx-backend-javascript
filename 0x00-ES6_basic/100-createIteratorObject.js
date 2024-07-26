export default function createIteratorObject(report) {
  function* employeeGenerator() {
    for (const department of Object.values(report)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }
  return employeeGenerator();
}
