module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("countries", {
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
    }),
  down: (queryInterface) => queryInterface.dropTable("countries"),
};
