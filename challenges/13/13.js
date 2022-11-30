function wrapGifts(gifts) {
    const wrappedArray = [];
    if ( gifts.length == 0 ) return wrappedArray;
    wrappedArray.push('*'.repeat(gifts[0].length + 2));
    gifts.forEach( gift => {
      wrappedArray.push('*'+gift+'*');
    });
    wrappedArray.push('*'.repeat(gifts[0].length + 2));
  
    return wrappedArray;
  }

// console.log( wrapGifts(["📷"]) )
// console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
// console.log(wrapGifts(["🏈🎸"]));
// console.log(wrapGifts(["🏈🎸", "📷"]));