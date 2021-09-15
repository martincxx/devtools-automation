const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

const err = null;
should.not.exist(err);

function myObj(ceiling){
    return{
        a:10,
        b: "Martin",
        c: Math.floor(Math.random()*ceiling)
    }
}
const obj1 =myObj(10);
console.log(obj1.c);
const obj2 = 10;
assert.typeOf(obj1, 'object', "This is not an object");
expect(obj1).to.be.a('object', "This is not an object")

obj1.should.be.a('object', "This is not an object")

//deepequal

const obj3 = myObj(15);

expect(obj1).to.be.deep.equal(obj3, "They're not equal objects")