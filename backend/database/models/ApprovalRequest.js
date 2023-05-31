module.exports = (sequelize, DataTypes) => {
  const ApprovalRequest = sequelize.define(
    'ApprovalRequest',
    {
      request_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(['accepted', 'declined', 'pending']),
        defaultValue: 'pending',
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
      tableName: 'approval_requests',
      underscore: true,
      timestamps: true,
    }
  );

  ApprovalRequest.associate = ({ User }) => {
    ApprovalRequest.belongsTo(User, {
      foreignKey: 'user_id',
    });
  };

  return ApprovalRequest;
};
