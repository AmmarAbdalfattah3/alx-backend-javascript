export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((sum, studentsId) => sum + studentsId.id, 0);
}
