const expect = require("chai").expect;
const { report } = require('../support');
const envData = require('../resource/datafile/endPoints.json');
const location = require('../resource/datafile/location.json');
const {via_postcode} = require("../apiModules/qantasApp/via_postcode");
const {via_location} = require("../apiModules/qantasApp/via_location");


describe('Get Reports', function() {
this.timeout(30000);
	describe('Current Weather via Location', function() {
		describe('Current Weather via Location', function() {
			it('Details for city Heathsville', async function() {
				// reqData = envData.BaseURL1+envData.endPoints.location; //.replace(('lat',19),('lon',76));
				reqData = envData.BaseURL+envData.endPoints.version+"?"+"lat="+location.Heathsville.lat+"&"+"lon="+location.Heathsville.lon+"&"+"key="+envData.endPoints.key;
				currentResponse = await via_location(reqData);
				expect(currentResponse.status).to.equal(200);          
				currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
				expect(currentResponseBody).to.be.an('object');
				report(this, 'City Name', currentResponseBody.data[0].city_name); 
				expect(currentResponseBody.data[0].city_name).to.equal(location.Heathsville.city_name);
				report(this, 'Actual Response Data', currentResponseBody);          
			});
			it('Details for city Noma', async function() {
				// reqData = envData.BaseURL1+envData.endPoints.location; //.replace(('lat',19),('lon',76));
				reqData = envData.BaseURL+envData.endPoints.version+"?"+"lat="+location.Noma.lat+"&"+"lon="+location.Heathsville.lon+"&"+"key="+envData.endPoints.key;
				currentResponse = await via_location(reqData);
				expect(currentResponse.status).to.equal(200);          
				currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
				expect(currentResponseBody).to.be.an('object');   
				expect(currentResponseBody.data[0].city_name).to.equal(location.Noma.city_name);
				report(this, 'Actual Response Data', currentResponseBody);        
			});
			it('Request with Invalid Key', async function() {
				// reqData = envData.BaseURL1+envData.endPoints.location; //.replace(('lat',19),('lon',76));
				reqData = envData.BaseURL+envData.endPoints.version+"?"+"lat="+location.Heathsville.lat+"&"+"lon="+location.Heathsville.lon+"&"+"key=1c6429030ff94588948e063787f7ed66";
				currentResponse = await via_location(reqData);
				expect(currentResponse.status).to.equal(403);          
				currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
				expect(currentResponseBody).to.be.an('object');
				report(this, 'Error ', currentResponseBody.error);
				expect(currentResponseBody.data[0].city_name).to.equal(location.Heathsville.errorMsg); 
				report(this, 'Actual Response Data', currentResponseBody);              
			});
		});

		describe('Current Weather via postcode', function() {
			it('Postcode for New Delhi', async function() {
					// reqData = envData.BaseURL1+envData.endPoints.postcode;
					reqData = envData.BaseURL+envData.endPoints.version+"?"+"postal_code="+location.NewDelhi.postcode+"&"+"key="+envData.endPoints.key;
					currentResponse = await via_postcode(reqData);
					expect(currentResponse.status).to.equal(200);          
					currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
					expect(currentResponseBody).to.be.an('object');    
					report(this, 'Actual Response Data', currentResponseBody);          
			});
			it('Postcode for Zamora', async function() {
				// reqData = envData.BaseURL1+envData.endPoints.postcode;
				reqData = envData.BaseURL+envData.endPoints.version+"?"+"postal_code="+location.Zamora.postcode+"&"+"key="+envData.endPoints.key;
				currentResponse = await via_postcode(reqData);
				expect(currentResponse.status).to.equal(200);          
				currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
				expect(currentResponseBody).to.be.an('object');    
				report(this, 'Actual Response Data', currentResponseBody);
			});
			it('Invalid PostCode', async function() {
				// reqData = envData.BaseURL1+envData.endPoints.postcode;
				reqData = envData.BaseURL+envData.endPoints.version+"?"+"postal_code="+"&"+"key="+envData.endPoints.key;
				currentResponse = await via_postcode(reqData);
				expect(currentResponse.status).to.equal(400);          
				currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));    
				expect(currentResponseBody).to.be.an('object');    
				report(this, 'Actual Response Data', currentResponseBody);
			});
		});
	});
});