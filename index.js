const inputSlider = document.querySelector("[data-lengthSlider]")
const lengthDisplay=document.querySelector("[data-length]")
const passwordDisplay=document.querySelector("[password-display]")
const copyBtn=document.querySelector("[copyBtn]")
const copyMsg=document.querySelector("[copyMsg]")
const uppercaseCheck=document.querySelector("#uppercase")
const lowercaseCheck=document.querySelector("#lowercase")
const numberscheck=document.querySelector("#numbers")
const symbolscheck=document.querySelector("#symbols")
const indicator=document.querySelector("[data-indicator]")
const generateBtn=document.querySelector(".generateBtn")
const allCheckBox=document.querySelector("input[type=checkbox]")

let password="";
let passwordLength=10;
lengthDisplay.textContent=passwordLength;
passwordDisplay.value=password;

uppercaseCheck.checked=true;

function setIndicator(color){
    indicator.style.backgroundColor=color;
}

function calcStrength(){
    let cnt=0;
    if(passwordLength<=5){
        setIndicator("red");
        return;
    }
    if(uppercaseCheck.checked) cnt++;
    if(lowercaseCheck.checked) cnt++;
    if(numberscheck.checked) cnt++;
    if(symbolscheck.checked) cnt++;

    if(cnt<2){
        setIndicator("red");
    }

    else if(cnt===2){
        setIndicator("yellow");
    }

    else{
        setIndicator("green")
    }
}

generateBtn.addEventListener("click", ()=>{
    // console.log("clicked");
    calcStrength();
})

inputSlider.addEventListener("input", (e)=>{
    passwordLength=e.target.value;
    lengthDisplay.textContent=passwordLength;
    // console.log(passwordLength)
})

async function copyText(){
    try{

        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.style.opacity=1;

        setTimeout(() => {
            copyMsg.style.opacity=0;
        }, 300);
    }
    catch(e){
        throw e;
    }
}

copyBtn.addEventListener("click", ()=>{
    copyText();
})

