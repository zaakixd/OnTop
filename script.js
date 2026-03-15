const fonts = {

bold: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭",
italic: "𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁",
boldItalic:"𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁",
monospace:"𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉",
double:"𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
wide:"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",
smallcaps:"ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ"

};

const normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const input = document.getElementById("inputText");
const results = document.getElementById("results");

function convert(text,font){

text = text.toUpperCase();
let output="";

for(let char of text){

let index = normal.indexOf(char);

if(index !== -1){
output += font[index];
}else{
output += char;
}

}

return output;

}

function generate(){

results.innerHTML="";
let text = input.value || "THIS FONT";

for(let key in fonts){

let styled = convert(text,fonts[key]);

let div = document.createElement("div");
div.className="fontBox";

let span = document.createElement("span");
span.innerText = styled;

let btn = document.createElement("button");
btn.innerText="Copy";

btn.onclick=()=>{
navigator.clipboard.writeText(styled);
}

div.appendChild(span);
div.appendChild(btn);

results.appendChild(div);

}

}

input.addEventListener("input",generate);

generate();