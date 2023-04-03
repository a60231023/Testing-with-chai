const chai = require('chai');
const expect = chai.expect;
const should = chai.should();


describe("check two number", function(){

    it("match two number", () => {
        
        let first = 10;
        let second = 10;

        expect(first).to.be.equal(second); 
    });

    it("should not match two number", () => {
        
        let first = 100;
        let second = 10;

        expect(first).not.to.be.equal(second); 
    });

    it("should have matching name", () => {
        let first = "ayush";
        let second = "ayush";

        expect(first).to.be.equal(second);
    })

     
})
