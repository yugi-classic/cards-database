import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Bloodmoon Ursaluna",
		fr: "Ursaking Lune Vermeille",
		es: "Ursaluna Luna Carmesí",
		pt: "Ursaluna Lua Sangrenta",
		it: "Ursaluna Luna Cremisi",
		de: "Blutmond-Ursaluna"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Battle-Hardened",
			fr: "Aguerri au Combat",
			es: "Veteranía en Combate",
			pt: "Bom de Briga",
			it: "Temprato dalla Lotta",
			de: "Kampferprobt"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Basic {F} Energy cards from your hand to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {F} de base de votre main à ce Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía {F} Básica de tu mano a este Pokémon.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá ligar até 2 cartas de Energia {F} Básica da sua mão a este Pokémon.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia base {F} dalla tua mano.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 Basis-{F}-Energiekarten aus deiner Hand an dieses Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Mad Bite",
			fr: "Morsure Enragée",
			es: "Mordisco Enloquecido",
			pt: "Mordida Insana",
			it: "Impazzamorso",
			de: "Irrer Biss"
		},

		effect: {
			en: "This attack does 30 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			it: "Questo attacco infligge 30 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			de: "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "Souichirou Gunjima"
}

export default card