//
// this module contain the student models for Milestone Application
//

// get the db access
const db = require("./dbaccess.js");

// constructor for (ONLY) student user attributes
const StudentModel = function (attribValues) {
  this.userID = attribValues.userID;
  this.major = attribValues.major;
  this.academicStanding = attribValues.academicStanding;
  this.graduationDate = attribValues.graduationDate;
  this.gender = attribValues.gender;
  this.age = attribValues.age;
  this.race = attribValues.race;
  this.veteran = attribValues.veteran;
  this.militaryCode = attribValues.militaryCode;
  this.ethnicity = attribValues.ethnicity;
  this.skills = attribValues.skills;
  this.courseWork = attribValues.courseWork;
  this.workexp = attribValues.workexp;
  this.resume = attribValues.resume;
};

// search for students
StudentModel.find = (textValue, optionsValue) => {
  try {
    if (textValue == "") {
      return db
        .promise()
        .query(
          "SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID"
        )
        .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));
    } else if (optionsValue == "major") {
      return db
        .promise()
        .query(
          "SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.major LIKE ?",
          ["%" + textValue + "%"]
        )
        .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));
    } else if (optionsValue == "gradDate") {
      return db
        .promise()
        .query(
          "SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.gradDate LIKE ?",
          ["%" + textValue + "%"]
        )
        .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));
    } else if (optionsValue == "standing") {
      return db
        .promise()
        .query(
          "SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND +ua.academicStanding = ?",
          ["%" + textValue + "%"]
        )
        .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));
    } else if (optionsValue == "site" || optionsValue == "*") {
      return db
        .promise()
        .query(
          "SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND (us.lastName LIKE ? OR us.middleName LIKE ? OR us.firstName LIKE ? OR ua.academicStanding LIKE ? OR ua.gradDate LIKE ? OR ua.major LIKE ?)",
          [
            "%" + textValue + "%",
            "%" + textValue + "%",
            "%" + textValue + "%",
            "%" + textValue + "%",
            "%" + textValue + "%",
            "%" + textValue + "%",
          ]
        )
        .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

// create a new student profile - registration
StudentModel.createProfile = (stdtattrib, results) => {
  console.log(stdtattrib);
  db.query("INSERT INTO userAttributes (gradDate, academicStanding, major, userID, resume)  VALUES(?,?,?,?,?)",
    [stdtattrib.graduationDate, stdtattrib.academicStanding, stdtattrib.major, stdtattrib.userID, stdtattrib.resume], (err, res) => {
      if (err) {
        console.log(err);
        results(err, null);
        return;
      }
      else {
        console.log(res);
        results(null, res);
        // return;   // we cannot return yet, more inserts happening below.
      }
    })
  // console.log(results);

  // insert student demo data
  db.query("INSERT INTO studentDemo (userID, gender, age, race, ethnicity, veteran, militaryCode)  VALUES(?,?,?,?,?,?,?)",
    [stdtattrib.userID, stdtattrib.gender, stdtattrib.age, stdtattrib.race, stdtattrib.ethnicity, stdtattrib.veteran, stdtattrib.militaryCode], (err, res) => {
      if (err) {
        console.log(err);
        results(err, null);
        return;
      }
      else {
        console.log(res);
        results(...results, { ...res });
      }
    })
  // console.log(results);

  // insert course work
  db.query("INSERT INTO studentCoursework (coursework, courseworkRating, userID)  VALUES(?,?,?,?,?,?)",
    [stdtattrib.courseWork.coursework, stdtattrib.courseWork.courseworkRating, stdtattrib.userID], (err, res) => {
      if (err) {
        console.log(err);
        results(err, null);
        return;
      }
      else {
        console.log(res);
        results(...results, { ...res });
      }
    })
  // console.log(results);

  // insert student skills
  db.query("INSERT INTO studentSkills (userSkill, userSkillRating, userID)  VALUES(?,?,?)",
    [stdtattrib.skills.userskill, stdtattrib.skills.rating, stdtattrib.userID], (err, res) => {
      if (err) {
        console.log(err);
        results(err, null);
        return;
      }
      else {
        console.log(res);
        results(...results, { ...res });
      }
    })
  // console.log(results);

  // insert student work experience
  db.query("INSERT INTO studentWorkExp (workExpTitle, workExpDesc, userID)  VALUES(?,?,?)",
    [stdtattrib.workexp.title, stdtattrib.workexp.description, stdtattrib.userID], (err, res) => {
      if (err) {
        console.log(err);
        results(err, null);
        return;
      }
      else {
        console.log(res[0]);
        results(...results, { ...res });
        return;
      }
    })
  console.log(results);
};

// update an existing student's profile
StudentModel.updateProfile = (stdtattrib, results) => {
  console.log(stdtattrib);
  db.query("UPDATE userAttributes SET academicStanding = ?, resume = ? where userID = ?)",
    [stdtattrib.academicStanding, stdtattrib.resume, stdtattrib.userID], (err, res) => {
      if (err) {
        console.log(err);
        results(err, null);
        return;
      }
      else {
        console.log(res);
        results(null, res);
      }
    })
  // console.log(results);

  // update student demo data
  db.query("UPDATE studentDemo SET gender = ?, age = ?, race = ?, ethnicity = ?, veteran = ?, militaryCode = ? WHERE userID = ?)",
    [stdtattrib.gender, stdtattrib.age, stdtattrib.race, stdtattrib.ethnicity, stdtattrib.veteran, stdtattrib.militaryCode, stdtattrib.userID], (err, res) => {
      if (err) {
        console.log(err);
        results(err, null);
        return;
      }
      else {
        console.log(res[0]);
        results(...results, { ...res });
        return;
      }
    })
  // console.log(results);
};

// retrieve a student profile
StudentModel.findProfile = (userid, result) => {
  console.log("Looking for user with user id: " + userid);
  // db.query("SELECT * FROM user us WHERE us.userTypeID = 1 AND us.userID = ?", userid, (err, res) => {
  //   if (err) {
  //     console.log(err);
  //     result(err, null);
  //     return;
  //   }
  //   else {
  //     console.log(res[0]);
  //     result(null, res[0]);
  //     return;
  //   }
  // })
  // return;
  var us, ua, sd, scw, ss, swe;
  const mysqlstatement = "SELECT * FROM user WHERE userID = ?;SELECT * FROM userAttributes WHERE userID = ?;SELECT * FROM studentDemo WHERE userID = ?;SELECT * FROM studentCoursework WHERE userID = ?;SELECT * FROM studentSkills WHERE userID = ?;SELECT * FROM studentWorkExp WHERE userID = ?;";
  db.query(mysqlstatement,
    [userid, userid, userid, userid, userid, userid],
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        us = res[0];
        ua = res[1];
        sd = res[2];
        scw = res[3];
        ss = res[4];
        swe = res[5];
        var studentObj = { user: us, userAttributes: ua, studentDemo: sd, studentCoursework: scw, studentSkills: ss, studentWorkExp: swe };
        console.log("obj: ", studentObj);
        result(null, studentObj);
        return;
      }
    });
};

module.exports = StudentModel;
