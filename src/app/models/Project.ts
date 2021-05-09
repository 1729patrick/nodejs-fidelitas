import { Model, DataTypes, Optional } from "sequelize";

import sequelize from "../../database";

interface ProjectAttributes {
  id: number;
  ownerId: number;
  name: string;
}

interface ProjectCreationAttributes extends Optional<ProjectAttributes, "id"> {}

class Project
  extends Model<ProjectAttributes, ProjectCreationAttributes>
  implements ProjectAttributes {
  public id!: number;
  public ownerId!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    ownerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

export default Project;
