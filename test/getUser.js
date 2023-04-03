const { before } = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const url = require("./testUtils");
const axios = require("axios");

before(async () => {
  newUserResponse = await url.createUserFunc();
  newUser = newUserResponse.data.user;
});

describe("Get user info", function () {
  //get all user
  it("Get all user", async () => {
    const response = await axios.get(url.getAllUser);
    const data = await response.data;
    expect(response.status).to.be.equal(200);
    expect(response.data.user).to.be.an("array");
  });

  //get single user
  it("Get single user", async () => {
    const response = await axios.get(url.singleUser + "/" + newUser._id);
    console.log(response.data);
    expect(response.status).to.be.equal(200);
    expect(response.data.singleUser).to.be.an("object");
  });

  //should have all the property
  it("Should have all the property for each user", async () => {
    const response = await axios.get(url.singleUser + "/" + newUser._id);
    response.data.singleUser.should.have.property("name");
    response.data.singleUser.should.have.property("email");
    response.data.singleUser.should.have.property("age");
    expect(response.status).to.be.equal(200);
    expect(response.data.singleUser).to.be.an("object");
  });
});
