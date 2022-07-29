//
// routes for the Milestone application
//

module.exports = app => {
  const controller = require("../controllers/controller.js");

  // Retrieve all students; like search text and major or graduation date
  app.get("/search", controller.findAllStudents);


};