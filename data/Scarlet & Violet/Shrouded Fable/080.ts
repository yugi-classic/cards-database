import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Kingdra ex",
		fr: "Hyporoi-ex",
		es: "Kingdra ex",
		it: "Kingdra-ex",
		pt: "Kingdra ex",
		de: "Seedraking-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "King's Order",
			fr: "Ordre du Roi",
			es: "Mandato Real",
			it: "Ordine Sovrano",
			pt: "Decreto do Rei",
			de: "Auftrag des Königs"
		},

		effect: {
			en: "Put up to 3 {W} Pokémon from your discard pile onto your Bench.",
			fr: "Placez jusqu'à 3 Pokémon {W} de votre pile de défausse sur votre Banc.",
			es: "Pon hasta 3 Pokémon {W} de tu pila de descartes en tu Banca.",
			it: "Prendi fino a tre Pokémon {W} dalla tua pila degli scarti e mettili nella tua panchina.",
			pt: "Coloque até 3 Pokémon {W} da sua pilha de descarte no seu Banco.",
			de: "Lege bis zu 3 {W}-Pokémon aus deinem Ablagestapel auf deine Bank."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			it: "Idropompa",
			pt: "Jato d'Água",
			de: "Hydropumpe"
		},

		effect: {
			en: "This attack does 50 more damage for each {W} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia {W} ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "PLANETA Igarashi"
}

export default card
