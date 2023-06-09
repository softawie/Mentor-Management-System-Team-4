module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define(
    'Program',
    {
      program_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        default: 'local',
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
      },
      avatar_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_by: {
        type: DataTypes.BIGINT,
        allowNull: false,
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
      tableName: 'programs',
      timestamps: true,
    }
  );

  Program.associate = ({ User, ApprovalRequest, Report }) => {
    Program.hasMany(ApprovalRequest, {
      as: 'requests',
      foreignKey: 'program_id',
    });
    Program.belongsToMany(User, {
      as: 'users',
      through: ApprovalRequest,
      foreignKey: 'program_id',
      otherKey: 'user_id',
    });
    Program.hasMany(Report, {
      as: 'reports',
      foreignKey: 'program_id',
    });
  };

  return Program;
};
