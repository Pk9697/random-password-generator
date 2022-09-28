// console.log("Script loaded")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?",
"/"];

//fetch btn and h3's
const btn=document.getElementById("btn");
const pass1=document.getElementById("pass1");
const pass2=document.getElementById("pass2");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

function randomCharactersArray(passLength=15){
    //of length 15
    // const charArray=[];
    let randomPassword="";
    for(let i=0;i<passLength;i++){
        const randomCharIdx=Math.floor(Math.random()*characters.length);
        // charArray.push(characters[randomCharIdx]);
        randomPassword+=characters[randomCharIdx];
        
    }
    // console.log(charArray);
    return randomPassword;
}
// console.log(randomCharactersArray())

btn.addEventListener("click",function(){
    console.log(slider.value)
    pass1.textContent=randomCharactersArray(slider.value);
    pass2.textContent=randomCharactersArray(slider.value);
    // console.log("clicked")


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

