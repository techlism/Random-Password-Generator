
//UpperCase and LowerCase can be merged and then the Output will be a bit more Complex.
//Techlism
function returnLowerCase(){
    let letterIndex = Math.floor(Math.random() * 26)
    let lowerCase = String.fromCharCode(letterIndex + 'a'.charCodeAt(0)) 
    return lowerCase 
}
function returnUpperCase(){
    let letterIndex = Math.floor(Math.random() * 26)
    let upperCase = String.fromCharCode(letterIndex + 'A'.charCodeAt(0))
    return upperCase
}
function returnSpecialChar(){
    const specialChar='!@#$%&_-+=?.,/'
    return specialChar[Math.floor(Math.random() * 14)];
}
function returnNumber(){
    let arr=[1,2,3,4,5,6,7,8,9]
    return arr[Math.floor(Math.random() * 9)].toString()
}
//Minimum 6 Characters.
let randomLowerCase = Math.floor(Math.random() * (5)) + 6
//Minimum 2 Characters.
let randomUpperCase = Math.floor(Math.random() * (2)) + 2
//Minimum 1 Characters.
let randomSpecialCharacter=Math.floor(Math.random() * (3)) + 1
//Minimum 3 Numbers
let randomNumbers=Math.floor(Math.random() * (2)) + 3

//Password String
let passwordString=""

function randomNum(){
   return  Math.floor(Math.random() * 4)
}
function L(){
    let lc=""
    for(let i=0;i<randomLowerCase;i++){
        lc = lc + returnLowerCase()
    }
    return lc
}
function U(){
    let uc=""
    for(let i=0;i<randomUpperCase;i++){
        uc = uc + returnUpperCase()
    }
    return uc
}
function C(){
    let cStr=""
    for(let i=0;i<randomSpecialCharacter;i++){
        cStr = cStr + returnSpecialChar()
    }
    return cStr
}
function N(){
    let nStr=""
    for(let i=0;i<randomNumbers;i++){
        nStr = nStr + returnNumber()
    }
    return nStr
}

let num= randomNum()
    switch (num) {
        //Only Created 4 Combinations, 20(approx.) more cases are Possible
        case 0:
            passwordString=passwordString+U()+C()+L()+N()
            break
        case 1:
            passwordString=passwordString+L()+U()+N()+C()
            break
        case 2:
            passwordString=passwordString+N()+L()+C()+U()
            break     
         case 3:
            passwordString=passwordString+L()+N()+C()+U()
            break
    }
console.log(passwordString)
