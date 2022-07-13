var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'opencage',

  // Optionnal depending of the providers
  httpAdapter: 'https', // Default
  apiKey: '3037894b60ac40b6bed99302275830dc', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);
geocoder.geocode('29 champs elysée paris', function(err, res) {
    console.log(res);
  });