import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [246],
	set: Set,

	name: {
		fr: "Embrylex",
		en: "Larvitar",
		es: "Larvitar",
		it: "Larvitar",
		pt: "Larvitar",
		de: "Larvitar"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Poing Tire-Bouchon",
			en: "Corkscrew Punch",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			de: "Korkenzieherhieb"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Confrontation",
			en: "Confront",
			es: "Confrontar",
			it: "Confronto",
			pt: "Confrontar",
			de: "Konfrontieren"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Miki Tanaka"
}

export default card