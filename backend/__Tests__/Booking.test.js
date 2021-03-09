'use strict';
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server');
const { BOOKING } = require('../config/CONSTS.json');
const { Booking } = require('../config/db');
const { response } = require('express');


describe(`Booking routes`, () => {



    it(`Test create booking route`, (done) => {
        chai.request(app)
            .post(`${BOOKING}/create`)
            .send({
                moviename: "jumanji",
                date: "10/10/2020",
                time: "10.50",
                bookername: "sally",
                adultseats: "2",
                childseats: "6",
                deluxe: true,
                totalCost: '10'

            })
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(201);
                done();
            });

    });

    it(`Test failure of booking create to get a 404`, (done) => {
        chai.request(app)
            .post(`${BOOKING}/creat`)
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
                expect(response).to.have.status(404);

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
            .get(`${BOOKING}/readOne/603ce47fb4acdc09bcccbb2d`)
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(200);
                done();

            })

    })

    it(`Test update by ID`, (done) => {
        chai.request(app)
            .patch(`${BOOKING}/updateOne/603cf45e69fcfa243083da0f`)
            .send({
                "moviename": "goldy"
            })
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(202);
                done();
            })
    })

    it(`Testing replacing whole booking`, (done) => {
        chai.request(app)
            .put(`${BOOKING}/update/603cf45e69fcfa243083da0f`)
            .send({
                moviename: "happy man",
                date: "11/10/2020",
                time: "15.50",
                bookername: "sally",
                adultseats: "5",
                childseats: "2"

            })
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(202);
                done();
            })
    })

    it(`Test the delete fucntion`, (done) => {
        chai.request(app)
            .delete(`${BOOKING}/delete/603cf45e69fcfa243083da0f`)
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(204);
                done();
            })
    })

    //!14
    it(`Test failure of booking create to get a 500`, (done) => {
        chai.request(app)
            .post(`${BOOKING}/create`)
            .send({
                movienam: 'jumanji',
                date: '10/10/2020',
                time: '10.50',
                bookername: 'sally',
                adultseats: '2',
                childseats: '6'

            })
            .end((err, response) => {
                if (err) done(err);

                expect(response).not.to.be.null;
                expect(response).to.have.status(500);

                done();
            });

    });




    // //!46
    // it(`Test update by ID failure`, (done) => {
    //     chai.request(app)
    //         .patch(`${BOOKING}/updateOne/1`)
    //         .send({
    //             movienam: 1
    //         })
    //         .end((err, response) => {
    //             if (err) return done(err);
    //             expect(response).to.have.status(500);
    //             done();
    //         })
    // })
    //!67

    // it(`test the replace method fail`, (done) => {
    //     chai.request(app)
    //         .put(`${BOOKING}/update/603cf45e69fcfa243083da0`)
    //         .send({
    //             'moviename': "pingu",
    //             'date': "30/09/2022",
    //             'time': "11.00 ",
    //             'bookername': "sally red",
    //             'adultseats': "3",
    //             'childseats': "5"
    //         })
    //         .end((err, response) => {
    //             if (err) done(err);
    //             expect(response).to.have.status(500);
    //             done();
    //         })
    // })
    //!78
    it(`Test the delete fucntion`, (done) => {
        chai.request(app)
            .delete(`${BOOKING}/delet/603cf45e69fcfa243083da0f`)
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(404);
                done();
            })
    })






    after(() => {
        // Booking.deleteMany({}, (err) => console.log(err));
        app.close();
    });
});