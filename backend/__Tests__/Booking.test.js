'use strict';
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server');
const { BOOKING } = require('../config/CONSTS.json');
const { response } = require('express');
const { Booking } = require('../config/db');


describe(`Delete`, (done) => {
    afterEach(() => {
        Booking.deleteMany({}, (err, response) => {
            done();
        })
    })
})


describe(`Booking routes`, () => {

    it(`Test create booking route`, (done) => {
        chai.request(app)
            .post(`${BOOKING}/create`)
            .send({
                'moviename': 'jumanji',
                'date': '10/10/2020',
                'time': '10.50',
                'bookername': 'sally',
                'adultseats': '2',
                'childseats': '6'

            })
            .end((err, response) => {
                if (err) done(err);
                expect(err).to.be.null;
                expect(response).to.have.status(201);
                done();
            });

    });

    it(`Test failure of booking create`, (done) => {
        chai.request(app)
            .post(`${BOOKING}/create`)
            .send({
                'movienam': 'jumanji',
                'date': '10/10/2020',
                'time': '10.50',
                'bookername': 'sally',
                'adultseats': '2',
                'childseats': '6'

            })
            .end((err, response) => {
                if (err) done(err);

                expect(response).not.to.be.null;
                expect(response).to.have.status(500);

                done();
            });

    });



    it(`Test read method`, (done) => {
        chai.request(app)
            .get(`${BOOKING}/read`)
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                done();
            })
    })

    it(`Test read by the id `, (done) => {
        chai.request(app)
            .get(`${BOOKING}/read/603ce47fb4acdc09bcccbb2d`)
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(200);
                done();

            })

    })


    after(() => {
        app.close();
    });
});