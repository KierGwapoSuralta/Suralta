function convert() {
    const select = document.getElementById('conversion-select');
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const resultElement = document.getElementById('result');
    let result = '';

    switch (parseInt(select.value)) {
        case 1:
            result = `${inputValue} km = ${inputValue * 1000} meters`;
            break;
        case 2:
            result = `${inputValue} meters = ${inputValue * 100} centimeters`;
            break;
        case 3:
            result = `${inputValue} square meters = ${inputValue * 10.764} square feet`;
            break;
        case 4:
            result = `${inputValue} liters = ${inputValue * 1000} milliliters`;
            break;
        case 5:
            result = `${inputValue} kilograms = ${inputValue * 1000} grams`;
            break;
        case 6:
            result = `${inputValue} kg/m³ = ${inputValue * 0.001} g/cm³`;
            break;
        case 7:
            result = `${inputValue} liters/second = ${inputValue * 3.6} cubic meters/hour`;
            break;
        case 8:
            result = `${inputValue} cubic meters/hour = ${inputValue * 0.5885778} cubic feet/minute`;
            break;
        case 9:
            result = `${inputValue} kg/hour = ${inputValue * 0.00027778} kg/second`;
            break;
        case 10:
            result = `${inputValue} bar = ${inputValue * 100} kPa`;
            break;
        case 11:
            result = `${inputValue} mmHg = ${inputValue * 133.322} Pa`;
            break;
        case 12:
            result = `${inputValue} meters/second = ${inputValue * 3.6} kilometers/hour`;
            break;
        case 13:
            result = `${inputValue} Newton-meter = ${inputValue * 0.7375621} foot-pounds`;
            break;
        case 14:
            result = `${inputValue} Pascal-second = ${inputValue * 10} Poise`;
            break;
        case 15:
            result = `${inputValue} Stokes = ${inputValue * 100} centistokes`;
            break;
        case 16:
            result = `${inputValue} Celsius = ${(inputValue * 9/5) + 32} Fahrenheit`;
            break;
        default:
            result = 'Invalid selection. Please try again.';
            break;
    }

    resultElement.textContent = result;
}
