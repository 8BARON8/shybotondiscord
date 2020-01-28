module.exports.run = async (bot,message,args)  => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author.username}, приветствует вас! 🔊<@&669637548989087769>, мне скучно. Залетайте поговорим)`)
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser
    if (member) argsUser = member.user
    else argsUser = message.author
    let content = args.slice(0).join(' ')
    if (!content) return message.channel.send(`<@!${argsUser.id}>, приветствует вас! 🔊<@&669637548989087769>, мне скучно. Залетайте поговорим)`)
    await message.channel.send(content)
    await message.delete()
}

module.exports.help = {
    name: 'voice'
};