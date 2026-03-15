const normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const fonts = {
bold: "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",

italic: "𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛",

boldSans: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",

mono: "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",

wide: "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",

double: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤabcdefghijklmnopqrstuvwxyz",

smallcaps: "ABCDEFGHIJKLMNOPQRSTUVWXYZᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ"
};

function convert(text, font) {

let result = "";

for (let char of text) {

let index = normal.indexOf(char);

if (index !== -1) {
result += font[index];
} else {
result += char;
}

}

return result;

}

const input = document.getElementById("inputText");
const results = document.getElementById("results");

function generateFonts() {

results.innerHTML = "";

let text = input.value || "Type here";

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

generateFonts();return result;

}

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
