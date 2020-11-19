const Discord = require("discord.js")
const config = require("./config.json")
const client = new Discord.Client()

const prefix = '!'
// client.on('message', function(message){
//     if (message.author.bot) return;
//     if (!message.content.startsWith(prefix)) {
//         return
//     }    
//     const commandBody = message.content.slice(prefix.length)
//     const args = commandBody.split(' ')
//     const command = args.shift().toLocaleLowerCase()  
//     if (command==='ping') {
//         const timeTaken = Date.now() - message.createdTimestamp
//         message.reply(`Pong ! This is message had a latency of ${timeTaken}ms`)
//     }
//     else if (command ==='sum') {
//         const numArgs = args.map(x=> parseFloat(x))
//         const sum = numArgs.reduce((counter,x)=> counter +=x)
//         message.reply(`The sum of all the arguments you provides is ${sum}!`)
//     }
    
// })

client.on('ready', ()=> {
    console.log(`${client.user.tag} has logged in.`)
})
client.on('message',(message)=> {
    console.log(`[${message.author.tag}]: ${message.content}`)
    if (message.content ==='hello') {
        message.reply('hello there!')
    }
    else if (message.content === 'chao sy') {
        message.reply('chao a sy dep trai')
    }
    else if (message.content === 'chao truong') {
        message.reply('chao a truong dep trai')
    }
    else if (message.content === 'lol') {
        message.reply('cam chui bay trong kenh nay')
    }
    else if (message.content === 'dit me lol thay tuan') {
        message.reply('chui nhu the thi dk')
    }

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) {
        return
    }    
    const commandBody = message.content.slice(prefix.length)
    const args = commandBody.split(' ')
    const command = args.shift().toLocaleLowerCase()  
    if (command==='ping') {
        const timeTaken = Date.now() - message.createdTimestamp
        message.reply(`Pong ! This is message had a latency of ${timeTaken}ms`)
    }
    else if (command ==='sum') {
        const numArgs = args.map(x=> parseFloat(x))
        const sum = numArgs.reduce((counter,x)=> counter +=x)
        message.reply(`The sum of all the arguments you provides is ${sum}!`)
    }
})


client.login(config.BOT_TOKEN)