const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const url = require("./testUtils");
const axios = require("axios");

const createUser = async () => {
  const payload = {
    name: "new user",
    email: "new@gmail.com",
    age: 50,
  };
  const response = await axios.post(url.createUser, payload);
//   console.log(response.data);
  return response;
};

describe("Get user info", function () {
  
  it("Get all user", async () => {
    const response = await axios.get(url.getAllUser);
    const data = await response.data;
    expect(response.status).to.be.equal(200);
    expect(response.data.user).to.be.an("array");
  });

  it("Get single user", async () => {
    const newUserResponse = await createUser();
    console.log(newUserResponse.data);
    const newUser = newUserResponse.data.user;
    const response = await axios.get(
      url.singleUser + "/" + newUser._id
    );
    console.log(response.data);
    expect(response.status).to.be.equal(200);
    expect(response.data.singleUser).to.be.an("object");
  });
});
