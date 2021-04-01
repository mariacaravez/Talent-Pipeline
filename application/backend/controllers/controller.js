//
// the controller for Milestones Application
//

// student model hook
const stModel = require("../models/student.js");

//
// student control
//

// student object
const student = (student) => {
	 this.firstName = req.query.firstName;
	 this.middleName = req.query.middleName;
	 this.lastName = req.query.lastName;
	 this.major = req.query.major;
	 this.academicStanding = req.query.academicStanding;
	 this.graduationDate = req.query.graduationDate;
	 this.gender = req.query.gender;
	 this.age = req.query.age;
	 this.race = req.query.race;
	 this.veteran = req.query.veteran;
	 this.militaryCode = req.query.militaryCode;
	 this.ethnicity = req.query.ethnicity;
	 this.skills = req.query.skills;
};

// retrieve all students for a criteria
exports.findStudents = (req, res) => {
  try {
    results = stModel.find(student, req.query.textValue, req.query.optionsValue);
    console.log(results);
    res.send(results);
  } catch(err) {
    res.status(500).send({
     message:
        err.message || "Some error occurred while retrieving students."
  });
}
  // stModel.find((err, student) => {
  //   if (err)
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving students."
  //     });
  //   else res.send(student);
  // });
};


