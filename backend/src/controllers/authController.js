const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * @desc    Register new user
 * @route   POST /api/auth/register
 * @access  Public
 */
exports.register = async (req, res) => {
  try {
    let { name, email, password, role } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please provide all required fields"
      });
    }

    email = email.trim().toLowerCase();

    // Role validation (security)
    const userRole = role === "admin" ? "admin" : "user";

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    // Create user (password hashed in model)
    await User.create({
      name,
      email,
      password,
      role: userRole
    });

    return res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {
    console.error("Register Error:", error);

    // Duplicate email fallback
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

/**
 * @desc    Login user
 * @route   POST /api/auth/login
 * @access  Public
 */
exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password"
      });
    }

    email = email.trim().toLowerCase();

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({ token });

  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
