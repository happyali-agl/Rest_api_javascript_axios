const expect = require("chai").expect;
const envData = require('../resource/datafile/endPoints.json');
const location = require('../resource/datafile/location.json');
const {via_postcode} = require("../apiModules/qantasApp/via_postcode");
const {via_location} = require("../apiModules/qantasApp/via_location");


describe('Get Reports', function() {
this.timeout(30000);
    describe('Current Weather via Location', function() {
			it('Valid Latitude and Longitude', async function() {
				// reqData = envData.BaseURL1+envData.endPoints.location; //.replace(('lat',19),('lon',76));
				reqData = envData.BaseURL+envData.endPoints.version+"?"+"lat="+location.validLocation.lat+"&"+"lon="+location.validLocation.lon+"&"+"key="+envData.endPoints.key;
				currentResponse = await via_location(reqData);
				expect(currentResponse.status).to.equal(200);          
				currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
				expect(currentResponseBody).to.be.an('object');          
			});
			it('Request with Invalid Key', async function() {
				// reqData = envData.BaseURL1+envData.endPoints.location; //.replace(('lat',19),('lon',76));
				reqData = envData.BaseURL+envData.endPoints.version+"?"+"lat="+location.validLocation.lat+"&"+"lon="+location.validLocation.lon+"&"+"key=1c6429030ff94588948e063787f7ed66";
				currentResponse = await via_location(reqData);
				expect(currentResponse.status).to.equal(403);          
				currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
				expect(currentResponseBody).to.be.an('object');          
		});
    });

		describe('Current Weather via postcode', function() {
			it('Valid Postcode', async function() {
					// reqData = envData.BaseURL1+envData.endPoints.postcode;
					reqData = envData.BaseURL+envData.endPoints.version+"?"+"postal_code="+location.validLocation.postcode+"&"+"key="+envData.endPoints.key;
					currentResponse = await via_postcode(reqData);
					expect(currentResponse.status).to.equal(200);          
					currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
					expect(currentResponseBody).to.be.an('object');          
			});
	});
});