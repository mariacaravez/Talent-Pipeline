const UserAttr = require ('../models/UserAttr');

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty."
    });
  }

  const userAttr = new UserAttr({
    gradDate: req.body.gradDate,
    academicStanding: req.body.academicStanding,
    major: req.body.major
  });

  UserAttr.create(userAttributes, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating UserAttributes."
      });
      else res.send(data);
  });
};

exports.findAll = (req, res) => {
  UserAttr.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving UserAttributes."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  UserAttr.findByFilter(req.query.optionsValue, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Could not find userAttributes with id ${req.query.optionsValue}.`
        });
      }
      else {
        res.status(500).send({
          message: "Error retrieving userAttributes with id " + req.query.optionsValue
        });
      }
    }
    else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty."
    });
  }

  UserAttr.updateById(
    req.params.userId,
    new UserAttr(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Could not find userAttributes with id ${req.params.userId}.`
          });
        }
        else {
          res.status(500).send({
            message: "Error updating userAttributes with id " + req.params.userId
          });
        }
      }
      else res.send(data);
    });
};

exports.delete = (req, res) => {
  UserAttr.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Could not find userAttributes with id ${req.params.userId}.`
        });
      }
      else {
        res.status(500).send({
          message: "Error updating userAttributes with id " + req.params.userId
        });
      }
    }
    else res.send({message: `userAttributes was deleted successfully!`});
  });
};