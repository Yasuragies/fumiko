const coin = ["head", "tail"];

module.exports = {
    name : 'flip',
    description: 'flip a coin',
    execute(message){
        message.channel.send(coin[Math.floor(Math.random()*coin.length)]);
    }
}