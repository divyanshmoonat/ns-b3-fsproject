const bcrypt = require("bcrypt");

const User = require("../models/User");

const login = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Invalid username or password"
        });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({
            success: false,
            message: "Invalid username or password"
        });
    }

    res.json({
        success: true,
        message: "Login successful"
    });
};

const register = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
    });
    await user.save();
    res.json({
        success: true,
        message: "User registered successfully"
    })
};

const logout = (req, res) => {
    res.json({
        success: true,
        message: "Logout API"
    })
};

module.exports = {
    login,
    register,
    logout
}