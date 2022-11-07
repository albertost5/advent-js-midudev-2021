function listGifts(letter) {
    
    const letterArrayFiltered = letter.trim().split(' ').filter(item => !item.startsWith('_'));

    return letterArrayFiltered.reduce( (list, gift) => {
        if( !list[gift] ) list[gift] = 0;
        list[gift]++;
        return list
    }, {}); 
}

const carta = 'bici coche balón _playstation bici coche peluche';
const regalos = listGifts(carta);

console.log(regalos)

/*
{
bici: 2,
coche: 2,
balón: 1,
peluche: 1
}
*/