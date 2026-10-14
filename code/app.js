"use strict";
//  a =  14
function over(val, num) {
    if (typeof val == "string" && num == undefined) {
        console.log("first one running ===>");
    }
    if (typeof val == "string" && typeof num == "number") {
        console.log("first one running ===>");
    }
}
over("adnan", 11);
