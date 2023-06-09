module.exports = (sequelize, DataTypes) => {
  const TaskUser = sequelize.define(
    'TaskUser',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      task_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('NOW'),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW'),
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      underscore: true,
      tableName: 'task_user',
      timestamps: true,
    }
  );

  TaskUser.associate = ({ User, Task }) => {
    TaskUser.belongsTo(User, {
      as: 'user',
      foreignKey: 'user_id',
    });
    TaskUser.belongsTo(Task, {
      as: 'task',
      foreignKey: 'task_id',
    });
  };

  return TaskUser;
};
