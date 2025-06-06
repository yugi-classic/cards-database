import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Miraidon ex",
		fr: "Miraidon-ex",
		es: "Miraidon ex",
		it: "Miraidon-ex",
		de: "Miraidon-ex",
		pt: "Miraidon ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tandem Unit",
			fr: "Unité Tandem",
			es: "Unidad Tándem",
			it: "Unità Duplice",
			de: "Tandem-Aggregat",
			pt: "Unidade Tandem"
		},

		effect: {
			en: "Once during your turn, you may search your deck for up to 2 Basic {L} Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 Pokémon {L} de base, puis les placer sur votre Banc. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 Pokémon {L} Básicos y ponerlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due Pokémon Base {L} e metterli nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			de: "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Basis-{L}-Pokémon durchsuchen und sie auf deine Bank legen. Mische anschließend dein Deck.",
			pt: "Uma vez durante o seu turno, você poderá procurar por até 2 Pokémon {L} Básicos no seu baralho e colocá-los no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Photon Blaster",
			fr: "Réacteur à Photons",
			es: "Cohete Fotónico",
			it: "Esplosione Fotonica",
			de: "Photonenblaster",
			pt: "Detonador de Fótons"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 220
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics"
}

export default card