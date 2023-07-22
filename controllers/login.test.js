/*
Написати unit-тести для контролера входу (логін)
  -  відповідь повина мати статус-код 200
  -  у відповіді повинен повертатися токен
  -  у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String

*/
const express = require("express");
const request = require("supertest");

const {login} = require("./users");

const app = express();

app.post("/users/login", login);

describe("test login controller", () => {
    let server;
    let response;

    beforeAll(() => {
        server = app.listen(3000);
    });

    afterAll(() => {
        server.close();
    });

    beforeEach(async () => {
        response = await request(app)
        .post("/users/login")
        .auth("email", "password");
        // .auth("andriy@gmail.com", "andriy");
        console.log(response.user)
    });

    test("response.status(200)", async () => {
        expect(response.status).toBe(200);
    })

    test("get token", async () => {            
        const {token} = response.body;
        expect(token).toBeTruthy();
    })

    test("user object with two fields of string data type", async () => {
        const {user} = response.body;
        expect(typeof user.email).toBe("string");
        expect(typeof user.subscription).toBe("string");
    })
})
