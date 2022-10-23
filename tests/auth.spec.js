import {expect} from "chai";
import postAuth from './authService';

let auth;
let validData = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
};
let invalidData = {
    email: 'invalidCredentials',
    password: 'invalidPassword'
};

describe('auth', function () {

    describe('success auth', function () {

        before(async () => {
            auth = await postAuth.authRequest(validData);
        });

        it('success log in', function () {
            expect(auth.status).to.equal(200);
            expect(auth.statusText).to.equal('OK');
        });
    });

    describe('fail auth', function () {

        before(async () => {
            auth = await postAuth.authRequest(invalidData);
            await console.log(`Auth    ${auth.statusText}`)
        });

        it('fail log in', function () {
            expect(auth.message).to.equal('Request failed with status code 401');
        });
    });
})
