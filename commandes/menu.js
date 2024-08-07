const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../france/king");
const { format } = require(__dirname + "/../france/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../france//king");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    
 cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('EAT');

// Créer une date et une heure en EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
        𝐖𝐄𝐋𝐂𝐎𝐌𝐄
┌─── ∘°💮°∘ ─── ∘°💮°∘ ───┐
🤗 *𝗛𝗘𝗟𝗟𝗢* : ${s.OWNER_NAME}
╭────《𝗗𝗘𝗩𝗜𝗖𝗘》────☯
🌐 *Mode* : ${mode}
📃 *Commands* : ${cm.length} 
⌚️ *Time* : ${temps} 
📼 *Ram* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
🚀 *Platform* : ${os.platform}
└───❀──»»-----------►
 𝗦𝗧𝗔𝗧𝗨𝗦
🛡 Security : encrypted
📒 Bot ID : VBOPLQBG
🌡 Bot temp : 37°
🕛Bot speed : 000099MS
└───❀»»ᅳᅳᅳᅳ►»»ᅳᅳ»»ᅳᅳᅳᅳ►
𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡
🛰 𝐂𝐘𝐁𝐄𝐑𝐈𝐎𝐍-𝐒𝐏𝐀𝐑𝐊-𝗠𝗗 𝐁𝐘 𝐂𝐀𝐑𝐋 
📝 Released  7:8:2024
╰────✦𝗖𝗬𝗕𝗘𝗥𝗜𝗢𝗡✦─────☯ \n\n`;
 
    let menuMsg=`  
  ◤──•~❉᯽❉~•──◥◤──•~❉᯽❉~•──◥
     █ ✪ █🅲▓🅱▓-▓🅼▓🅳▓█ ✪ █
✨╭━━━━━∙⋆⋅⋆∙━━━━🪀━━━━━∙⋆⋅⋆∙━━━━━╮✨
 👨‍💻𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥:
   𝗖𝗔𝗥𝗟 𝗪𝗜𝗟𝗟𝗜𝗔𝗠
 🐈‍⬛𝗚𝗜𝗧𝗛𝗨𝗕1:
   https://github.com/Carl165
 🐈𝗚𝗜𝗧𝗛𝗨𝗕2:
   https://github.com/carl24tech
 📥𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠:
    https://t.me/carlltecch
 🪀𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣:
   https://254770954948
 💫 𝗪𝗔_𝗖𝗛𝗔𝗡𝗡𝗘𝗟:
   https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h
   𝗘𝗡𝗝𝗢𝗬 𝗨𝗦𝗜𝗡𝗚 𝗖𝗬𝗕𝗘𝗥𝗜𝗢𝗡 𝗦𝗣𝗔𝗥𝗞 𝗠𝗗
`;

    for (const cat in coms) {
        menuMsg += `*╭────☸* *${cat}* *☸*`;
        for (const cmd of coms[cat]) {
            menuMsg += `  
*🗿* ${cmd}`;
        }
        menuMsg += `
*🖲◃──────────────────▹* \n`
    }

    menuMsg += `
          

   *▄▄▄▄▄▄▄▄▄▄*
  *ᴄᴀʀʟ-ᴡɪʟʟɪᴀᴍ 2024🏆*                                         
*🖲◃──────────────────▹*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*Ibrahim-tech*" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
