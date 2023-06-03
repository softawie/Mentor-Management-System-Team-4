module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gitHub: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      instagram: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      linkedIn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      twitter: {
        type: DataTypes.STRING,
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
      reset_password_code: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      password_code_expire: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      has_change_password: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      has_fill_profile: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      technical_proficiency: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      previous_programs: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      availability_to_join: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      program_interest: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      mentor_before: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      years_of_experience: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'users',
      underscore: true,
      timestamps: true,
      defaultScope: {
        attributes: {
          exclude: ['reset_password_code', 'password_code_expire'],
        },
      },
    }
  );

  User.associate = ({
    Credential,
    Program,
    Invite,
    Mentor,
    MentorManager,
    Report,
    Notification,
    Message,
    Participant,
    Setting,
    ApprovalRequest,
    SupportMessage,
  }) => {
    User.hasOne(Credential, {
      as: 'credential',
      foreignKey: 'user_id',
    });
    User.hasOne(Setting, {
      as: 'settings',
      foreignKey: 'user_id',
    });
    User.hasMany(Invite, {
      as: 'invites',
      foreignKey: 'user_id',
    });
    User.hasMany(Mentor, {
      foreignKey: 'user_id',
    });
    User.hasMany(MentorManager, {
      foreignKey: 'user_id',
    });
    User.hasMany(Report, {
      as: 'reports',
      foreignKey: 'user_id',
    });
    User.hasMany(Notification, {
      foreignKey: 'user_id',
    });
    User.hasMany(Message, {
      as: 'messages',
      foreignKey: 'sender_id',
    });
    User.hasMany(Participant, {
      as: 'participants',
      foreignKey: 'user_id',
    });
    User.hasMany(ApprovalRequest, {
      as: 'requests',
      foreignKey: 'user_id',
    });
    User.belongsToMany(Program, {
      as: 'programs',
      through: ApprovalRequest,
      foreignKey: 'user_id',
      otherKey: 'program_id',
    });
    User.hasMany(SupportMessage, {
      foreignKey: 'user_id',
    });
  };

  return User;
};
