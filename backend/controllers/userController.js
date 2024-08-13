const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.register = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // check for valid input fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please input Email and Password" });
    }

    //check to see if user exists
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res
        .status(400)
        .json({ message: "User already exists! Please login" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Save the user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({ message: "User has been created", newUser });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error creating user" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check If The Input Fields are Valid
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please Input Username and Password" });
    }

    // Check If User Exists In The Database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare Passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY || "1234!@#%<{*&)",
      { expiresIn: "1h" }
    );

    return res
      .status(200)
      .json({ message: "Login Successful", data: user, token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error during login" });
  }
};
