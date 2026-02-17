

// import { User } from '../models/User.js';
// import bcrypt from 'bcrypt';

// function sendResponse(res, message, data = null) {
//     res.json({ status: 'success', message, data });
// }

// export async function signup(req, res) {
//     const { first_name, last_name, email, password } = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = await User.create({
//             first_name,
//             last_name,
//             email,
//             password: hashedPassword
//         });
//         sendResponse(res, 'User registered successfully', {
//             id: user.id,
//             first_name: user.first_name,
//             last_name: user.last_name,
//             email: user.email
//         });
//     } catch (err) {
//         console.error("Signup Error:", err);
//         res.status(400).json({
//             status: 'error',
//             message: err.message,
//             details: err.errors || null
//         });
//     }
// }


// export async function login(req, res) {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ where: { email } });
//         if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
//         const match = await bcrypt.compare(password, user.password);
//         if (!match) return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
//         // Generate JWT token
//         const jwt = await import('jsonwebtoken');
//         const token = jwt.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
//         sendResponse(res, 'Login successful', {
//             id: user.id,
//             first_name: user.first_name,
//             last_name: user.last_name,
//             email: user.email,
//             token
//         });
//     } catch (err) {
//         res.status(400).json({ status: 'error', message: err.message });
//     }
// }

// export async function getAllUsers(req, res) {
//     try {
//         const users = await User.findAll({ attributes: ['id', 'first_name', 'last_name', 'email'] });
//         sendResponse(res, 'Users fetched successfully', users);
//     } catch (err) {
//         res.status(400).json({ status: 'error', message: err.message });
//     }
// }

// export async function getUserById(req, res) {
//     const { id } = req.params;
//     try {
//         const user = await User.findByPk(id, { attributes: ['id', 'first_name', 'last_name', 'email'] });
//         if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
//         sendResponse(res, 'User fetched successfully', user);
//     } catch (err) {
//         res.status(400).json({ status: 'error', message: err.message });
//     }
// }

// export async function updateUser(req, res) {
//     const { id } = req.params;
//     const { first_name, last_name, email, password } = req.body;
//     try {
//         const user = await User.findByPk(id);
//         if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
//         user.first_name = first_name || user.first_name;
//         user.last_name = last_name || user.last_name;
//         user.email = email || user.email;
//         if (password) {
//             user.password = await bcrypt.hash(password, 10);
//         }
//         await user.save();
//         sendResponse(res, 'User updated successfully', {
//             id: user.id,
//             first_name: user.first_name,
//             last_name: user.last_name,
//             email: user.email
//         });
//     } catch (err) {
//         res.status(400).json({ status: 'error', message: err.message });
//     }
// }

// export async function deleteUser(req, res) {
//     const { id } = req.params;
//     try {
//         const user = await User.findByPk(id);
//         if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
//         await user.destroy();
//         sendResponse(res, 'User deleted successfully', {
//             id: user.id,
//             first_name: user.first_name,
//             last_name: user.last_name,
//             email: user.email
//         });
//     } catch (err) {
//         res.status(400).json({ status: 'error', message: err.message });
//     }
// }










import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

function sendResponse(res, message, data = null) {
    res.json({ status: 'success', message, data });
}

// ==================== FORGET PASSWORD ====================
export async function forgetPassword(req, res) {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ status: 'error', message: "Email is required" });
        }

        // Find user in Sequelize
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ status: 'error', message: "User not found" });
        }

        // Generate token + expiry
        const resetToken = crypto.randomBytes(32).toString("hex");
        const resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 min

        // Save to DB
        user.resetToken = resetToken;
        user.resetTokenExpiry = resetTokenExpiry;
        await user.save();

        // (Later you’ll send via email, but now return it for testing)
        return sendResponse(res, "Password reset link generated", { resetToken });

    } catch (error) {
        console.error("ForgetPassword Error:", error);
        res.status(500).json({ status: 'error', message: "Server error", error: error.message });
    }
}

// ==================== SIGNUP ====================
export async function signup(req, res) {
    const { first_name, last_name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            first_name,
            last_name,
            email,
            password: hashedPassword
        });
        sendResponse(res, 'User registered successfully', {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(400).json({
            status: 'error',
            message: err.message,
            details: err.errors || null
        });
    }
}

// ==================== LOGIN ====================
export async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
        
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ status: 'error', message: 'Invalid credentials' });

        const jwt = await import('jsonwebtoken');
        const token = jwt.default.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        sendResponse(res, 'Login successful', {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            token
        });
    } catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
}

// ==================== GET ALL USERS ====================
export async function getAllUsers(req, res) {
    try {
        const users = await User.findAll({ attributes: ['id', 'first_name', 'last_name', 'email'] });
        sendResponse(res, 'Users fetched successfully', users);
    } catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
}

// ==================== GET USER BY ID ====================
export async function getUserById(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, { attributes: ['id', 'first_name', 'last_name', 'email'] });
        if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
        sendResponse(res, 'User fetched successfully', user);
    } catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
}

// ==================== UPDATE USER ====================
export async function updateUser(req, res) {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });

        user.first_name = first_name || user.first_name;
        user.last_name = last_name || user.last_name;
        user.email = email || user.email;
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }
        await user.save();

        sendResponse(res, 'User updated successfully', {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        });
    } catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
}

// ==================== DELETE USER ====================
export async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });

        await user.destroy();
        sendResponse(res, 'User deleted successfully', {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        });
    } catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
}
