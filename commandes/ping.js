"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { king } = require("../france/king");
king({ nomCom: "ping", reaction: "👾", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐏𝐈𝐍𝐆𝐈𝐍𝐆 𝐅𝐑𝐎𝐌⌛*CYBERION-SPARK* \n\n ' + "LOADING⏳..✨✨✨..100℅✅";
    let d = '𝗣𝗢𝗡𝗚:1090000000𝗠𝗦⏳*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/9b30c71fa2aa36248c4ba.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
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
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://wallpapercave.com/uwp/uwp3842939.jpeg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
