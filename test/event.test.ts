import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import {server} from '../src/index';

const app = server.restify;

chai.use(chaiHttp);
const expect = chai.expect;

const eventData = {
    'name': 'Test Event 12345',
    'start': '12.02.1991',
    'end': '1-1-1970'
};

const editEventData = {'name': 'Test Update Name'};

const registrationData = {
    firstName: 'Max',
    lastName: 'Mustermann',
    seats: 4
};

const editRegistrationData = {
    firstName: 'Rename to Test'
};

let eventId = 0;
let registrationId = 0;

describe('createEventData', () => {
    it('insert new event', (done) => {
        chai.request(app).post('/event')
            .send(eventData)
            .then(res => {
                expect(res.type).to.eql('application/json');
                //set global id for more actions
                eventId = res.body.id;
                done();
            }).catch(function (err) {
            throw err;
        });
    });
});

describe('getEventData', () => {
    it('check event id data', (done) => {
        chai.request(app).get('/event/' + eventId)
            .then(res => {
                expect(res.type).to.eql('application/json');
                expect(res.body.name).to.eql(eventData.name);
                done();
            });
    });
});

describe('editEventData', () => {
    it('update event data by id', (done) => {
        chai.request(app)
            .put('/event/' + eventId)
            .send(editEventData)
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                expect(res.body.name).to.eql(editEventData.name);
                done();
            });
    });
});

//registration
describe('addRegistration', () => {
    it('add registration to event by event id', (done) => {
        chai.request(app)
            .post('/event/' + eventId + '/registration')
            .send(registrationData)
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                expect(res.body.firstName).to.eql(registrationData.firstName);
                registrationId = res.body.id;
                done();
            });
    });
});


describe('getRegistrations', () => {
    it('get all registrations', (done) => {
        chai.request(app)
            .get('/event/' + eventId + '/registrations')
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                expect(res.body.length).to.gt(0);
                done();
            });
    });
});

describe('getRegistration', () => {
    it('get registration by id', (done) => {
        chai.request(app)
            .get('/event/' + eventId + '/registration/' + registrationId)
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                expect(res.body.firstName).to.eql(registrationData.firstName);
                done();
            });
    });
});

describe('updateRegistration', () => {
    it('update registration by id', (done) => {
        chai.request(app)
            .put('/event/' + eventId + '/registration/' + registrationId)
            .send(editRegistrationData)
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.type).to.eql('application/json');
                expect(res.body.firstName).to.eql(editRegistrationData.firstName);
                done();
            });
    });
});


describe('deleteRegistrationData', () => {
    it('delete registration data by id', (done) => {
        chai.request(app)
            .del('/event/' + eventId + '/registration/' + registrationId)
            .then(res => {
                expect(res).to.have.status(200);
                done();
            });
    });
});


describe('deleteEventData', () => {
    it('delete event data by id', (done) => {
        chai.request(app)
            .del('/event/' + eventId)
            .then(res => {
                expect(res).to.have.status(200);
                done();
            });
    });
});