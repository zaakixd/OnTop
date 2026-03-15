const fonts = {

italicSans: {
A:"𝙏",B:"𝙃",C:"𝙄",D:"𝙎",E:"𝙁",F:"𝙊",G:"𝙉",H:"𝙏"
},

double: {
T:"𝕋",H:"ℍ",I:"𝕀",S:"𝕊",F:"𝔽",O:"𝕆",N:"ℕ"
},

wide: {
T:"Ｔ",H:"Ｈ",I:"Ｉ",S:"Ｓ",F:"Ｆ",O:"Ｏ",N:"Ｎ"
},

smallcaps: {
t:"ᴛ",h:"ʜ",i:"ɪ",s:"s",f:"ғ",o:"ᴏ",n:"ɴ"
},

mono: {
T:"𝚃",H:"𝙷",I:"𝙸",S:"𝚂",F:"𝙵",O:"𝙾",N:"𝙽"
},

bold: {
T:"𝐓",H:"𝐇",I:"𝐈",S:"𝐒",F:"𝐅",O:"𝐎",N:"𝐍"
},

italic: {
T:"𝑇",H:"𝐻",I:"𝐼",S:"𝑆",F:"𝐹",O:"𝑂",N:"𝑁"
},

boldSans: {
T:"𝗧",H:"𝗛",I:"𝗜",S:"𝗦",F:"𝗙",O:"𝗢",N:"𝗡"
}

};

function convert(text,font){

let result="";

for(let char of text){

if(font[char]){
result+=font[char];
}else if(font[char.toLowerCase()]){
result+=font[char.toLowerCase()];
}else{
result+=char;
}

}

return result;

}

const input=document.getElementById("inputText");
const results=document.getElementById("results");

function generate(){

results.innerHTML="";
let text=input.value || "THIS FONT";

for(let key in fonts){

let styled=convert(text,fonts[key]);

let div=document.createElement("div");
div.className="fontBox";

let span=document.createElement("span");
span.innerText=styled;

let btn=document.createElement("button");
btn.innerText="Copy";

btn.onclick=()=>{
navigator.clipboard.writeText(styled);
btn.innerText="Copied!";
setTimeout(()=>btn.innerText="Copy",1000);
};

div.appendChild(span);
div.appendChild(btn);

results.appendChild(div);

}

}

input.addEventListener("input",generate);

generate();
