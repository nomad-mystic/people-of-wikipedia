/**
 * Created by Nomad_Mystic on 8/18/2016.
 */


// require('babel-polyfill');

var chai = require('chai');
var chaiHTML = require('chai-http');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
var should = chai.should();
// var assert = chai.assert();

// classes
import InitialPages from '../src/js/classes/InitialPages';

// utilities
import getPromise from '../src/js/utilities/getPromise';

chai.use(chaiAsPromised);
chai.use(chaiHTML);

describe('Front-end Logic -', () => {

    describe('Root Page Logic -', () => {
        describe('initialPages -', () => {

            it('should have class InitialPages which is an object and !null', (done) => {
                expect(new InitialPages([])).to.be.an('object');
                expect(new InitialPages([])).to.not.equal(null);
                done();
            });
            it('InitialPages getInitialPages method should return an object and not be null', (done) => {
                expect(new InitialPages({"key": "value"}).getInitialPages()).to.not.equal(null);
                expect(new InitialPages({"key": "value"}).getInitialPages()).to.be.an('object');
                done();
            });

            it('Promise should not be rejected', (done) => {
                return expect(Promise.resolve('/initialpages')).to.eventually.be.fulfilled.notify(done);
            });
            it('Promise should not be null', (done) => {
                return expect(Promise.resolve('/initialpages')).to.eventually.not.equal(null).notify(done);
                // have.property('query').notify(done);
                // return expect(Promise.resolve({ foo: "bar" })).to.eventually.have.property("foo").notify(done);
            });
            it('Promise should return a 0 key', (done) => {
                return expect(Promise.resolve('/initialpages')).to.eventually.include.keys("0").notify(done);
            });
            it('Promise should return a 10 key', (done) => {
                return expect(Promise.resolve('/initialpages')).to.eventually.include.keys("10").notify(done);
            });
            it('', (done) => {

                done();
            });
        });
    }); // Root Page Logic
}); // Front-end Logic
