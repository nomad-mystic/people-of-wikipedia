/**
 * Created by Nomad_Mystic on 8/18/2016.
 */



// Adding so I can use ES6 in testing
require('babel-polyfill');


var chai = require('chai');
var http = require('chai-http');

chai.use(http);


describe('Application Logic', () => {

    describe('Server Logic', () => {
        describe('Root logic', () => {
            it('to have status of 200, have no errors, be an object, and be HTML', (done) => {
                chai.request('http://localhost:3000')
                    .get('/')
                    .end((err, res) => {
                        chai.expect(err).to.equal(null);
                        chai.expect(res).to.be.a('object');
                        chai.expect(res).to.have.status(200);
                        chai.expect(res).to.be.html;
                        done();
                    });
            });
        });
    }); // server logic
}); // end application logic


