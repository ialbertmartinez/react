// console.log("Hello World"); 
class Student {
	constructor(name, email, community) {
		this.name = name;
		this.email = email;
		this.community = community;
	}
}

const student1 = new Student("Nate", "San Francisco", "nate@email.com");
const student2 = new Student("Saif", "Spokane", "saif@email.com");


class Bootcamp {
	constructor(name, level, students = []) {
		this.name = name;		
		this.level = level;	
		this.students = students;		
	}

	registerStudent(newStudent) {
		// testArray holds names of students whose email matches newStudent's email
		const testArray = this.students.filter(student => student.email === newStudent.email);
		// any matches would be placedd in testArray from filter() above
		if(testArray.length) {
			// if true, log newStudent already registered
			console.log("sorry");			
		} else { // if false, means no email matches --ok to register student
			this.students.push(newStudent);
			console.log(`Congratulation, ${newStudent.name} is now successfully registered to ${this.name}.`);
		}
	}
}

const bootcamp = new Bootcamp("NuCamp", 11);
bootcamp.registerStudent(student1);
