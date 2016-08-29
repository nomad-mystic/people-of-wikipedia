/**
 * Created by Nomad_Mystic on 8/18/2016.
 */


// require('babel-polyfill');

var chai = require('chai');
var chaiHTML = require('chai-http');


import InitialPages from '../src/js/classes/InitialPages';

chai.use(chaiHTML);

describe('Front-end Logic -', () => {

    describe('Root Page Logic -', () => {
        describe('initialPeople -', () => {
            it('should have class initialPeople', (done) => {
                chai.expect(new InitialPages({'key': 'value'})).to.be.an('object');
                chai.expect(new InitialPages({'key': 'value'})).to.not.equal(null);
                done();
            });
            it('getInitialPeople should return 10 people from the API', () => {

            });
        });
    });
});
