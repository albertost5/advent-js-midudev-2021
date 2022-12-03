function decodeNumber(symbols) {
    const SYM = {
        '.': 1,
        ',': 5,
        ':': 10,
        ';': 50,
        '!': 100
    }
    const valuesSymbols = symbols.split('').map( symbol => SYM[symbol]);
    if( valuesSymbols.includes(undefined) ) return NaN;

    return valuesSymbols.reduce( (result, value, index, valuesSymbols) => 
        result + (value < valuesSymbols[ index + 1] ? -value : value)
    , 0);
}

// decodeNumber('...') // 3
// decodeNumber('.,') // 4 (5 - 1)
// decodeNumber(',.') // 6 (5 + 1)
// decodeNumber(',...') // 8 (5 + 3)
// decodeNumber('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
// decodeNumber('.;') // 49 (50 - 1)
// decodeNumber('..,') // 5 (-1 + 1 + 5)
// decodeNumber('..,!') // 95 (1 - 1 - 5 + 100)
// decodeNumber('.;!') // 49 (-1 -50 + 100)
// decodeNumber('!!!') // 300
// decodeNumber(';!') // 50
// decodeNumber(';.W') // NaN