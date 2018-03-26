import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import {server} from '../src/index';

const app = server.restify;

chai.use(chaiHttp);
const expect = chai.expect;

const createData = {
    'name': 'Test Event 12345',
    'start': '12.02.1991',
    'end': '1-1-1970'
};

const editData = {'name' : 'Test Update Name'};

let id = 0;

describe('createEventData', () => {
    it('insert new event', (done) => {
        chai.request(app).post('/event')
            .send(createData)
            .then(res => {
                expect(res.type).to.eql('application/json');
                //set global id for more actions
                id = res.body.id;
                done();
            }).catch(function (err) {
            throw err;
        });
    });
});

describe('getEventData', () => {
    it('check event id data', (done) => {
        chai.request(app).get('/event/' + id)
            .then(res => {
                expect(res.body.name).to.eql(createData.name);
                done();
            });
    });
});

describe('editEventData', () => {
    it('update event data by id', (done) => {
        chai.request(app)
            .put('/event/' + id)
            .send(editData)
            .then(res => {
                expect(res.body.name).to.eql(editData.name);
                done();
            });
    });
});

describe('deleteEventData', () => {
    it('delete event data by id', (done) => {
        chai.request(app)
            .del('/event/' + id)
            .then(res => {
                expect(res).to.have.status(200);
                done();
            });
    });
});