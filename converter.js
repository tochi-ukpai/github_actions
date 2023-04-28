class Converter {
    fahrenheitToCelsuis(temperature) {
        return ((temperature - 32) *  5/9).toFixed(4);
    }

    fahrenheitToKelvin(temperature) {
        return ((temperature - 32) *  5/9 + 273.15).toFixed(4);
    }

    celsuisToFahrenheit(temperature) {
        return ((temperature * 9/5) + 32).toFixed(4);
    }

    celsuisToKelvin(temperature) {
        return (temperature + 273.15).toFixed(4);
    }

    kelvinToCelsuis(temperature) {
        return (temperature - 273.15).toFixed(4);
    }

    kelvinToFahrenheit(temperature) {
        return ((temperature - 273.15) * 9/5 + 32).toFixed(4);
    }
}

module.exports = new Converter();