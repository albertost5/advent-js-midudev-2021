function contarOvejas(ovejas) {
    return ovejas.filter( ({name, color }) => color === 'rojo' && (name.toLowerCase().includes('n') && name.toLowerCase().includes('a')) );
}


const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

console.log( contarOvejas(ovejas) );