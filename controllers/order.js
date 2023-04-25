const Classroom = require("../models").Classroom;
const Student = require("../order").Student;

module.exports = {
    // method to access all the classroom records on the classroom table
    list(req, res) {
      return Classroom.findAll({
        include: [
          {
            model: Student,
            as: "students",
          },
        ],
        order: [
          ["createdAt", "DESC"],
          [{ model: Student, as: "students" }, "createdAt", "DESC"],
        ],
      })
        .then((classrooms) => res.status(200).send(classrooms))
        .catch((error) => res.status(400).send(error));
    },
}