'use strict';
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../server');
const { DISCUSSION } = require('../config/CONSTS.json');




describe(`Discussion Routes`, () => {

    it(`Test /create route`, (done) => {

        chai.request(app)
            .post(`${DISCUSSION}/create`)
            .send({
                "name": "Tony",
                "movie": "Iron Man",
                "topic": "Super Hero",
                "discussion": "i love the avengers",
                "rating": 9
            })
            .end((err, response) => {
                if (err) done(err);
                expect(err).to.be.null;
                expect(response).to.have.status(201);
                done();
            });
    });

    it(`Test /getAll route`, (done) => {
        chai.request(app)
            .get(`${DISCUSSION}/getAll`)
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(200);

                done();
            });
    });

    it(`Test /getName/:movie`, (done) => {
        chai.request(app)
            .get(`${DISCUSSION}/getName/happyfeet`)
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(200);
                done();
            })
    })

    it(`Test /updateById/:id`, (done) => {
        chai.request(app)
            .patch(`${DISCUSSION}/updateById/603e54de4dc74637041d5a1b`)
            .send({
                "name": "Fred"
            })
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(202);
                expect(response.body).to.not.be.null;
                done();
            })

    })

    it(`Test /delete/:id`, (done) => {
        chai.request(app)
            .delete(`${DISCUSSION}/delete/603e54de4dc74637041d5a1b`)
            .end((err, response) => {
                if (err) done(err);
                expect(response).to.have.status(204);
                done();
            })
    })

    // it(`test fails`, (done) => {
    //     chai.request(app)
    //         .delete(`${DISCUSSION}/delete/1`)
    //         .end((err, response) => {
    //             expect(response).to.have.status(404);
    //             done();
    //         })
    // })

    after(() => {
        app.close();
    });
});