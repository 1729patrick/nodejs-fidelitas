module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("country", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING(2),
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
    }),
  down: (queryInterface) => queryInterface.dropTable("country"),
};
