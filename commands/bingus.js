const bingus =["https://media.discordapp.net/attachments/748780918067691582/810331948215566336/6tqnyhodlb861.jpg?width=559&height=552",
 "https://media.discordapp.net/attachments/748780918067691582/810331982743076884/Hi_Bingus.png",
"https://media.discordapp.net/attachments/748780918067691582/810332004439556116/EovwM_CWMAEB_BZ.jpg?width=516&height=552",
"https://media.discordapp.net/attachments/748780918067691582/810332015060451328/l58auzpyw5p51.jpg?width=589&height=551",
"https://media.discordapp.net/attachments/748780918067691582/810332024577196053/gvzyqWI.jpg?width=457&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810349102097104897/image0.png?width=489&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810349102357282816/image1.png?width=573&height=552",
"https://cdn.discordapp.com/attachments/775500327079903252/810349102659010580/image2.png",
"https://media.discordapp.net/attachments/775500327079903252/810348912690855946/image0.png",
"https://media.discordapp.net/attachments/775500327079903252/810349855238389780/image0.png?width=572&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810350131386908712/image0.png?width=581&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810350131941474324/image1.png?width=584&height=552",
"https://media.tenor.co/videos/f0870b1ec2ff020ed3a2f41438617d42/mp4",
"https://media.tenor.co/videos/d51510fe78a434d7e5ae79e7b4e32a76/mp4",
"https://media.discordapp.net/attachments/775500327079903252/810566495469699072/image0.png?width=545&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566495745867816/image1.png?width=545&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566496031342602/image2.png?width=672&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566496307773440/image3.png?width=574&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566496598228992/image4.png?width=563&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566496962740274/image5.png?width=563&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566497276788756/image6.png?width=571&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566497276788756/image6.png?width=571&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566497562394634/image7.png?width=581&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566497918386216/image8.png?width=1005&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566498187870248/image9.png?width=860&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566515807617044/image0.png?width=475&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566516218527784/image1.png?width=555&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566516499415051/image2.png?width=687&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566516823162920/image3.png?width=665&height=552",
"https://media.discordapp.net/attachments/775500327079903252/810566517191082055/image4.png?width=573&height=552",
"https://media.discordapp.net/attachments/775500327079903252/811856287482118144/9m5ra38b5xf61.png?width=405&height=552",
"https://media.discordapp.net/attachments/775500327079903252/811856052785381376/zIR7Kq4.png?width=552&height=552",
"https://media.discordapp.net/attachments/775500327079903252/811856015041101854/tenor.png?width=310&height=552",
"https://media.discordapp.net/attachments/775500327079903252/811853977955336232/7e8131b49664cf619f1f7ac0fabf3a42.png?width=1040&height=551",
"https://media.discordapp.net/attachments/775500327079903252/814346711169630259/image0.png?width=575&height=562",
"https://media.discordapp.net/attachments/775500327079903252/814346711513169930/image1.png?width=570&height=562",
"https://tenor.com/view/douyin-lelemaoshe-sphynx-bingus-hairless-cat-gif-19416600",
"https://tenor.com/view/fast-gifs-bingus-hi-bingus-hey-bingus-aaaaaaaahhhhh-hi-bingus-gif-19211402",
"https://cdn.discordapp.com/attachments/775500327079903252/828363757313851392/image0.jpg"
]
module.exports = {
    name : 'bingus',
    description: 'random collections of bingus picts',
    execute(message){
        message.channel.send(bingus[Math.floor(Math.random()*bingus.length)]);
    }
}