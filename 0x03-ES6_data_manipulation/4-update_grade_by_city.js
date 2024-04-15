function updateStudentGradeByCity(studentsArray, city, newGrades) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }

  return studentsArray
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}

export default updateStudentGradeByCity;
