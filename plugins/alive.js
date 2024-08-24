const config = require('../config')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "Check uptime, RAM usage, and more",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        let status = `*𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲 𝗡𝗼𝘄 ♥*
*𝚃𝚛𝚢 𝚃𝚑𝚒𝚜 ⤵*

.ai (Your question)
_example - .ai Hey_

*Support Us ⤵*
𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 - https://whatsapp.com/channel/0029ValK0gn4SpkP6iaXoj2y
𝚈𝚘𝚞𝚝𝚞𝚋𝚎 - https://youtube.com/@dila_lk
𝚆𝚎𝚋 𝚂𝚒𝚝𝚎 - dilalk.vercel.app

RAM ${usedRAM} MB
${runtime(process.uptime())}
ᴍᴀᴅᴇ ʙʏ ᴍʀᴅɪʟᴀ`

        // URL of the image you want to include
        const imageUrl = 'https://telegra.ph/file/dcd097f9f7a124d47e5b2.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });
        
   await conn.sendMessage(from, { audio: { url: 'https://drive.google.com/uc?export=download&id=1XZ6bF15m4V3VPXMdt0d2gBTJwLh8Xby7' }, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: mek });

 } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
})