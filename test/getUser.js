const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const url = require('./testUtils');
const axios = require('axios');
const { response } = require('express');


describe("Get user info", function(){

    it("Get all user", async() => {
        const response = await axios.get(url.getalluser);
        const data = await response.data
        console.log(data)
        expect(response.status).to.be.equal(200);
        expect(response.data.user).to.be.an("array")

    });
    // id is already there in the url but you can take here also 
    it("Get single user", async() => {
        const  response = await axios.get(url.singleuser);
        const data = await response.data;


    });


});


// describe("check two number", function(){

//     it("match two number", () => {
        
//         let first = 10;
//         let second = 10;

//         expect(first).to.be.equal(second); 
//     });

//     it("should not match two number", () => {
        
//         let first = 100;
//         let second = 10;

//         expect(first).not.to.be.equal(second); 
//     });

//     it("should have matching name", () => {
//         let first = "ayush";
//         let second = "ayush";

//         expect(first).to.be.equal(second);
//     })

     
// })
