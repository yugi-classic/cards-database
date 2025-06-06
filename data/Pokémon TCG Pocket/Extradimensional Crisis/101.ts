import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Aerodactyl ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Old Amber"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Primeval Law"
		},

		effect: {
			en: "Your opponent can't play any Pokémon from their hand to evolve their Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Land Crush"
		},

		damage: 80,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Shiny"
}

export default card