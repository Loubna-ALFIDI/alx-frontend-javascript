function getStudentIdsSum(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }

  return studentsArray.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
