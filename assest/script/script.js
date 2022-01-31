/*Initial Step*/
let operation = document.getElementById('operation');

<<<<<<< HEAD

//-------------------------------------------Formate Of Digit Start-------------------------------------

/*Formate of Number or Digits : This step is for formate the input and put semi-colon between digits*/
=======
/**
 * 
 * @param {*} input 
 * @returns 
 */
function getCurrentValue() {
    let  currentValue = operation.innerText.replace(/,/g, "");;
    return currentValue;
}

//-------------------------------------------Formate Of Digit Start-------------------------------------
/**
* @function numberFormate
* @description This step is for formate the input and put semi-colon between digits
* @param input
* @returns
*/
>>>>>>> Version-1
function numberFormate(input) {
    return input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
//-------------------------------------------Formate Of Digit End---------------------------------------

//-------------------------------------------All Normal Function Start----------------------------------

/**
<<<<<<< HEAD
 *  Operation : This function get the number when we click on button.
 */
function addNum(e) {
    let char = e.getAttribute("data-value");
    let currentValue = operation.innerText.replace(/,/g, "");
=======
 * @function addNum
 * @description This function get the number when we click on button.
 * @param {*} e 
 */
function addNum(e) {
    let char = e.getAttribute("data-value");
    let currentValue = getCurrentValue();
>>>>>>> Version-1
    currentValue += char;
    operation.innerHTML = numberFormate(currentValue);
}
//-------------------------------------------All Normal Function End----------------------------------


//-------------------------------------------Clear Value Start------------------------------------------
<<<<<<< HEAD

/**
 * Clear Value : By Using This We can Clear All the Data
=======
/**
 * @function clearData
 * @description By Using This We can Clear All the Data
>>>>>>> Version-1
 */
function clearData() {
    operation.innerText = "";
}
//-------------------------------------------Clear Value End--------------------------------------------


//-------------------------------------------Equal Start------------------------------------------------
<<<<<<< HEAD

/**
 * Equal : By using below function we will get the final result of the operation.
 */
function cal() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function clearData
 * @description By using below function we will get the final result of the operation.
 */
function cal() {
    let value = getCurrentValue();
>>>>>>> Version-1
    operation.innerText = numberFormate(eval(value).toString());
}
//-------------------------------------------Equal End--------------------------------------------------


//-------------------------------------------Backspace Start--------------------------------------------
<<<<<<< HEAD

/**
 * BackSpace : By using this function we can erase last digit or method of opration.
 */
function backspace() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function backspace
 * @description By using this function we can erase last digit or method of opration.
 */
function backspace() {
    let value = getCurrentValue();
>>>>>>> Version-1
    let valuelength = value.length;
    let newValue = value.substring(0, valuelength - 1);
    operation.innerText = numberFormate(newValue);
}
//-------------------------------------------Backspace End----------------------------------------------


//-------------------------------------------Plus-Minus Start-------------------------------------------
<<<<<<< HEAD

/**
 * Plus and Minus : By using this function we can change the value of the digits.(EX:We make sum of two digit and the final result of the operation is negative then by using this we can make that value plus)
*/
function plusminus() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function plusminus()
 * @description By using this function we can change the value of the digits.(EX:We make sum of two digit and the final result of the operation is negative then by using this we can make that value plus)
 */
function plusminus() {
    let value = getCurrentValue();
>>>>>>> Version-1
    value *= -1;
    operation.innerText = numberFormate(value.toString());
}
//-------------------------------------------Plus-Minus End-------------------------------------------


//-------------------------------------------ln Start---------------------------------------------------
<<<<<<< HEAD

/**
 * ln : Here ln stands for log Natural and this function help as to find the log of any digits.
 */
function ln() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function ln()
 * @description Here ln stands for log Natural and this function help as to find the log of any digits.
 */
function ln() {
    let value = getCurrentValue();
>>>>>>> Version-1
    operation.innerText = Math.log(value).toString()
}
//-------------------------------------------ln End---------------------------------------------------


//-------------------------------------------Log Start--------------------------------------------------
<<<<<<< HEAD

/**
 * log: Log generally refers to a logarithm to the base 10 this function help us to found log with base 10.
 */
function log() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function log()
 * @description Log generally refers to a logarithm to the base 10 this function help us to found log with base.
 */
function log() {
    let value = getCurrentValue();
>>>>>>> Version-1
    operation.innerText = Math.log10(value).toString();
}
//-------------------------------------------Log End----------------------------------------------------


//-------------------------------------------Power of Ten Start-----------------------------------------
<<<<<<< HEAD

/**
 * 10^x : It's means power of ten and this function is help us to calculate the power of 10 and here x means whatever power we want.
 */
function tenPower() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function tenPower()
 * @description 10^x : It's means power of ten and this function is help us to calculate the power of 10 and here x means whatever power we want.
 */
function tenPower() {
    let value = getCurrentValue();
>>>>>>> Version-1
    operation.innerText = Math.pow(10, value).toString();
}
//-------------------------------------------Power of Ten End-------------------------------------------


//-------------------------------------------Root Start-------------------------------------------------
<<<<<<< HEAD

/**
 * Root : It's help to find the square root of any value. 
 */
function root() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function root()
 * @description It's help to find the square root of any value.
 */
function root() {
    let value = getCurrentValue();
>>>>>>> Version-1
    operation.innerText = Math.sqrt(value).toString();
}
//-------------------------------------------Root End---------------------------------------------------


//-------------------------------------------Factorial Start--------------------------------------------
<<<<<<< HEAD

/**
* Factorial : Factorial is a function that multiplies a number by every number below it.(EX: 5!= 5*4*3*2*1=120.)
*/

function factorial() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function factorial()
 * @description Factorial is a function that multiplies a number by every number below it.(EX: 5!= 5*4*3*2*1=120.)
 */
function factorial() {
    let value = getCurrentValue();
>>>>>>> Version-1
    let result = 1;
    let i = 0;
    for (let i = value; i >= 1; i--) {
        result *= i;
    }
<<<<<<< HEAD
=======
    // result = Math.factorial(value);
>>>>>>> Version-1
    operation.innerText = result.toString();
}
//-------------------------------------------Factorial End----------------------------------------------



//-------------------------------------------Square Start-----------------------------------------------
<<<<<<< HEAD

/**
 * Square : By using this function we can find the square of any numbers.
 */
function square() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function square()
 * @description By using this function we can find the square of any numbers.
 */
function square() {
    let value = getCurrentValue();
>>>>>>> Version-1
    value *= value;
    operation.innerText = value.toString();
}
//-------------------------------------------Square End-------------------------------------------------


//-------------------------------------------Exp Start--------------------------------------------------
<<<<<<< HEAD

/**
 * Exp : This function is use to returns e^x value 
 */
function cal_exp() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function calExp()
 * @description This function is use to returns e^x value 
 */
function calExp() {
    let value = getCurrentValue();
>>>>>>> Version-1
    operation.innerText = Math.exp(value);
}
//-------------------------------------------Exp End----------------------------------------------------


//-------------------------------------------Absolute Start---------------------------------------------
<<<<<<< HEAD

/**
 * Absolute : This function is use the make any value absolute.
 */
function absolute() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function absolute()
 * @description This function is use the make any value absolute.
 */
function absolute() {
    let value = getCurrentValue();
>>>>>>> Version-1
    operation.innerText = Math.abs(value);
}
//-------------------------------------------Absolute End-----------------------------------------------


//-------------------------------------------Function Start---------------------------------------------
<<<<<<< HEAD

/**
 *  Math Function : By using this function we can make any value round, floor, ceil, trunc.
 */
function mathsFun(fname) {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function mathsFunction()
 * @description By using this function we can make any value round, floor, ceil, trunc.
 */
function mathsFunction(fname) {
    let value = getCurrentValue();
>>>>>>> Version-1
    let result = 0;
    switch (fname) {
        case 'ceil':
            result = Math.ceil(value);
            break;
        case 'floor':
            result = Math.floor(value);
            break;
        case 'round':
            result = Math.round(value);
            break;
        case 'trunc':
            result = Math.trunc(value);
            break;
    }
    console.log(result);
    operation.innerText = numberFormate(result.toString());
}
//-------------------------------------------Function End-----------------------------------------------


//-------------------------------------------Trigonometry Start-----------------------------------------
<<<<<<< HEAD

/**
 * Trigonometry Function : By using this function we can find the trigo value of any digits.
 */
function trigonometry(method) {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function trigonometry()
 * @description By using this function we can make any value round, floor, ceil, trunc.
 */
function trigonometry(method) {
    let value = getCurrentValue();
>>>>>>> Version-1
    let result = 0;
    switch (method) {
        case "sin":
            result = Math.sin(value);
            break;
        case "cos":
            result = Math.cos(value);
            break;
        case "tan":
            result = Math.tan(value);
            break;
        case "cot":
            result = 1 / Math.tan(value);
            break;
    }
    if (result === NaN) {
        operation.innerText = "ERROR"
    } else {
        operation.innerText = numberFormate(result.toString());
    }
}
//-------------------------------------------Trigonometry End-------------------------------------------


//-------------------------------------------Degree Start-----------------------------------------------
<<<<<<< HEAD

/**
 *  Degree : This function is use to measures of an angle.
 */
function deg() {
    let value = operation.innerText.replace(/,/g, "");
=======
/**
 * @function deg()
 * @description convert radian to degree.
 */
function deg() {
    let value = getCurrentValue();
>>>>>>> Version-1
    value *= (180 / Math.PI)
    operation.innerText = numberFormate(value.toString())
}
//-------------------------------------------Degree End-------------------------------------------------


//-------------------------------------------Exponential Start------------------------------------------
<<<<<<< HEAD

/**
 *  Exponential : This function is use to fixed value with exponent value.
=======
/**
 * @function exp()
 * @description This function is use to fixed value with exponent value.
>>>>>>> Version-1
 */
function exp() {
    let value = Number(operation.innerText.replace(/,/g, ""));
    operation.innerText = numberFormate(value.toExponential(3).toString());
}
//-------------------------------------------Exponential End--------------------------------------------


//-------------------------------------------Memory Function Start--------------------------------------

let mValue = 0;
<<<<<<< HEAD

/**
 * Memory Store : The calculator has one memory that can be used for storing values temporarily.
 */

=======
/**
 * @function memoryStore()
 * @description The calculator has one memory that can be used for storing values temporarily.
 */
>>>>>>> Version-1
function memoryStore() {
    let value = Number(operation.innerText.replace(/,/g, ""));
    if (operation.innerText != "") {
        mValue = value;
        document.getElementById("mc-on").style.color = "black";
        document.getElementById("mr-on").style.color = "black";
    }
    operation.innerText = "";
}

/**
<<<<<<< HEAD
 * Memory Plus : This function use to add the presently displayed number to the value in memory.
 */
function mPlus() {
=======
 * @function memoryPlus()
 * @description This function use to add the presently displayed number to the value in memory.
 */
function memoryPlus() {
>>>>>>> Version-1
    let value = Number(operation.innerText.replace(/,/g, ""));
    if (operation.innerText != "") {
        mValue += value;
        document.getElementById("mc-on").style.color = "black";
        document.getElementById("mr-on").style.color = "black";
    }
    operation.innerText = "";
}

/**
<<<<<<< HEAD
 * Memory Minus : This function use to subtract the present value from the stored value.
*/
function mMinus() {
=======
 * @function memoryPlus()
 * @description This function use to subtract the present value from the stored value.
 */
function memoryMinus() {
>>>>>>> Version-1
    let value = Number(operation.innerText.replace(/,/g, ""));
    if (operation.innerText != "") {
        mValue -= value;
        document.getElementById("mc-on").style.color = "black";
        document.getElementById("mr-on").style.color = "black";
    }
    operation.innerText = "";
}

<<<<<<< HEAD
/**
 * Memory Recall : This function is used to display the number saved in memory,The calculator will show the stored number on screen, replacing any value already displayed.
 */

function mRecall() {
=======

/**
 * @function memoryPlus()
 * @description This function is used to display the number saved in memory,The calculator will show the stored number on screen, replacing any value already displayed.
 */
function memoryRecall() {
>>>>>>> Version-1
    console.log(mValue)
    operation.innerText = numberFormate(mValue.toString());
}

<<<<<<< HEAD

/**
 * Memory Clear: The calculator has one memory that can be used for storing values temporarily to clear this memory we need to use this function.
 */

function mClear() {
=======
/**
 * @function memoryPlus()
 * @description The calculator has one memory that can be used for storing values temporarily to clear this memory we need to use this function.
 */
function memoryClear() {
>>>>>>> Version-1
    mValue = 0
    if (mValue == 0)
        document.getElementById("mc-on").style.color = "gray";
    document.getElementById("mr-on").style.color = "gray";
}

//-------------------------------------------Memory Function End----------------------------------------

