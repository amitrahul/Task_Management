const User = require("../../database/model/user.model");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");
const { match } = require("assert");

const signin = async (req, res) => {
  let { email, password } = req.body;
  try {
    // check particular user exhist in database or not
    let user = await User.findOne({ email });
    // if user doesnoty exist
    if (!user) {
      return res.status(400).send("email doesnot exist");
    }
    // if email exist
    user.comparePassword(password, (err, match) => {
      if (!match || err) return res.status(400).send("password does not match");
      let token = jwt.sign(
        {
          _id: user._id,
        },
        "ksjdbvpaqfscnjkaxbvjopsapl",
        { expiresIn: "24h" }
      );
      res.status(200).send({
        token,
        username: user.username,
        email: user.email,
        id: user._id,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    });
  } catch (error) {
    return res.status(400).send("login failed");
  }
};

const register = async (req, res) => {
  const { email, password, username, role } = req.body;
  try {
    // check user exhist
    if (!username) return res.status(400).send("useName is required");
    //check email exhist
    if (!email) return res.status(400).send("email is required");
    if (!role) return res.status(400).send("Role is required");
    // check is email valid
    if (!validator.validate(email)) {
      return res.status(400).send("enter valid email Id");
    }
    if (!password || password.length < 6) {
      return res.status(400).send("enter valid password");
    }
    // check user exhist with email id or not
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).send("email is taken");
    }
    // otherwise taken new user
    const user = await new User({
      email,
      username,
      password,
      role,
    });
    await user.save();
    return res.status(200).send(user);
  } catch (error) {
    return res, statusbar(400).send("Error while creating User");
  }
};

module.exports = {
  signin,
  register,
};
