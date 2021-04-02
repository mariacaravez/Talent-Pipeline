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

//asyn was here
exports.findStudents = (req, res) => {
    console.log("I'M IN CONTROLLER");
    stModel.find(student, req.query.textValue, req.query.optionsValue).then((results)=> {
      console.log(results);
      res.send(results);
    }).catch((err) => {
    res.status(500).send({
     message:
        err.message || "Some error occurred while retrieving students."
    });
  });
};