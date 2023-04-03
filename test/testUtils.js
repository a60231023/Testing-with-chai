const API_URL = "http://localhost:8000/";

const getAllUser = API_URL + "getAllUser";
const singleUser = API_URL + "getSingleUser";
const createUser = API_URL + "register";

module.exports = {
  getAllUser,
  singleUser,
  createUser,
};
