import { Model, DataTypes } from "sequelize";

import sequelize from "../../database";
import User from "./User";

interface AddressAttributes {
  userId: number;
  address: string;
}

// You can write `extends Model<AddressAttributes, AddressAttributes>` instead,
// but that will do the exact same thing as below
class Address extends Model<AddressAttributes> implements AddressAttributes {
  public userId!: number;
  public address!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Address.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    address: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "address",
    sequelize, // passing the `sequelize` instance is required
  }
);

Address.belongsTo(User, { targetKey: "id" });

export default Address;
