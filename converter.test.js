const converter = require("./converter");

describe("Temperature converter", () => {
    test("Convert 32˚ Celsuis to Fahrenheit", () => {
        expect(converter.celsuisToFahrenheit(32)).toBe("89.6000");
    });
    test("Convert 50˚ Celsuis to Kelvin", () => {
        expect(converter.celsuisToKelvin(50)).toBe("323.1500");
    });

    test("Convert 100˚ Fahrenheit to Celsuis", () => {
        expect(converter.fahrenheitToCelsuis(100)).toBe("37.7778");
    });
    test("Convert 0˚ Fahrenheit to Kelvin", () => {
        expect(converter.fahrenheitToKelvin(0)).toBe("255.3722");
    });

    test("Convert 273.15 Kelvin to Celsuis", () => {
        expect(converter.kelvinToCelsuis(273.15)).toBe("0.0000");
    });
    test("Convert 0 Kelvin to Fahrenheit", () => {
        expect(converter.kelvinToFahrenheit(0)).toBe("-459.6700");
    });
});