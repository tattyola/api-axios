import { expect } from "chai";
import postAuth from './authService';
// import { config } from "dotenv";
// config();

let auth;
let data = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
};

describe('auth', function ()  {

    before(async () => {
        auth = await postAuth.authRequest(data);
        await console.log(`Auth    ${auth}`)
    })

    it('success log in', function () {
        expect(auth.status).to.equal(200);
        expect(auth.statusText).to.equal('OK');
    })
})
