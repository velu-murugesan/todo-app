const todomodels = require("../models/todomodels");
const TodoModel = require("../models/todomodels");

module.exports.getToDo = async (req, res) => {
  const toDo = await TodoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  TodoModel.create({ text }).then((data) => {
    console.log(`added sucessfully to do list: ${data}`);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  TodoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("updated successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  TodoModel.findByIdAndDelete(_id)
    .then(() => res.send("deleted successfully..."))
    .catch((err) => console.log(err));
};
