const passwordBox=document.getElementById("password");
const length=12;

const upperCase="QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase="qwertyuioplkjhgfdsazxcvbnm";
const number="0123456789";
const symbol="`~!@#$%^&*()_+-=[]{}\|?/><";
const allChars=upperCase+lowerCase+number+Symbol;

function createPassword(){
    let passWord="";
    passWord+=upperCase[Math.floor(Math.random()*upperCase.length)];
    passWord+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    passWord+=number[Math.floor(Math.random()*number.length)];
    passWord+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>passWord.length){
        passWord+=allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBox.value=passWord;
    console.log(passWord);
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}