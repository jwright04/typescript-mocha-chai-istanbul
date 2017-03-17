import {getLength} from '../index';

describe('get length method test', () => {

    it('"abc" should have length 3', () => {
        getLength('abc').should.equal(3);
    });

    it('"" should have length 0', () => {
        getLength('').should.equal(0);
    });
});