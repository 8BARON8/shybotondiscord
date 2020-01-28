module.exports.run = async (bot,message,args)  => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Уважаемая модерация сервера <@&614397579417092099>, предлагает тебе вступить в SteamGroup ֎J7֎, это профессиональная команда в CS:GO💣... Дерзай! https://steamcommunity.com/groups/juiceseven`)

    let content = args.slice(0).join(' ')
    if (!content) return message.channel.send("Уважаемая модерация сервера <@&614397579417092099>, предлагает тебе вступить в SteamGroup ֎J7֎, это профессиональная команда в CS:GO💣... Дерзай! https://steamcommunity.com/groups/juiceseven")
    await message.channel.send(content)
    await message.delete()
}

module.exports.help = {
    name: 'pj7'
};