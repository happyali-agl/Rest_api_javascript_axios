const {Request} = require ('../../common/baseRequest.js');

const via_location = reqData =>
    new Promise( (resolve, reject) => {

        var options = {
            method: 'get',
            url: reqData,
            resolveWithFullResponse: true           
        };

        Request(options)
        .then(function (response) {
            resolve(response);
        })
        .catch(function (err) {
            reject(err);
            console.log("Error Inside Get_healthCheck module: "+err);
        });
    });

module.exports = {via_location};