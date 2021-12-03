function decimalToFlPoint(decimal) {
    let result = '';
    decimal = Number(decimal);

    // Special cases
    if (decimal == 0) {
        result = '0 00000000 00000000000000000000000'
    } else if (decimal == NaN) {
        result = '0 11111111 00001000000000100001000';
    } else {
        // Workout the sign bit
        let signBit;
        let wholeDecimal;

        if (decimal < 0) {
            signBit = '1';
            wholeDecimal = ~decimal + 1;
            decimal *= -1;
        } else {
            signBit = '0';
            wholeDecimal = -~decimal - 1;
        }

        let wholeBinary = '';
        
        let fractionDecimal = decimal - wholeDecimal;
        let fractionBinary = '';
        
        // Workout the whole part
        while (Math.floor(wholeDecimal) != 0) {
            wholeBinary = (wholeDecimal % 2).toString() + wholeBinary;
            wholeDecimal = Math.floor(wholeDecimal / 2);
        }
        wholeBinary = wholeBinary == '' ? '0' : wholeBinary;
        
        // Workout the fraction part
        while (fractionBinary.length < 23 && fractionDecimal != 0) {
            fractionDecimal *= 2;
            
            if (fractionDecimal >= 1) {
                fractionBinary += '1';
                fractionDecimal -= 1;
            } else {
                fractionBinary += '0';
            }
        }
    
        let mantissa = wholeBinary + fractionBinary
        mantissa = mantissa.length > 23 ? mantissa.slice(0, 24) : mantissa;

        let exponentDecimal = wholeBinary.length - mantissa.indexOf('1') - 1;
        
        mantissa = mantissa.slice(mantissa.indexOf('1') + 1);
        exponentDecimal += 127;
        
        let exponent = '';
        
        // Workout the exponent
        while (Math.floor(exponentDecimal) != 0) {
            exponent = (exponentDecimal % 2).toString() + exponent;
            exponentDecimal = Math.floor(exponentDecimal / 2);
        }
    
        // Adjust the exponent
        exponent = '0'.repeat(8 - exponent.length) + exponent;
    
        // Adjust the mantissa
        while (mantissa.length < 23) {
            fractionDecimal *= 2;
            
            if (fractionDecimal >= 1) {
                fractionDecimal -= 1;
                mantissa += '1';
            } else {
                mantissa += '0';
            }
        }
        
        result = signBit + exponent + mantissa;
    }


    return result;
}


function flPointToDecimal(binary) {
    binary = binary.replace(/\s+/, '');

    sign = binary.slice(0, 1).trim();
    exponentBinary = binary.slice(1, 9).trim();
    mantissaBinary = binary.slice(9).trim();
    
    console.log('sign= ' + sign);
    console.log('exponent= ' + exponentBinary);
    console.log('mantissa= ' + mantissaBinary);

    // Workout the exponent
    let exponentDecimal = 0;
    for (let i = 0; i < 8; i++) {
        exponentDecimal += (exponentBinary[i] * 2 ** (7 - i));
    }
    exponentDecimal -= 127;

    // Workout the parts from the mantissa
    let mantissa = '1' + mantissaBinary;
    
    let wholeBinary = exponentDecimal < 0 ? '0' : mantissa.slice(0, exponentDecimal + 1);
    let fractionBinary = exponentDecimal < 0 ? ('0'.repeat(~exponentDecimal) + mantissa).slice(0, 24) : 
                                                                    mantissa.slice(exponentDecimal + 1);
    
    // Workout the whole part
    let wholeDecimal = 0;
    for (let i = wholeBinary.length; i > 0; i--) {
        wholeDecimal += (wholeBinary[wholeBinary.length - i] * 2 ** (i - 1));
    }

    // Workout the fractional part
    let fractionDecimal = 0.0;
    for (let i = 1; i <= fractionBinary.length; i++) {
        fractionDecimal += (fractionBinary[i - 1] * 2 ** (~i + 1));
    }

    let result = wholeDecimal + Number(fractionDecimal.toFixed(3));

    return sign == '1' ? result * -1 : result;
}
