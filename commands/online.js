const Discord = require('discord.js') // подключение discord.js к файлу

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed() // встроенное сообщение

    .addField('🚸Участники', `${message.guild.presences.size} в сети\n${message.guild.memberCount} всего`, true)
    .setColor('#9153f3') // цвет
    await message.channel.send(embed) // отправка в канал
}

module.exports.help = {
    name: 'online' // название команды
}