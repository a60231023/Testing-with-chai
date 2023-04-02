const User = require("../model/user");

const hello = (req, res) => {
  res.status(200).json({
    message: "welcome",
  });
};

const register = async (req, res) => {
  try {
    // you are writing the variable name, email in the same way as you have deifinded in the schema if you do differently then while creating new user you have to assign to each vairble indvidually but as you have defined the same way so you are just giving that varibale.

    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      res.status(422).json({
        message: "all information is required",
      });
    }

    const userInfo = new User({
      name,
      email,
      age,
    });

    const userPostResult = await User.create(userInfo);

    res.status(201).json({
      message: "user created succesfully",
      user: userPostResult,
    });
  } catch (error) {
    res.status(400).json({
      error: "something went wrong",
      message: error,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).sort({ date: "desc" });
    res.status(200).json({
      user: users,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

module.exports = {
  hello,
  register,
  getAllUser,
};
