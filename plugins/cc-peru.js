import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
Cargando info...
*🚨 NIDOS   MUNDIALES 🚨*
 	📲 OSH	🇺🇸	❖	34.0152,-118.2869	
🅖
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝐍𝐈𝐃𝐎𝐒.',
body: '✦҈͜͡➳👻𝕲𝔥𝔬𝔰𝔱•✓☆ۣۜۜ͜͡🌹',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `http://wa.me/+51996089079`}}})   
}
handler.command = /^(perú)/i
export default handler
