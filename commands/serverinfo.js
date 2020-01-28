const Discord = require('discord.js') // подключение discord.js к файлу

module.exports.run = async (bot, message, args) => {
    let verifilv = ['Отсутствует', 'Низкий', 'Средний', 'Высокий', 'Очень высокий']
    let embed = new Discord.RichEmbed() // встроенное сообщение
        .setAuthor(message.guild.name, message.guild.iconURL) // параметры: имя: string, картинка: string, url: string
        .addField('🤵🏻Владелец', message.guild.owner, true) // параметры: название: string, значение: string, в линию?: boolean (true, false)
        .addField('🧾ID', message.guild.id, true)
        
        .addField('🚸Участники', `${message.guild.presences.size} в сети\n${message.guild.memberCount} всего`, true)
        .addField('📚Каналы', `${message.guild.channels.filter(c => c.type == 'text').size} текстовых\n${message.guild.channels.filter(c => c.type == 'voice').size} голосовых`, true)
        .addField('⚙️Уровень проверки', verifilv[message.guild.verificationLevel], true)
        .addField('AFK Канал', message.guild.afkChannel.name, true)
        .addField('🎎Ролей', message.guild.roles.size, true)
        .addField('😁Смайликов', message.guild.emojis.size, true)
        .setFooter('🛠Сервер создан') // параметры: текст: string, картинка: string
        .setTimestamp(new Date(message.guild.createdTimestamp)) // конверт времени
        .setColor('#9153f3') // цвет
    await message.channel.send(embed) // отправка в канал
}

module.exports.help = {
    name: 'serverinfo' // название команды
}
