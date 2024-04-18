// Define constants for subjects
export const cpp: string = 'C++ Subjects';
export const java: string = 'Java Subjects';
export const react: string = 'React Subjects';

// Define a Teacher object
export const cTeacher = {
  experienceTeachingC: 10
};

// Define methods for each subject
export function getRequirements(subject: string): string {
  switch (subject) {
    case cpp:
      return 'C++ requirements: Intermediate to advanced knowledge of C++ programming language.';
    case java:
      return 'Java requirements: Familiarity with object-oriented programming concepts.';
    case react:
      return 'React requirements: Understanding of JavaScript and web development basics.';
    default:
      return 'Unknown subject';
  }
}

export function getAvailableTeacher(subject: string, teacher: any): string {
  switch (subject) {
    case cpp:
    case java:
    case react:
      return `Available teacher for ${subject}: Experience teaching C/C++ subjects: ${teacher.experienceTeachingC} years.`;
    default:
      return 'Unknown subject';
  }
}

// Log information for each subject
console.log('C++');
console.log(getRequirements(cpp));
console.log(getAvailableTeacher(cpp, cTeacher));

console.log('\nJava');
console.log(getRequirements(java));
console.log(getAvailableTeacher(java, cTeacher));

console.log('\nReact');
console.log(getRequirements(react));
console.log(getAvailableTeacher(react, cTeacher));