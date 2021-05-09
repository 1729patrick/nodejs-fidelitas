import { Sequelize } from "sequelize";

export default new Sequelize(
  process.env.DB_NAME || "fidelitas",
  process.env.DB_USER || "",
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || "localhost",
    port: (process.env.DB_PORT || 5432) as number,
    dialect: "postgres",
    logging: true,
    timezone: "+00:00",
  }
);
