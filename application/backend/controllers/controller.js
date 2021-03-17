//
// the controller for Milestones Application
//

// student model hook
const stModel = require("../models/student.js");

//
// student control
//

// retrieve all students for a criteria
exports.findAllStudents = (req, res) => {
  student.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students."
      });
    else res.send(data);
  });
};


