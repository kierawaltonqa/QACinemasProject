'use strict';
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server');
const { COMMENT } = require('../config/CONSTS.json');




describe.only(`Comment Routes`, () => {


    it(`Test the create Comment route`, (done) => {
        chai.request(app)
            .post(`${COMMENT}/create`)
            .send({
                name: 'freddy',
                comment: 'i was really good in this film! '

            })
            .end((err, response) => {
                if (err) return done(err);
                expect(err).to.be.null;
                expect(response).to.have.status(201);
                done();
            });
    });

    it(`Test the read all method`, (done) => {
        chai.request(app)
            .get(`${COMMENT}/getAll`)
            .end((err, response) => {
                if (err) return done(err);
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                done();
            });

    });

    it(`Test the get by id method`, (done) => {
        chai.request(app)
            .get
        //!this is where i finished for the day
    })
});