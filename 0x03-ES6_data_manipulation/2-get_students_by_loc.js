function getStudentsByLocation(studentsArray, city) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }

  return studentsArray.filter((student) => student.location === city);
}

export default getStudentsByLocation;
