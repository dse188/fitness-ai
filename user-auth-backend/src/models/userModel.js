import { Sequelize, DataTypes } from 'sequelize';
import db from '../db/index.js';

const User = db.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
}, {
    timestamps: true,
});

// Method to find a user by username or email
User.findByCredentials = async (identifier, password) => {
    const user = await User.findOne({
        where: {
            [Sequelize.Op.or]: [
                { username: identifier },
                { email: identifier },
            ],
        },
    });

    if (!user || !(await user.validatePassword(password))) {
        throw new Error('Invalid login credentials');
    }

    return user;
};

// Method to validate password (you would implement password hashing and comparison here)
User.prototype.validatePassword = async function (password) {
    // Implement password validation logic (e.g., bcrypt.compare)
    return this.password === password; // Placeholder for actual password comparison
};

export default User;