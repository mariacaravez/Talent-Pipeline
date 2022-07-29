//
// this module contain the student models for Milestone Application
//

// get the db access
const db = require('./dbaccess.js');

// student object
const student = (student) => {
     this.firstName = student.firstName;
	 this.middleName = student.middleName;
	 this.lastName = student.lastName;
	 this.major = student.major;
	 this.academinStanding = student.academicStanding;
	 this.graduationDate = student.graduationDate;
	 this.gender = student.gender;
	 this.age = student.age;
	 this.race = student.race;
	 this.veteran = student.veteran;
	 this.militaryCode = student.militaryCode;
	 this.ethnicity = student.ethnicity;
	 this.skills = student.skills;
};

// retrieve all students who match - textvalue and have attribute optiotsvalue
student.findAll = result => {
  db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND us.lastName LIKE ? AND ua.major = ? OR ua.academicStanding = ? ",[textvalue, major, acastanding], (err, res) => {
    if (err) {
      console.log("error: ", err);
      //result(null, err);
      return;
    }
    //console.log("student: ", res);
    result(null, res);
  });
};
