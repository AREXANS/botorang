let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `No hay votaciones  en este grupo!`, author, null, [
    ['π©π’π§ππ₯', `${usedPrefix}votar`],
    ['π ππ‘π¨', `${usedPrefix}menu`]
], m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Ya has votado!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    
    let [reason, upvote, devote] = conn.vote[id]
    
await conn.sendButton(m.chat, `γ *VotaciΓ³n* γ
*Razon:* ${reason}
*VOTOS A FAVOR*
_Total: ${upvote.length}_
${upvote.map((v, i) => `β’ ${i + 1}.  @${v.split`@`[0]}`).join('\n')}

*VOTOS EN CONTRA*
_Total: ${devote.length}_
${devote.map((v, i) => `β’ ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
    `.trim(), author, null, [
        ['π©π’π§π’ π πππ©π’π₯', `${usedPrefix}upvote`],
        ['π©π’π§π’ ππ‘ ππ’π‘π§π₯π', `${usedPrefix}devote`]
    ], m)
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i

export default handler
