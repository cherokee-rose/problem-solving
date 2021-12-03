/*
    github.com/cherokee-rose

    Make a program that can print out the text form of numbers from 1 to 9999 
    (ex. 20 is "twenty", 105 is "one hundred and five", 2655 is "two thousand six hundred fifty five). 
*/

const onesTxt = {
    '0': '',
    '1': 'one',
    '2': 'two',  
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
}

const specialTxt = {
    '0': 'ten',
    '1': 'eleven',
    '2': 'twelve',
    '3': 'thirteen',
    '4': 'fourteen',
    '5': 'fifteen',
    '6': 'sixteen',
    '7': 'seventeen',
    '8': 'eighteen',
    '9': 'nineteen',
}

const tenthsTxt = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety',
}


function printTextForm(number) {
    console.log('digit form= ' + number);

    let result = '';

    // Check for zero
    if (number == '0') {
        result = 'zero';

    } else {
        let position = 0;
        for (let i = 0; i < number.length; i++) {
            position = number.length - i - 1;

            // Skip the zero
            if (number.charAt(i) == '0') {
                continue;
            } 
            
            if (2 < position) { // Thousands
                result += onesTxt[number.charAt(i)] + ' thousand';
                
            } else if (1 < position) { // Hundreds
                result += onesTxt[number.charAt(i)] + ' hundred';
    
            } else if (0 < position) { // Tenths
                // Special case
                if (number.charAt(i) == '1') {
                    result += specialTxt[number.charAt(i + 1)];
                    break;
    
                } else {
                    result += tenthsTxt[number.charAt(i)];
                }
    
            } else { // Ones
                result +=  onesTxt[number.charAt(i)];
    
            }
    
            result += ' ';
        }
        
    }

    console.log('text form= ' + result);
}

printTextForm(Math.floor(Math.random() * 10000).toString());