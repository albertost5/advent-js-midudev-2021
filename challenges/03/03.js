// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌



function isValid(letter) {
  let isValid = true;
  const letterArr = letter.trim().split(' ');
  const specialCharsCondition = '(' || ')' || '{' || '}' || '[' || ']';
  const regex = new RegExp(/^[a-z]+$/i);

  letterArr.forEach( item => {

    if( item.startsWith('(') ) {
      if( !item.endsWith(')') ) isValid = false;
      const subItem = item.substring(1, item.length - 1);
      if( subItem.length === 0 || subItem.includes(specialCharsCondition) ) isValid = false;
    } else if( !regex.test(item ) ) {
      isValid = false;
    }
  })

  return isValid;
}

// const letter = "bici coche (balón) bici coche peluche";
// const letter = "(muñeca) consola bici"
// const letter = "bici coche (balón bici coche"
// const letter = "peluche (bici [coche) bici coche balón"
// const letter = "(peluche {) bici"
// const letter = "() bici"
// const letter = "(()) bici"
// const letter = "bici (balón bici coche"
// const letter = "(a() bici (a)"
// const letter =  ")bici( casa play"
const letter = "(muñeca) consola bici"

console.log( isValid(letter) );