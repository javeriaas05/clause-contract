import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import {User} from './User.js';

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

Task.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Task, { foreignKey: 'userId' });

export default Task;
