const axios = require("axios");

const API_URL = "http://localhost:8000/";
const getAllUser = API_URL + "getAllUser";
const singleUser = API_URL + "getSingleUser";
const createUser = API_URL + "register";
const deleteUser = API_URL + "deleteUser";
const updateUser = API_URL + "updateUser"

const createUserFuncNormal = async () => {
  const payload = {
    name: "test user",
    email: "testusergmail.com",
    age: 50,
  };
  const response = await axios.post(createUser, payload);
//   console.log(response.data);
  return response;
};

const createUserFuncD = async () => {
  const payload = {
    name: "delete user",
    email: "delete@gmail.com",
    age: 50,
  };
  const response = await axios.post(createUser, payload);
//   console.log(response.data);
  return response;
};



module.exports = {
  getAllUser,
  singleUser,
  createUser,
  createUserFuncNormal,
  createUserFuncD,
  deleteUser,
  updateUser,
};
