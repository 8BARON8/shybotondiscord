module.exports.run = async (bot,message,args)  => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author.username}, приветствует вас! Хочешь увидеть пламя огня у <@!277400598637314050>, тебе сюда➡️<@&669625209283936280>`)
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser
    if (member) argsUser = member.user
    else argsUser = message.author
    let content = args.slice(0).join(' ')
    if (!content) return message.channel.send(`<@!${argsUser.id}>, приветствует вас! Хочешь увидеть пламя огня у <@!277400598637314050>, тебе сюда➡️<@&669625209283936280>`)
    await message.channel.send(content)
    await message.delete()
}

module.exports.help = {
    name: 'ds'
};