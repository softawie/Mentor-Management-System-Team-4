module.exports = (sequelize, DataTypes) => {
    const Support_Message = sequelize.define(
        'Support_Message',
        {
            message_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
              },

              email: {
                type: DataTypes.STRING,
                allowNull: false,
              },

              title: {
                type: DataTypes.STRING,
                allowNull: false,
              },

              body: {
                type: DataTypes.STRING,
                allowNull: false,
              },

              user_id: {
                type: DataTypes.BIGINT,
                unique: true,
                allowNull: false,
              },
              created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.fn('NOW'),
              },
              updated_at: {
                type: DataTypes.DATE,
              },

        },
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            underscore: true,
            tableName: 'settings',
            timestamps: true,
          }
        
    );

    Support_Message.associate = ({ User }) => {
        Support_Message.belongsTo(User, {
          foreignKey: 'user_id',
        });
      };
    
      return Support_Message;
}