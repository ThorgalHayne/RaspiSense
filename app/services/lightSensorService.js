'use strict';

function LightSensorService(lightSensor) {
    if(!lightSensor) {
        throw 'A light sensor has to be provided.';
    }
    this._lightSensor = lightSensor;
}

LightSensorService.prototype.readSensorValue = function (callback) {
    this._lightSensor.read(function (value) {
        var sensorValue = {
            typeLabel: 'Light',
            value: value,
            unit: 'Lux',
            sensorId: 1
        };

        callback(sensorValue);
    });
};

module.exports = LightSensorService;