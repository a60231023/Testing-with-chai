const { before } = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const url = require("./testUtils");
const axios = require("axios");

//when we run all the test file getsingleuser test is failing as the delteuser test file is running first and deleting the file and as we are using the same payload to create user but there is doubt we are running before in both the file so it shouldn't create proble but it is so we can use differnt payload or run only signle file at a time.

before(async () => {
  newUserResponse = await url.createUserFuncD();
  newUser = newUserResponse.data.user;
});

describe("Delete user from database", function () {
  it("Delete single user from database", async () => {
    const response = await axios.delete(url.deleteUser + "/" + newUser._id);
    expect(response.status).to.be.equal(200);
    expect(response.data.deluser).to.be.an("object");
  });
});
