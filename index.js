
// const chai = require("chai");
// const spies = require("chai-spies");
// chai.use(spies);


function receivesAFunction (callback){

console.log(callback())

}

receivesAFunction(callback)







// function returnsANamedFunction(){

//     var fn;
//     fn = function returnsANamedFunction() {
//         console.log("I am learning javaScript and I love it no matter it weirdness")
//     }
     
//     return fn
// }



function returnsANamedFunction(){

    return function aNamedFunction(){}
}




function returnsAnAnonymousFunction(){

    return function(){}
      
 }
 


