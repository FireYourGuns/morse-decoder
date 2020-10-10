const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var Mas = expr.split("");
    var New_array = [];
    var x = Mas.length/10;
    var Code = '';
    var Frase = '';
    for (var i = 1; i <= x; i++) {
        New_array.push(Mas.splice(0,10).join(""));
    }

    for (i = 0; i < New_array.length; i++) {
      var Z = New_array[i].split('');
      if (New_array[i].split('') === '**********') {Frase += ' '}
      Code = '';
      for (var j=1; j<6; j++) {
        var Twix = Z.splice(0,2).join('');
        if (Twix == 10) {
          Code += ".";
        }
        if (Twix == 11) {
          Code += "-";
        }
      }
      Frase += MORSE_TABLE[Code];
    }

    return Frase;
}

module.exports = {
    decode
}