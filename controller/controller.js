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

const getSingleUser = async (req, res) => {
    try {
        //while querying you have to do it like this 
        const query = {_id:req.params.id};
        console.log(query);
        const singleUser = await User.findOne(query);
        if(!singleUser){
            res.status(401).json({
                message: "user not found"
            });
        }
        res.status(200).json({
            singleUser
        });


    } catch (error) {
        res.status(404).json({
            message:error,
            value: "user not found"
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const query = {_id:req.params.id};
        console.log(query);
        const delUser = await User.findByIdAndDelete(query);
        res.status(200).json({
            value: "user deleted",
            message:delUser
        })

    } catch (error) {
        res.status(400).json({
            message: error,
            value: "user not found"
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const query = {_id:req.params.id};
        console.log(query);
        const {name, email, age} = req.body;
        const payload = {name, email, age};
        const updateInfo = await User.findByIdAndUpdate(query, {
            $set: payload,
        });

        res.status(200).json({
            message: "user updated",
            value: updateInfo
        });
    } catch (error) {
        res.status(400).json({
            message:error,
            value: "user not found"
        });
    }
}

module.exports = {
  hello,
  register,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser
};
