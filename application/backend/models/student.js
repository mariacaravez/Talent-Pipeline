//
// this module contain the student models for Milestone Application
//

// get the db access
const db = require('./dbaccess.js');
const StudentModel = {}

// OLD: student.find(student) = result =>
// retrieve all students who match - textvalue and have attribute optiotsvalue
StudentModel.find = (student, textValue, optionsValue) => {
	setTimeout(function(){
		return('sup');
	}, 50000);
// try{
//   if (textValue == "") {
// 		db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID", (error, result) => {
// 			if (error) {
// 				 //console.log("error: ", error);
// 					res.sendStatus(500);
// 				//result(null, err);
// 				return (error);
// 			}
// 			//console.log("student: ", res);
// 			return(result);
// 		 });
// 	}
// 	else if (optionsValue == "major") {
// 	 db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.major LIKE ?",["%" + student.major + "%"], (error, result) => {
// 		 if (error) {
// 				//console.log("error: ", error);
// 				 res.sendStatus(500);
// 			 //result(null, err);
// 			 return (error);
// 		 }
// 		 //console.log("student: ", res);
// 		 return(result);
// 		});
//  }
//  else if (optionsValue == "gradDate") {
// 	db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.gradDate LIKE ?",["%" + student.graduationDate + "%"], (error, result) => {
// 		if (error) {
// 			 //console.log("error: ", error);
// 				res.sendStatus(500);
// 			//result(null, err);
// 			return (error);
// 		}
// 		//console.log("student: ", res);
// 		return(result);
// 	 });
//  }
//  else if (optionsValue == "standing") {
//  db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND +ua.academicStanding LIKE ?",["%" + student.academicStanding + "%"], (error, result) => {
// 	 if (error) {
// 			//console.log("error: ", error);
// 			 res.sendStatus(500);
// 		 //result(null, err);
// 		 return (error);
// 	 }
// 	 //console.log("student: ", res);
// 	 return(result);
// 	});
//  }
//  else if (optionsValue == "site" || optionsValue == "*") {
//  db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND (us.lastName LIKE ? OR us.middleName LIKE ? OR us.firstName LIKE ? OR ua.academicStanding LIKE ? OR ua.gradDate LIKE ? OR ua.major LIKE ?)",["%" + student.lastName + "%", "%" + student.middleName + "%", "%" + student.firstName + "%", "%" + student.academicStanding + "%", "%" + student.graduationDate + "%", "%" + student.major + "%"], (error, result) => {
// 	if (error) {
// 		 //console.log("error: ", error);
// 		res.sendStatus(500);
// 		//result(null, err);
// 		return (error);
// 	}
// 	//console.log("student: ", res);
// 	return(result);
//  });
//  }
//  } catch(err) {
// 	 console.log(err);
// 	 return(err)
//  }
};

module.exports = StudentModel;