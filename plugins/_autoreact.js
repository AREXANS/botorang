let handler = async (m, { conn }) => {
let emot = pickRandom([ "🥵", "😎", "😘", "😻", "😼", "🤩", "🥰", "😘", "😊", "🥳", "😏", "😳", "🤫", "🥴", "🤧", "🤑", "🤫", "🤖", "🥶", "😚", "⚡️", "🌝", "🌚", "🌛", "🌜", "🤝🏻", "👊🏻", "💪🏻", "🖕🏻", "👑", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "🛐", "✅", "👻", "🔥"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /adri bot|botadri|adribot|bot Adri|adri|@34642467703/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]} 
