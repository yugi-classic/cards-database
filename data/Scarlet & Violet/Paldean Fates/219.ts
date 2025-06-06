import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Clodsire ex",
		fr: "Terraiste de Paldea-ex",
		es: "Clodsire de Paldea ex",
		it: "Clodsire di Paldea-ex",
		pt: "Clodsire de Paldea ex",
		de: "Paldea-Suelord-ex"
	},

	rarity: "Shiny Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Toxic Wetland",
			fr: "Marécage Toxique",
			es: "Pantano Tóxico",
			it: "Palude Tossica",
			pt: "Brejo Tóxico",
			de: "Giftiges Sumpfgebiet"
		},

		effect: {
			en: "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
			fr: "Une fois pendant votre tour, si un Stade est en jeu, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné.",
			es: "Una vez durante tu turno, si hay un Estadio en juego, puedes dejar al Pokémon Activo de tu rival Envenenado.",
			it: "Una sola volta durante il tuo turno, se c'è in gioco una carta Stadio, puoi lasciare il Pokémon attivo del tuo avversario avvelenato.",
			pt: "Uma vez durante o seu turno, se um Estádio estiver em jogo, você poderá deixar o Pokémon Ativo do seu oponente Envenenado.",
			de: "Einmal während deines Zuges, wenn eine Stadionkarte im Spiel ist, kannst du das Aktive Pokémon deines Gegners vergiften."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Needle Bone",
			fr: "Os Piquant",
			es: "Hueso de Aguja",
			it: "Osso Acuminato",
			pt: "Agulha de Osso",
			de: "Nadelknochen"
		},

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
			fr: "Lancez une pièce. Si c'est pile, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "PLANETA Mochizuki"
}

export default card