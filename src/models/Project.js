import Sequelize from "sequelize";
import { sequelize } from "../database";
import Task from "./Task";

const Project = sequelize.define(
  "project",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.TEXT },
    priority: { type: Sequelize.INTEGER },
    description: { type: Sequelize.INTEGER },
    deliverydate: { type: Sequelize.DATE }
  },
  { timestamps: false }
);

Project.hasMany(Task, { foreingKey: "projectid", sourceKey: "id" });
Task.belongsTo(Project, { foreingKey: "projectid", sourceKey: "id" });
export default Project;
