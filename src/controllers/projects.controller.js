import Project from "../models/Project";

export const getProjects = async (req, res) => {
  const result = await Project.findAll();
  res.json(result);
};

export const getProject = async (req, res) => {
  const { id } = req.params;
  const result = await Project.findOne({ where: { id } });
  res.json(result);
};

export const createProject = async (req, res) => {
  const { name, priority, description, deliverydate } = req.body;
  try {
    let newProject = await Project.create(
      {
        name,
        priority,
        description,
        deliverydate
      },
      { fields: ["name", "priority", "description", "deliverydate"] }
    );
    if (newProject) {
      res.json({ result: true, data: newProject });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(false);
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  const count = await Project.destroy({ where: { id } });
  res.json({ count });
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description, deliverydate } = req.body;
  const projects = await Project.findAll({
    attributes: ["id", "name", "priority", "description", "deliverydate"],
    where: { id }
  });   
  if (projects.length > 0) {
      projects.forEach(async project => {
          await project.update({name, priority, description, deliverydate})
      });
  }

  return res.json(projects)
};
