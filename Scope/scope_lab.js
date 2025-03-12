// Global scope
var globalVar = "I'm a Global variable";
let globalLet = "I'm also Global, but scope with let";
const globalConst = "I'm a global constant";


{
    // Block scope
    var blockVar = "I'm a block-scope var";
    let blockLet = "I'm a block-scope let";
    const blockConst = "I'm a block-scope const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
//console.log(blockVar);
//console.log(blockLet);