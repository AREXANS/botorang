const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Grup.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
𝗛𝗢𝗟𝗔 _${username}_
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗚𝗥𝗨𝗣𝗢𝗦

┏━━━━━━━━━━━━━┓
┃ *<𝗠𝗘𝗡𝗨 𝗚𝗥𝗨𝗣𝗢>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💎 _${usedPrefix}admins_
┣ ඬ⃟💎 _${usedPrefix}add *<numero>*_
┣ ඬ⃟💎 _${usedPrefix}kick *<@tag>*_
┣ ඬ⃟💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟💎 _${usedPrefix}promote *<@tag>*_
┣ ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟💎 _${usedPrefix}grupo abrir/cerrar_
┣ ඬ⃟💎 _${usedPrefix}banchat/unbanchat_
┣ ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟💎 _${usedPrefix}infogroup_
┣ ඬ⃟💎 _${usedPrefix}link_
┣ ඬ⃟💎 _${usedPrefix}setname *<texto>*_
┣ ඬ⃟💎 _${usedPrefix}setdesc *<texto>*_
┣ ඬ⃟💎 _${usedPrefix}hidetag *<texto>*_
┣ ඬ⃟💎 _${usedPrefix}del *responder al mensaje del bot para borrarlo*_
┣ ඬ⃟💎 _${usedPrefix}setpp *establecer foto como perfil del grupo*_
┣ ඬ⃟💎 _${usedPrefix}simular *<welcome / bye / promote / demote>*_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['𝐌𝐄𝐍𝐔', '.menu'],
['𝐎𝐖𝐍𝐄𝐑', '.creador'],
['𝐁𝐎𝐓', 'bot']
], m)
}}
handler.help = ['menugp']
handler.tags = ['main']
handler.command = /^(menugrupos|menugrupo|memugrupos|menugrupos|menugp|memugp|comandosgrupo)$/i
handler.fail = null
handler.register = true
export default  handler