function generateRndInteger(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

function generateNum(){
    return generateRndInteger(0, 9);
}

function generateUpper(){
    return String.fromCharCode(generateRndInteger(65, 90));
}
function generateLower(){
    return String.fromCharCode(generateRndInteger(97, 122));
}

function generateSym(){
    let symbol="!@#$%^&*()-=_+><.,";

    return symbol.charAt(generateRndInteger(0, symbol.length));
}

function generatePassword(){
    let newPassword="";
    if(uppercaseCheck.checked && lowercaseCheck.checked && numberscheck.checked && symbolscheck.checked){
        
        newPassword+=generateUpper();
        newPassword+=generateLower();
        newPassword+=generateNum();
        newPassword+=generateSym();

        for(let i=0; i<(passwordLength-4); i++){
            let n=generateRndInteger(0, 4);
            if(n==0){
                newPassword+=generateUpper();
            }

            if(n==1){
                newPassword+=generateLower();
            }


            if(n==2){
                newPassword+=generateNum();
            }
            if(n===3){
                newPassword+=generateSym();
            }

        }
        password=newPassword;
        passwordDisplay.value=password;

    }
    else if(uppercaseCheck.checked && lowercaseCheck.checked && numberscheck.checked){
        newPassword+=generateUpper();
        newPassword+=generateLower();
        newPassword+=generateNum();

        for(let i=0; i<(passwordLength-3); i++){
            let n=generateRndInteger(0, 3);
            if(n==0){
                newPassword+=generateUpper();
            }

            if(n==1){
                newPassword+=generateLower();
            }


            if(n==2){
                newPassword+=generateNum();
            }
           

        }
        password=newPassword;
        passwordDisplay.value=password;
    }

    else if(uppercaseCheck.checked && lowercaseCheck.checked && symbolscheck.checked){
        newPassword+=generateUpper();
        newPassword+=generateLower();
        newPassword+=generateSym();

        for(let i=0; i<(passwordLength-3); i++){
            let n=generateRndInteger(0, 3);
            if(n==0){
                newPassword+=generateUpper();
            }

            if(n==1){
                newPassword+=generateLower();
            }


            if(n==2){
                newPassword+=generateSym();
            }
           

        }
        password=newPassword;
        passwordDisplay.value=password;
    }

    else if(uppercaseCheck.checked && numberscheck.checked && symbolscheck.checked){
        newPassword+=generateUpper();
        newPassword+=generateNum();
        newPassword+=generateSym();

        for(let i=0; i<(passwordLength-3); i++){
            let n=generateRndInteger(0, 3);
            if(n==0){
                newPassword+=generateUpper();
            }

            if(n==1){
                newPassword+=generateNum();
            }


            if(n==2){
                newPassword+=generateSym();
            }
           

        }
        password=newPassword;
        passwordDisplay.value=password;
    }

    else if(lowercaseCheck.checked && numberscheck.checked && symbolscheck.checked){
        newPassword+=generateLower();
        newPassword+=generateNum();
        newPassword+=generateSym();

        for(let i=0; i<(passwordLength-3); i++){
            let n=generateRndInteger(0, 3);
            if(n==0){
                newPassword+=generateLower();
            }

            if(n==1){
                newPassword+=generateNum();
            }


            if(n==2){
                newPassword+=generateSym();
            }
           

        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(lowercaseCheck.checked && uppercaseCheck.checked){
        newPassword+=generateLower();
        newPassword+=generateUpper();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateLower();
            }

            if(n==1){
                newPassword+=generateUpper();
            }


            
           

        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(lowercaseCheck.checked && numberscheck.checked){
        newPassword+=generateLower();
        newPassword+=generateNum();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateLower();
            }

            if(n==1){
                newPassword+=generateNum();
            }


        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(lowercaseCheck.checked && symbolscheck.checked){
        newPassword+=generateLower();
        newPassword+=generateSym();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateLower();
            }

            if(n==1){
                newPassword+=generateSym();
            }


        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(uppercaseCheck.checked && lowercaseCheck.checked){
        newPassword+=generateLower();
        newPassword+=generateUpper();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateLower();
            }

            if(n==1){
                newPassword+=generateUpper();
            }


            
           

        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(uppercaseCheck.checked && numberscheck.checked){
        newPassword+=generateUpper();
        newPassword+=generateNum();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateUpper();
            }

            if(n==1){
                newPassword+=generateNum();
            }


        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(uppercaseCheck.checked && symbolscheck.checked){
        newPassword+=generateUpper();
        newPassword+=generateSym();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateUpper();
            }

            if(n==1){
                newPassword+=generateSym();
            }


        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(numberscheck.checked && lowercaseCheck.checked){
        newPassword+=generateLower();
        newPassword+=generateNum();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateLower();
            }

            if(n==1){
                newPassword+=generateNum();
            }


            
           

        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(uppercaseCheck.checked && numberscheck.checked){
        newPassword+=generateUpper();
        newPassword+=generateNum();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateUpper();
            }

            if(n==1){
                newPassword+=generateNum();
            }


        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(numberscheck.checked && symbolscheck.checked){
        newPassword+=generateNum();
        newPassword+=generateSym();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateNum();
            }

            if(n==1){
                newPassword+=generateSym();
            }


        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(symbolscheck.checked && lowercaseCheck.checked){
        newPassword+=generateLower();
        newPassword+=generateSym();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateLower();
            }

            if(n==1){
                newPassword+=generateSym();
            }


            
           

        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(uppercaseCheck.checked && symbolscheck.checked){
        newPassword+=generateUpper();
        newPassword+=generateSym();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateUpper();
            }

            if(n==1){
                newPassword+=generateSym();
            }


        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(numberscheck.checked && symbolscheck.checked){
        newPassword+=generateNum();
        newPassword+=generateSym();

        for(let i=0; i<(passwordLength-2); i++){
            let n=generateRndInteger(0, 2);
            if(n==0){
                newPassword+=generateNum();
            }

            if(n==1){
                newPassword+=generateSym();
            }


        }
        password=newPassword;
        passwordDisplay.value=password;
    }

    else if(uppercaseCheck.checked){
        for(let i=0; i<passwordLength; i++){
            newPassword+=generateUpper();
        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(symbolscheck.checked){
        for(let i=0; i<passwordLength; i++){
            newPassword+=generateSym();
        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(lowercaseCheck.checked){
        for(let i=0; i<passwordLength; i++){
            newPassword+=generateLower();
        }
        password=newPassword;
        passwordDisplay.value=password;
    }
    else if(numberscheck.checked){
        for(let i=0; i<passwordLength; i++){
            newPassword+=generateNum();
        }
        password=newPassword;
        passwordDisplay.value=password;
    }
}

generateBtn.addEventListener("click", ()=>{
    generatePassword();
})





