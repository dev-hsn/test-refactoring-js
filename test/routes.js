const expect  = require('chai').expect;
var request = require('request');

it('Main page content', function() {
    request('http://localhost:3001' , function(error, response, body) {
        console.log(body);
        expect(body).to.equal('Hello World');
    });
});
