var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var typeLabels = ['Temperatur', 'Humidity', 'Light', 'Pressure'];
var measurementEntrySchema = new Schema({
	typeLabel: { type: String, required: true, enum: typeLabels },
	value: { type: Number, required: true },
	unit: { type: String, required: true },
	sensorId: { type: Number, required: true } 
});

var measurementSchema = new Schema({
	takenOn: { type: Date, default: Date.now },
	measurementEntries: [ measurementEntrySchema ]
});
module.exports = mongoose.model('Measurement', measurementSchema);