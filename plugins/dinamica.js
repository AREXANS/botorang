import fs from 'fs'
import MessageType from '@adiwajshing/baileys'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m
let c = m.quoted ? m.quoted : m.msg
const msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : { text: c || '' }
}, {
quoted: m,
userJid: conn.user.id
}),
conn.reply(m.chat, `${text} Hola` || q.text, conn.user.jid, { mentions: users }), {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πππ©ππ½π€π©-ππΏ | πππ©π πΏππ€π¨',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `${yt}`}}})
                      
//`${text} Hola` || q.text, conn.user.jid, { mentions: users })

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['pengumuman', 'announce', 'hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(dinamica)$/i
handler.group = true
handler.admin = true 
export default handler
