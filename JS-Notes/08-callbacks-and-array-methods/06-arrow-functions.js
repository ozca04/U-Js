/* ============================================================
   ARROW FUNCTIONS - all the formats
   Regular expression -> full arrow -> no param parens
   -> implicit return (parens) -> one-line implicit return. All do the same thing.
   ============================================================ */

const isEven =  function(num){// regular function expression 
    return num % 2 === 0;
}

const isEven = (num) => {
    return num % 2 === 0;
}

const isEven = num => {
    return num % 2 === 0;
}

const isEven = num => (
    num % 2 === 0
);

const isEven = num => num % 2 === 0; // one expression only 

//they are all same in different format