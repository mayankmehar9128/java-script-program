// Immediatrly Invoked Function Expression (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);   // global scope pollution ko hatane ke liye IIFE ka use kiye
})();  // IIFE  // semicolumn is important

// do IIFE ek sath likhna h to semcolumn lagana hoga


( () => {
    console.log( `DB CONNECTED TWO`);
})();


( (name) => {
    // unnamed IIFE
    console.log( `DB CONNECTED TWO ${name}`);
} )('heroic')