import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

 
const sections = [
{
title: `❗Ajustes del grupo❗`,
title: `❗jus❗`,
rows: [
      {title: "🚫 𝗖𝗘𝗥𝗥𝗔𝗥 𝗚𝗥𝗨𝗣𝗢 🚫", description: '𝗣𝗨𝗟𝗦𝗔 𝗔𝗤𝗨𝗜 𝗣𝗔𝗥𝗔 𝗔𝗕𝗥𝗜𝗥 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢', rowId: `.grupo cerrar`},
      {title: "✅ 𝗔𝗕𝗥𝗜𝗥 𝗚𝗥𝗨𝗣𝗢 ✅", description: '𝗣𝗨𝗟𝗦𝗔 𝗔𝗤𝗨𝗜 𝗣𝗔𝗥𝗔 𝗖𝗘𝗥𝗥𝗔𝗥 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢', rowId: `.grupo abrir`},
]}, ]
 
let name = await conn.getName(m.sender)
const listMessage = {
text: `𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗣𝗔𝗥𝗔 𝗔𝗕𝗥𝗜𝗥/𝗖𝗘𝗥𝗥𝗔𝗥 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢

𝗧𝗔𝗠𝗕𝗜𝗘𝗡 𝗣𝗨𝗘𝗗𝗘𝗦 𝗣𝗢𝗡𝗘𝗥:
.grupo abrir
.grupo cerrar
`, footer: `${wm}`, pp,
title: null,
buttonText: "𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢", 
sections }

await conn.sendMessage(m.chat, listMessage)

let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] 𝙶𝚁𝚄𝙿𝙾 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴*')}
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(grupo|gc)$/i
handler.admin = true
handler.exp = 50
handler.register = true

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
