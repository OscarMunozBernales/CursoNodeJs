const axios = require('axios');


const argv = require('yargs').options({
			direccion: {
				alias: 'd',
				desc: 'Direccion de la ciudad para optener el clima',
				demand: true,
			}
		}).argv;

console.log(argv.direccion);

//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAJs40i7uHAXaG2Upq0Mg5fgP_G5ND2Vuw
//


axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBc9V4-94snMmEtW8tlHIWSPLjYArWOFfU`)
.then( resp => {
	console.log( resp );
})
.catch(e => console.log( 'ERROR!!!', e ));