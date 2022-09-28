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
function randomCharactersArray(){
    //of length 15
    // const charArray=[];
    let randomPassword="";
    for(let i=0;i<15;i++){
        const randomCharIdx=Math.floor(Math.random()*characters.length);
        // charArray.push(characters[randomCharIdx]);
        randomPassword+=characters[randomCharIdx];
        
    }
    // console.log(charArray);
    return randomPassword;
}
// console.log(randomCharactersArray())

btn.addEventListener("click",function(){
    pass1.textContent=randomCharactersArray();
    pass2.textContent=randomCharactersArray();
    // console.log("clicked")
})
