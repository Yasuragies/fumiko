const request = require('request');
const {MessageEmbed} = require ('discord.js');

module.exports = {
    name: 'dog',
    description: 'random dog picts from dog.ceo',
    async execute(message,){
        request.get('https://dog.ceo/api/breeds/image/random',{
    },function(error, response, body) {
        if(!error && response.statusCode == 200 ){
            var parsedData = JSON.parse(body);
            const embed = new MessageEmbed()
            .setTitle("Random Doggo")
            .setImage(parsedData.message)
            .setColor(0xffabd7)
            message.channel.send(embed)
        }else {
            console.log(error);
        }
    })
    
    }
}