const { before } = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const url = require("./testUtils");
const axios = require("axios");

before(async () => {
  newUserResponse = await url.createUserFuncNormal();
  newUser = newUserResponse.data.user;
});

describe("Update user information", function(){

    it("Update single user all information together", async() => {
        const payload = {
            name: "name change",
            email: "change@gmail.com",
            age: 80,
          };
        const response = await axios.put(url.updateUser + "/" + newUser._id, payload); 
        // console.log(response.data);
        expect(response.status).to.be.equal(200);
        expect(response.data.updatedinfo).to.be.an("object");
    });

});