module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("company", {
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
      address: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      taxNumber: {
        allowNull: false,
        type: Sequelize.STRING(12),
      },
      countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "country",
          key: "id",
        },
        onUpdate: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
        onUpdate: "cascade",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
        onUpdate: "cascade",
      },
    }),
  down: (queryInterface) => queryInterface.dropTable("company"),
};
