import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import {server} from '../src/index';

// create test server
// import {Server} from '../src/server/index';
// const server = new Server();
// server.start(+process.env.PORT || 8081);
const app = server.restify;

chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {

    it('should be json', () => {
        return chai.request(app).get('/')
            .then(res => {
                expect(res.type).to.eql('application/json');
            });
    });

    it('should have a message prop', () => {
        return chai.request(app).get('/')
            .then(res => {
                expect(res.body.message).to.eql('Hello World!');
            });
    });

});