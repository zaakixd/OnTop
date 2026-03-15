const input = document.getElementById("inputText");
const results = document.getElementById("results");

const fonts = [
{text:"𝐓𝐇𝐈𝐒 𝐅𝐎𝐍𝐓"},
{text:"𝑻𝑯𝑰𝑺 𝑭𝑶𝑵𝑻"},
{text:"𝗧𝗛𝗜𝗦 𝗙𝗢𝗡𝗧"},
{text:"𝚃𝙷𝙸𝚂 𝙵𝙾𝙽𝚃"},
{text:"ＴＨＩＳ ＦＯＮＴ"},
{text:"𝕋ℍ𝕀𝕊 𝔽𝕆ℕ𝕋"},
{text:"ᴛʜɪs ғᴏɴᴛ"}
];

function generate(){

results.innerHTML="";

let text = input.value || "THIS FONT";

fonts.forEach(font => {

let div=document.createElement("div");
div.className="fontBox";

let span=document.createElement("span");
span.innerText = font.text.replace("THIS FONT", text);

let btn=document.createElement("button");
btn.innerText="Copy";

btn.onclick=()=>{
navigator.clipboard.writeText(span.innerText);
btn.innerText="Copied!";
setTimeout(()=>btn.innerText="Copy",1000);
}

div.appendChild(span);
div.appendChild(btn);

results.appendChild(div);

});

}

input.addEventListener("input",generate);

generate();
const input = document.getElementById("inputText");
const results = document.getElementById("results");

function generateFonts() {

results.innerHTML = "";

let text = input.value || "THIS FONT";

for (let key in fonts) {

let styled = convert(text, fonts[key]);

let box = document.createElement("div");
box.className = "fontBox";

let span = document.createElement("span");
span.innerText = styled;

let btn = document.createElement("button");
btn.innerText = "Copy";

btn.onclick = () => {
navigator.clipboard.writeText(styled);
btn.innerText = "Copied!";
setTimeout(() => btn.innerText = "Copy", 1000);
};

box.appendChild(span);
box.appendChild(btn);

results.appendChild(box);

}

}

input.addEventListener("input", generateFonts);

generateFonts();
