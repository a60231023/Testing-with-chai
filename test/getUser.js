const { before } = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const url = require("./testUtils");
const axios = require("axios");


before(async() => {
  newUserResponse = await url.createUserFunc();
});




describe("Get user info", function () {
  it("Get all user", async () => {
    const response = await axios.get(url.getAllUser);
    const data = await response.data;
    expect(response.status).to.be.equal(200);
    expect(response.data.user).to.be.an("array");
  });

  it("Get single user", async () => {    
    // console.log(newUserResponse.data);
    const newUser = newUserResponse.data.user;
    const response = await axios.get(url.singleUser + "/" + newUser._id);
    console.log(response.data);
    expect(response.status).to.be.equal(200);
    expect(response.data.singleUser).to.be.an("object");
  });

  it("Should have all the property for each user", async() => {
    const newUser = newUserResponse.data.user;
    const response = await axios.get(url.singleUser + "/" + newUser._id);
    // console.log(response.data);
    response.data.singleUser.should.have.property("name");
    response.data.singleUser.should.have.property("email");
    response.data.singleUser.should.have.property("age");
    expect(response.status).to.be.equal(200);
    expect(response.data.singleUser).to.be.an("object");
  });
});
