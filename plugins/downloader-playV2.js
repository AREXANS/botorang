import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ πΎ π΄π½π»π°π²π΄ π³π΄ π°π»πΆππ½π° π²π°π½π²πΈπΎπ½ πΎ ππΈπ³π΄πΎ π³π΄ ππΎππππ±π΄\n\n*π΄πΉπ΄πΌπΏπ»πΎ*:\n*Audio:*\n*.play1 Γengo La Prision*\n*video:*\n*.play2 Γengo La Promesa*`
if (command == 'play1') {
let espera = '*[βππππβ] π°πΆππ°ππ³π΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ π°ππ³πΈπΎ*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play2') {
let espera = '*[βππππβ] π°πΆππ°ππ³π΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ ππΈπ³π΄πΎ*'
m.reply('espera')
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `_πππ»πππ¬πππππ­ππ_`, m)}
}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play1', 'play2']
export default handler
