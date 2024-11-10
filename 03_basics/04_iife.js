// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//globel scope ke pollution  mean se problem se beacause use iffe immediatly use iffe for call fuction 
//use semicolon for stop iffe function in js

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

