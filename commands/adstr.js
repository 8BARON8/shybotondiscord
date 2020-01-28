module.exports.run = async (bot,message,args)  => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`В данный момент проводится лапувый стримчик, советую присоединиться в 🌐STREAM❗❗❗. Дабы классно провести время🕯👨🏻`)

    let content = args.slice(0).join(' ')
    if (!content) return message.channel.send(`В данный момент проводится лампувый стримчик, советую присоединиться в 🌐STREAM. Дабы классно провести время🕯👨🏻`)
    await message.delete()
    await message.channel.send(content)
}

module.exports.help = {
    name: 'adstr'
};