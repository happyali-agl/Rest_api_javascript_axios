
const expect = require("chai").expect;
const envData = require('../resource/datafile/endPoints.json');
const testingData = require('../resource/datafile/testData.json');
const {via_postcode} = require("../apiModules/qantasApp/via_postcode");
const {via_location} = require("../apiModules/qantasApp/via_location");


describe('Get Reports', function() {
this.timeout(30000);
    describe('Current Weather via Location', function() {
			it('Verify API is responsive', async function() {
					testData = envData.BaseURL+envData.endPoints.location; //.replace(('lat',19),('lon',76));
					currentResponse = await via_location(testData);
					expect(currentResponse.status).to.equal(200);          
					currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
					expect(currentResponseBody).to.be.an('object');          
			});
    });

		describe('Current Weather via postcode', function() {
			it('Verify API is responsive', async function() {
					testData = envData.BaseURL+envData.endPoints.postcode;
					currentResponse = await via_postcode(testData);
					expect(currentResponse.status).to.equal(200);          
					currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
					expect(currentResponseBody).to.be.an('object');          
			});
	});
});