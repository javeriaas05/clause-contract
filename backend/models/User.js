// import { DataTypes } from 'sequelize';
// import { sequelize } from '../config/db.js';

// const User = sequelize.define('User', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     first_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     last_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             isEmail: true,
//         },
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// }, {
//     tableName: 'users',
//     timestamps: false,
// });

// export { User };














import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    resetToken: {
        type: DataTypes.STRING,
        allowNull: true, // only filled when forget-password is requested
    },
    resetTokenExpiry: {
        type: DataTypes.DATE,
        allowNull: true, // only filled when forget-password is requested
    },
}, {
    tableName: 'users',
    timestamps: false,
});

export { User };
