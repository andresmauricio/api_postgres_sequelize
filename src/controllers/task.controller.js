import Task from "../models/Task";

export const getTasks = async (req, res) => {
  const result = await Task.findAll({
    attributes: ["name", "done", "projectid"]
  });
  res.json(result);
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  const result = await Task.findOne({
    attributes: ["name", "done", "projectid"],
    where: { id }
  });
  res.json(result);
};

export const createTask = async (req, res) => {
  const { name, done, projectid } = req.body;
  const newTask = await Task.create(
    { name, done, projectid },
    { fields: ["name", "done", "projectid"] }
  );
  res.json({ newTask });
};
