import {fname} from "./export.js"

console.log(fname);

//--------------------------------------------------------

import { lname as lastname} from "./export.js";
console.log(lastname);

import { hello } from "./export.js";
hello();

//----------------------------------------------------------

import { email, mobile } from "./export.js";

console.log(email);
console.log(mobile);

//----------------------------------------------------------

import {default as yahoo} from "./export.js";
import {age, gender} from "./export.js"
yahoo();
console.log(age);
console.log(gender);

//----------------------------------------------------------

import * as star from "./export.js";

console.log(star.email, star.mobile);
