import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		fr: "Dracaufeu-ex",
		en: "Charizard ex",
		es: "Charizard ex",
		it: "Charizard-ex",
		pt: "Charizard ex",
		de: "Glurak-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Règne Infernal",
			en: "Infernal Reign",
			es: "Reino Infernal",
			it: "Regno Infernale",
			pt: "Reino Infernal",
			de: "Infernalische Herrschaft"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 3 cartes Énergie {R} de base et les attacher à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 3 Basic {R} Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes buscar en tu baraja hasta 3 cartas de Energía {R} Básica y unirlas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi cercare nel tuo mazzo fino a tre carte Energia base {R} e assegnarle ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá procurar por até 3 cartas de Energia {R} Básica no seu baralho e ligá-las aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du dein Deck nach bis zu 3 Basis-{R}-Energiekarten durchsuchen und sie beliebig an deine Pokémon anlegen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			fr: "Obscurité Brûlante",
			en: "Burning Darkness",
			es: "Oscuridad Ardiente",
			it: "Oscurità Infuocata",
			pt: "Escuridão Ardente",
			de: "Brennende Finsternis"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			en: "This attack does 30 more damage for each Prize card your opponent has taken.",
			es: "Este ataque hace 30 puntos de daño más por cada carta de Premio que haya cogido tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni carta Premio presa dal tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu."
		},

		damage: "180+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "5ban Graphics"
}

export default card