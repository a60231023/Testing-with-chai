const { before } = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const url = require("./testUtils");
const axios = require("axios");


describe("Create new user", function(){

    it("User created successfully", async() => {
        const payload = {
            name: "john doe",
            email: "doe@gmail.com",
            age: 10,
          };
        const response = await axios.post(url.createUser, payload);
        // console.log(response.data);
        expect(response.status).to.be.equal(201);
        expect(response.data.user).to.be.an("object");

    });

});