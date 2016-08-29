/**
 * Created by Nomad_Mystic on 8/18/2016.
 */


// require('babel-polyfill');

var chai = require('chai');
var chaiHTML = require('chai-http');


import InitialPeople from '../src/js/classes/initialPeople';

chai.use(chaiHTML);

describe('Front-end Logic -', () => {

    describe('Root Page Logic -', () => {
        describe('initialPeople -', () => {
            it('should have class initialPeople', (done) => {
                chai.expect(new InitialPeople({'key': 'value'})).to.be.an('object');
                chai.expect(new InitialPeople({'key': 'value'})).to.not.equal(null);
                done();
            });
            it('getInitialPeople should return 10 people from the API', () => {

            });
        });
    });
});
