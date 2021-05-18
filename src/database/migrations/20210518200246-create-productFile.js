module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("productFile", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "product",
          key: "id",
        },
        onUpdate: "cascade",
      },
      fileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "file",
          key: "id",
        },
        onUpdate: "cascade",
      },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "company",
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
  down: (queryInterface) => queryInterface.dropTable("file"),
};
