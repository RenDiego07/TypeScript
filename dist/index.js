"use strict";
console.log("diego");
let msg = "dd";
msg = "jeje";
let dpe = "diego";
console.log(typeof String);
function sayhi(msg) {
    console.log(msg);
}
var Time;
(function (Time) {
    Time["Evening"] = "e";
})(Time || (Time = {}));
const x = Time.Evening;
let Diego = {
    name: 'Diego',
    id: 10,
    preferenced: true
};
if (Diego.preferenced) {
    console.log("Funciona");
}
function getName(cl) {
    return cl.name;
}
let age = Square(Diego.id);
console.log(age);
function Square(n) {
    if (typeof n === 'string') {
        throw new Error("Entrada no valida");
    }
    else {
        return n * n;
    }
}
//# sourceMappingURL=index.js.map