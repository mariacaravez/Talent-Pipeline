const JobPost = require ('../models/JobPost');

exports.findAll = (req, res) => {
  JobPost.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Job Postings."
      });
    else res.send(data);
  });
};


