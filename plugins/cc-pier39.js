import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })  
await m.reply(global.wait)
await m.reply(global.rec)
let text = `*37.80867,-122.40982*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝐍𝐈𝐃𝐎𝐒.',
body: '✦҈͜͡➳👻𝕲𝔥𝔬𝔰𝔱•✓☆ۣۜۜ͜͡🌹',         
previewType: 0, thumbnail: fs.readFileSync("./Cargando.jpg"),
sourceUrl: `http://wa.me/+51996089079`}}}) 
}
handler.command = /^(pier39)/i
handler.register = true
handler.limit = 2
export default handler
