module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("user", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true,
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING(50),
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "role",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "set null",
      },
    }),
  down: (queryInterface) => queryInterface.dropTable("user"),
};
