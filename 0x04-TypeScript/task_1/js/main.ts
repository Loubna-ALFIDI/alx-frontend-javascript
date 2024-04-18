interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  const teacher1: Teacher = {
    firstName: 'Gojo',
    fullTimeEmployee: false,
    lastName: 'Satoru',
    location: 'Tokyo',
    contract: false,
    alive: false
  };
  
  // Task 2: Extending the Teacher Interface
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: 'Yami',
    lastName: 'Sukehiro',
    location: 'Clover Kingdom',
    fullTimeEmployee: true,
    numberOfReports: 100,
  };
  
  // Task 3: Printing Teachers
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  
  // Task 4: Writing a Class
  interface StudentConstructor { // describing The constructor of the class through an Interface
      new(firstName: string, lastName: string): StudentClassInterface;
  }
  
  interface StudentClassInterface { // describing the class through an Interface
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework() {
      return 'Currently working';
    }
    
    displayName() {
      return this.firstName;
    }
  }
  
  console.log(printTeacher("Gojo", "Satoru")); // Outputs: G. Satoru
  
  console.log(teacher1);
  console.log(director1);
  
  
  // testing task 4 
  
  // Creating an instance of StudentClass
  const student1 = new StudentClass("Itadory", "yuji");
  
  // Testing the methods of StudentClass
  console.log(student1.displayName()); // Outputs: Itadory
  console.log(student1.workOnHomework()); // Outputs: Currently working
  