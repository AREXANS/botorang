let limit = 80
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, q, isPrems, isOwner }) => {
  if (!q) await conn.sendMessage(m.chat, { react: { text: 'β±οΈ', key: m.key } })
if (!args || !args[0]) throw '*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π΄π½π»π°π²π΄ / π»πΈπ½πΊ π³π΄ ππ½ ππΈπ³π΄πΎ π³π΄ ππΎππππ±π΄*'
try {
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSize
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
conn.sendFile(m.chat, source, title + '.mp3', `
*π₯ ππΈπππ»πΎ:* ${title}
`.trim(), m, null, {
asDocument: chat.useDocument
})
}catch(e){
m.reply('*[βππππβ] π΄πππΎπ π°π» π΄π½ππΈπ°π π΄π» π°ππ²π·πΈππΎ.. π΄πππΎ ππ΄ πΏππ΄π³π΄ π³π΄π±π΄π π° πππ΄ π΄π» π°ππ³πΈπΎ π΄π π³π΄ ππ½ πΏπ΄ππΎ / ππ°πΌπ°π½ΜπΎ πΆππ°π½π³π΄*')
console.log(e)
}}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
export default handler
