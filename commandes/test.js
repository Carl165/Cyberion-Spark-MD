"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "💬", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐇𝐄𝐋𝐋𝐎 👋 𝐂𝐔𝐓𝐈𝐄 🤗𝐓𝐇𝐈𝐒 𝐈𝐒 𝐂𝐘𝐁𝐄𝐑𝐈𝐎𝐍-𝐒𝐏𝐀𝐑𝐊-𝐌𝐃🌝 \n\n ' + "𝗙𝗢𝗥𝗞 𝗧𝗛𝗘 𝗥𝗘𝗣𝗢 𝗧𝗢 𝗗𝗘𝗣𝗟𝗢𝗬 𝗬𝗢𝗨𝗥 𝗢𝗪𝗡 𝗕𝗢𝗧 *CYBERION-SPARK.*";
    let d = ' https://github.com/Carl165/Cyberion-Spark-MD/tree/main';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/24f2bab7110e19d99a481.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *FLASH-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *France King*'
      let varmess=z+d
      var img='https://telegra.ph/file/13d63c21c1a665bfd8324.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
