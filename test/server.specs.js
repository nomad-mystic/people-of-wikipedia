/**
 * Created by Nomad_Mystic on 8/18/2016.
 */



// Adding so I can use ES6 in testing
// require('babel-polyfill');


var chai = require('chai');
var http = require('chai-http');
var expect = chai.expect;
var should = chai.should();

chai.use(http);


describe('Application Logic', () => {

    describe('Server Logic', () => {
        describe('Root logic', () => {
            it('to have status of 200, have no errors, be an object, and have content-type HTML', (done) => {
                chai.request('http://localhost:3000')
                    .get('/')
                    .end((err, res) => {
                        expect(err).to.equal(null);
                        expect(res).to.be.a('object');
                        expect(res).to.have.status(200);
                        expect(res).to.be.html;
                        done();
                    });
            });
        });
        // initialPeople endpoint
        describe('Initial Pages endpoint', () => {
           it('should have status of 200, not have errors, have header content-type HTML, and be an Object', (done) => {
               chai.request('http://localhost:3000')
                   .get('/')
                   .end((err, res) => {
                       expect(res).to.have.status(200);
                       expect(err).to.equal(null);
                       expect(res).to.be.an('object');
                       expect(res).to.have.header('content-type', 'text/html; charset=UTF-8');
                       done();
                   });
           });
        }); //  end Initial People endpoint
    }); // server logic
}); // end application logic


