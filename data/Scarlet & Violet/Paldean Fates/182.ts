import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		de: "Sniebel"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
			es: "Hundir Garras",
			it: "Scavazanne",
			pt: "Fincar Garras",
			de: "Schaufelkrallen"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Kagemaru Himeno"
}

export default card