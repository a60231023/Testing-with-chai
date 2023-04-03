const axios = require("axios");

const API_URL = "http://localhost:8000/";
const getAllUser = API_URL + "getAllUser";
const singleUser = API_URL + "getSingleUser";
const createUser = API_URL + "register";
const deleteUser = API_URL + "deleteUser";

const createUserFunc = async () => {
  const payload = {
    name: "new user",
    email: "new@gmail.com",
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
  createUserFunc,
  deleteUser,
};
