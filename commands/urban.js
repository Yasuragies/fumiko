const {MessageEmbed} = require ('discord.js');
const querystring = require('querystring');
const fetch = require('node-fetch');


module.exports = {
    name: 'urban',
    aliases:['def','define','df'],
    description: 'search from urban dictionary',
    async execute(message, args){
        
        if(!args.length){
            return message.channel.send('you need to type what you are looking for');
          }
          const query = querystring.stringify({ term: args.join(' ')});
          const {list} = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(
            response => response.json()
          );
          if(!list.length){
            return message.channel.send(`no results found for ${args.join(' ')}**.`);
          }
          /* embed for urban */
          const trim = (str, max) => ((str.length>max) ? `${str.slice(0, max - 3)}...` : str);
          const [answer] = list;
          const embed = new MessageEmbed()
          .setColor(0xffabd7)
          .setTitle(answer.word)
          .setURL(answer.permalink)
          .addFields(
            { name: 'Definition', value: trim(answer.definition, 1024)},
            { name: 'Example', value: trim(answer.example, 1024)},
            { name: 'Rating', value: `👍 ${answer.thumbs_up}. 👎 ${answer.thumbs_down}.`}
          )
          .setFooter('retreived from urban dictionary')
          message.channel.send(embed)
        }

    }