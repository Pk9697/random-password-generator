// console.log("Script loaded")
const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?",
"/"];
const numbersCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?",
"/"];
const onlyCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z"];

//fetch btn and h3's
const btn=document.getElementById("btn");
const pass1=document.getElementById("pass1");
const pass2=document.getElementById("pass2");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

const checkbox1=document.getElementById("checkbox1");
const checkbox2=document.getElementById("checkbox2");
function randomCharactersArray(passLength=15,charactersArr=allCharacters){
    //of length 15
    // const charArray=[];
    let randomPassword="";
    for(let i=0;i<passLength;i++){
        const randomCharIdx=Math.floor(Math.random()*charactersArr.length);
        // charArray.push(characters[randomCharIdx]);
        randomPassword+=charactersArr[randomCharIdx];
        
    }
    // console.log(charArray);
    return randomPassword;
}
// console.log(randomCharactersArray())

btn.addEventListener("click",function(){
    if(checkbox1.checked && checkbox2.checked){
        pass1.textContent=randomCharactersArray(slider.value,allCharacters);
        pass2.textContent=randomCharactersArray(slider.value,allCharacters);
    }else if(checkbox1.checked){
        pass1.textContent=randomCharactersArray(slider.value,numbersCharacters);
        pass2.textContent=randomCharactersArray(slider.value,numbersCharacters);
    }else if(checkbox2.checked){
        pass1.textContent=randomCharactersArray(slider.value,symbolCharacters);
        pass2.textContent=randomCharactersArray(slider.value,symbolCharacters);
    }else{
        pass1.textContent=randomCharactersArray(slider.value,onlyCharacters);
        pass2.textContent=randomCharactersArray(slider.value,onlyCharacters);
    }

})


output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    //!slider.value also works but don't know if this is the correct approach
  output.innerHTML = this.value;
}

pass1.addEventListener("click",function(){
    // pass1.select();
    // console.log(pass1.textContent)
    navigator.clipboard.writeText(pass1.textContent);
    alert("Copied the password: " + pass1.textContent);
})
pass2.addEventListener("click",function(){
    // pass1.select();
    // console.log(pass1.textContent)
    navigator.clipboard.writeText(pass2.textContent);
    alert("Copied the password: " + pass2.textContent);
})

