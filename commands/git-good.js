const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const nerd = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Skill Issue')
	.setAuthor({ name: 'Ligma Balls'})
	.setDescription("May I suggest practicing?")
	.setThumbnail('https://i.imgur.com/2M3TtSD.gif')
	.addField('Whatever', 'Not original', true)
	.setImage('https://i.imgur.com/2M3TtSD.gif')
	.setFooter({ text: "Please don't hurt me."});


module.exports = {
	data: new SlashCommandBuilder()
		.setName('git-good')
		.setDescription('nerd'),
	async execute(interaction) {
		return interaction.reply({embeds: [nerd] });
	},
};
