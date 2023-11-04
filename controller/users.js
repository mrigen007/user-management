const Register = require('../models/users-model');
const requiredModules = require('../services/require-module');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ msg: 'Enter email and password' })
        } else {
            const user = await Register.findOne({ email });
            if (user && (await bcrypt.compare(password, user.password))) {
                const accessToken = jwt.sign({
                    user: {
                        email: user.email,
                        password: user.password,
                        id: user._id
                    }
                }, process.env.ACCESS_SECRET_KEY, { expiresIn: "10m" })
                res.status(200).json({ userId: user._id, token: accessToken });
            } else {
                res.status(401).json({ msg: 'Email does not exist. Please register new email' });
            }
        }
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

// @access private
const registerUser = async (req, res) => {
    try {
        const email = req.body.email;
        const emailExist = await Register.findOne({ email });
        if (emailExist) {
            res.status(403).json({ msg: 'Email already exist, Please enter new email' })
        } else {
            const hash = await bcrypt.hash(req.body.password, SALT_WORK_FACTOR);
            req.body.password = hash;
            const registeredUser = await Register.create(req.body);
            res.status(200).json({ registeredUser, msg: `User created successfully` });
        }
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

// @access private
const getUserList = async (req, res) => {
    try {
        const user = await Register.find(req.body);
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

// @access private
const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await Register.findOneAndUpdate({ _id: userId }, req.body);
        res.status(200).json({ user, msg: `Updated Successfully` });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

// @access private
const deleteUser = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await Register.findOneAndDelete({ email });
        res.status(200).json({ user, msg: `Account Deleted Successfully`, delete: "true" });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = {
    registerUser,
    getUserList,
    updateUser,
    deleteUser,
    login
};