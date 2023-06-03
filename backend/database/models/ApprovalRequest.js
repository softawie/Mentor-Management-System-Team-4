/* eslint-disable camelcase */
import models from '.';

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
      program_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      category: {
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
      hooks: {
        afterUpdate: async ({ dataValues: { status, category, user_id } }) => {
          if (status === 'accepted' && category !== 'program') {
            await models.User.update(
              {
                user_role: category,
              },
              { where: { user_id } }
            );
          }
        },
      },
    }
  );

  ApprovalRequest.associate = ({ User, Program }) => {
    ApprovalRequest.belongsTo(User, {
      as: 'user',
      foreignKey: 'user_id',
    });
    ApprovalRequest.belongsTo(Program, {
      as: 'program',
      foreignKey: 'program_id',
    });
  };

  return ApprovalRequest;
};
