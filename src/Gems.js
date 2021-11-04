const gemArray = [
	{
		name: 'Accurate Ametrine ',
		stats: '+10 Expertise Rating +10 Hit Rating ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Accurate Huge Citrine ',
		stats: '+6 Expertise Rating +6 Hit Rating ',
		source: 'Trainer ',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Accurate Monarch Topaz ',
		stats: '+8 Expertise Rating +8 Hit Rating ',
		source: 'Storm Peaks mammoths ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Balanced Dreadstone ',
		stats: '+20 Attack Power +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Balanced Shadow Crystal ',
		stats: '+12 Attack Power +9 Stamina ',
		source: 'Trainer ',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Balanced Twilight Opal ',
		stats: '+16 Attack Power +12 Stamina ',
		source: 'Trainer ',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: 'Bold Bloodstone ',
		stats: '+12 Strength ',
		source: 'Trainer ',
		color: 'Red',
		quality: 'Uncommon',
		image: require('./images/Bloodstone.png').default
	},
	{
		name: 'Bold Cardinal Ruby ',
		stats: '+20 Strength ',
		source: 'Timothy Jones ',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: 'Bold Scarlet Ruby ',
		stats: '+16 Strength ',
		source: 'Tiffany Cartier ',
		color: 'Red',
		quality: 'Rare',
		image: require('./images/Scarlet_Ruby.png').default
	},
	{
		name: 'Bold Stormjewel ',
		stats: '+20 Strength ',
		source: 'Bag of Fishing Treasures ',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: 'Bright Bloodstone ',
		stats: '+24 Attack Power ',
		source: 'Trainer ',
		color: 'Red',
		quality: 'Uncommon',
		image: require('./images/Bloodstone.png').default
	},
	{
		name: 'Bright Cardinal Ruby ',
		stats: '+40 Attack Power ',
		source: 'Timothy Jones ',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: 'Bright Scarlet Ruby ',
		stats: '+32 Attack Power ',
		source: 'Trainer ',
		color: 'Red',
		quality: 'Rare',
		image: require('./images/Scarlet_Ruby.png').default
	},
	{
		name: "Brilliant Autumn's Glow ",
		stats: '+16 Intellect ',
		source: 'Trainer ',
		color: 'Yellow',
		quality: 'Rare',
		image: require('./images/Autumns_Glow.png').default
	},
	{
		name: "Brilliant King's Amber ",
		stats: '+20 Intellect ',
		source: 'Timothy Jones ',
		color: 'Yellow',
		quality: 'Epic',
		image: require('./images/Kings_Amber.png').default
	},
	{
		name: 'Brilliant Stormjewel ',
		stats: '+20 Intellect ',
		source: 'Bag of Fishing Treasures ',
		color: 'Yellow',
		quality: 'Epic',
		image: require('./images/Kings_Amber.png').default
	},
	{
		name: 'Brilliant Sun Crystal ',
		stats: '+12 Intellect ',
		source: 'Trainer ',
		color: 'Yellow',
		quality: 'Uncommon',
		image: require('./images/Sun_Crystal.png').default
	},
	{
		name: "Champion's Ametrine ",
		stats: '+10 Strength +10 Defense Rating ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: "Champion's Huge Citrine ",
		stats: '+6 Strength +6 Defense Rating ',
		source: 'Trainer ',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: "Champion's Monarch Topaz ",
		stats: '+8 Strength +8 Defense Rating ',
		source: 'World Drop ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Dazzling Dark Jade ',
		stats: '+6 Intellect +3 Mp5 ',
		source: 'Trainer',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Dazzling Eye of Zul ',
		stats: '+10 Intellect +5 Mp5 ',
		source: 'Timothy Jones',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Dazzling Forest Emerald ',
		stats: '+8 Intellect +4 Mp5 ',
		source: 'Trainer',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Deadly Ametrine ',
		stats: '+10 Agility +10 Critical Strike Rating ',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Deadly Huge Citrine ',
		stats: '+6 Agility +6 Critical Strike Rating ',
		source: 'Knights of the Ebon Blade',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Deadly Monarch Topaz ',
		stats: '+8 Agility +8 Critical Strike Rating ',
		source: 'Keristrasza',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: "Defender's Dreadstone ",
		stats: '+10 Parry Rating +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: "Defender's Shadow Crystal ",
		stats: '+6 Parry Rating +9 Stamina ',
		source: "Kalu'ak ",
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: "Defender's Twilight Opal ",
		stats: '+8 Parry Rating +12 Stamina ',
		source: 'Storm Peaks iron dwarves ',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: 'Deft Ametrine ',
		stats: '+10 Agility +10 Haste Rating ',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Deft Huge Citrine ',
		stats: '+6 Agility +6 Haste Rating ',
		source: 'Trainer',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Deft Monarch Topaz ',
		stats: '+8 Agility +8 Haste Rating ',
		source: 'Sjonnir the Ironshaper',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Delicate Bloodstone ',
		stats: '+12 Agility ',
		source: 'Trainer ',
		color: 'Red',
		quality: 'Uncommon',
		image: require('./images/Bloodstone.png').default
	},
	{
		name: 'Delicate Cardinal Ruby ',
		stats: '+20 Agility ',
		source: 'Timothy Jones ',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: 'Delicate Scarlet Ruby ',
		stats: '+16 Agility ',
		source: 'Tiffany Cartier ',
		color: 'Red',
		quality: 'Rare',
		image: require('./images/Scarlet_Ruby.png').default
	},
	{
		name: 'Delicate Stormjewel ',
		stats: '+20 Agility ',
		source: 'Bag of Fishing Treasures ',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: 'Durable Ametrine ',
		stats: '+12 Spell Power +10 Resilience Rating ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Durable Huge Citrine ',
		stats: '+7 Spell Power +6 Resilience Rating ',
		source: "(A)Captain O'Neal (H)Lady Palanseer ",
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Durable Monarch Topaz ',
		stats: '+9 Spell Power +8 Resilience Rating ',
		source: 'Wintergrasp ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Empowered Ametrine ',
		stats: '+20 Attack Power +10 Resilience Rating',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Empowered Huge Citrine ',
		stats: '+12 Attack Power +6 Resilience Rating ',
		source: "(A)Captain O'Neal (H)Lady Palanseer",
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Empowered Monarch Topaz ',
		stats: '+16 Attack Power +8 Resilience Rating',
		source: 'Wintergrasp',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Enduring Dark Jade ',
		stats: '+6 Defense Rating +9 Stamina ',
		source: 'Trainer ',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Enduring Eye of Zul ',
		stats: '+10 Defense Rating +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Enduring Forest Emerald ',
		stats: '+8 Defense Rating +12 Stamina ',
		source: 'Tiffany Cartier ',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Energized Dark Jade ',
		stats: '+6 Haste Rating +3 Mp5 ',
		source: 'Trainer',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Energized Eye of Zul ',
		stats: '+10 Haste Rating +5 Mp5 ',
		source: 'Timothy Jones',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Energized Forest Emerald ',
		stats: '+8 Haste Rating +4 Mp5 ',
		source: 'Tiffany Cartier',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Etched Ametrine ',
		stats: '+10 Strength +10 Hit Rating ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Etched Huge Citrine ',
		stats: '+6 Strength +6 Hit Rating ',
		source: 'Trainer ',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Etched Monarch Topaz ',
		stats: '+8 Strength +8 Hit Rating ',
		source: 'World Drop ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Fierce Ametrine ',
		stats: '+10 Strength +10 Haste Rating ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Fierce Huge Citrine ',
		stats: '+6 Strength +6 Haste Rating ',
		source: 'Trainer ',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Fierce Monarch Topaz ',
		stats: '+8 Strength +8 Haste Rating ',
		source: 'Ingvar the Plunderer ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Flashing Bloodstone ',
		stats: '+12 Parry Rating',
		source: 'Trainer',
		color: 'Red',
		quality: 'Uncommon',
		image: require('./images/Bloodstone.png').default
	},
	{
		name: 'Flashing Cardinal Ruby ',
		stats: '+20 Parry Rating ',
		source: 'Timothy Jones',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: 'Flashing Scarlet Ruby ',
		stats: '+16 Parry Rating ',
		source: 'Tiffany Cartier',
		color: 'Red',
		quality: 'Rare',
		image: require('./images/Scarlet_Ruby.png').default
	},
	{
		name: 'Forceful Dark Jade ',
		stats: '+6 Haste Rating +9 Stamina ',
		source: 'Trainer ',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Forceful Eye of Zul ',
		stats: '+10 Haste Rating +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Forceful Forest Emerald ',
		stats: '+8 Haste Rating +12 Stamina ',
		source: 'Tiffany Cartier ',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Fractured Bloodstone ',
		stats: '+12 Armor Penetration Rating',
		source: 'Trainer',
		color: 'Red',
		quality: 'Uncommon',
		image: require('./images/Bloodstone.png').default
	},
	{
		name: 'Fractured Cardinal Ruby ',
		stats: '+20 Armor Penetration Rating ',
		source: 'Timothy Jones',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: 'Fractured Scarlet Ruby ',
		stats: '+16 Armor Penetration Rating ',
		source: "Nascent Val'kyr",
		color: 'Red',
		quality: 'Rare',
		image: require('./images/Scarlet_Ruby.png').default
	},
	{
		name: 'Glimmering Ametrine ',
		stats: '+10 Parry +10 Defense Rating ',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Glimmering Huge Citrine ',
		stats: '+6 Parry +6 Defense Rating ',
		source: 'Trainer',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Glimmering Monarch Topaz ',
		stats: '+8 Parry +8 Defense Rating ',
		source: 'Wyrmrest Accord',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Glinting Ametrine ',
		stats: '+10 Agility +10 Hit Rating ',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Glinting Huge Citrine ',
		stats: '+6 Agility +6 Hit Rating ',
		source: 'Trainer',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Glinting Monarch Topaz ',
		stats: '+8 Agility +8 Hit Rating ',
		source: 'Tiffany Cartier',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Glowing Dreadstone ',
		stats: '+12 Spell Power +15 Stamina ',
		source: 'Timothy Jones',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Glowing Shadow Crystal ',
		stats: '+7 Spell Power +9 Stamina ',
		source: 'Trainer',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Glowing Twilight Opal ',
		stats: '+9 Spell Power +12 Stamina ',
		source: 'Knights of the Ebon Blade',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: "Guardian's Dreadstone ",
		stats: '+10 Expertise   +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: "Guardian's Shadow Crystal ",
		stats: '+6 Expertise   +9 Stamina ',
		source: 'Trainer ',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: "Guardian's Twilight Opal ",
		stats: '+8 Expertise   +12 Stamina ',
		source: 'Argent Crusade ',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: 'Infused Dreadstone ',
		stats: '+20 Attack Power +5 Mp5 ',
		source: 'Timothy Jones',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Infused Shadow Crystal ',
		stats: '+12 Attack Power +3 Mp5 ',
		source: 'Trainer',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Infused Twilight Opal ',
		stats: '+16 Attack Power +4 Mp5 ',
		source: "Anub'arak",
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: 'Inscribed Ametrine ',
		stats: '+10 Strength +10 Critical Strike Rating ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Inscribed Huge Citrine ',
		stats: '+6 Strength +6 Critical Strike Rating ',
		source: 'Trainer ',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Inscribed Monarch Topaz ',
		stats: '+8 Strength +8 Critical Strike Rating ',
		source: 'World Drop ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Intricate Dark Jade ',
		stats: '+6 Haste Rating +6 Spirit ',
		source: 'Trainer',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Intricate Eye of Zul ',
		stats: '+10 Haste Rating +10 Spirit ',
		source: 'Timothy Jones',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Intricate Forest Emerald ',
		stats: '+8 Haste Rating +8 Spirit ',
		source: 'Tiffany Cartier',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Jagged Dark Jade ',
		stats: '+6 Critical Strike Rating +9 Stamina ',
		source: 'Trainer ',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Jagged Eye of Zul ',
		stats: '+10 Critical Strike Rating +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Jagged Forest Emerald ',
		stats: '+8 Critical Strike Rating +12 Stamina ',
		source: 'Frenzyheart ',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: "Kharmaa's Grace ",
		stats: '+20 Resilience Rating',
		source: 'Wintergrasp ',
		color: 'Yellow',
		quality: 'Epic',
		image: require('./images/Bloodstone.png').default
	},
	{
		name: 'Lambent Dark Jade ',
		stats: '+6 Hit Rating +3 Mp5 ',
		source: 'Trainer',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Lambent Eye of Zul ',
		stats: '+10 Hit Rating +5 Mp5 ',
		source: 'Timothy Jones',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Lambent Forest Emerald ',
		stats: '+8 Hit Rating +4 Mp5 ',
		source: 'Tiffany Cartier',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Lucent Ametrine ',
		stats: '+10 Agility +10 Resilience Rating ',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Lucent Huge Citrine ',
		stats: '+6 Agility +6 Resilience Rating ',
		source: "(A)Captain O'Neal (H)Lady Palanseer",
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Lucent Monarch Topaz ',
		stats: '+8 Agility +8 Resilience Rating ',
		source: 'Wintergrasp',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Luminous Ametrine ',
		stats: '+12 Spell Power +10 Intellect ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Luminous Huge Citrine ',
		stats: '+7 Spell Power +6 Intellect ',
		source: 'Trainer ',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Luminous Monarch Topaz ',
		stats: '+9 Spell Power +8 Intellect ',
		source: 'Tiffany Cartier ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Lustrous Chalcedony ',
		stats: '+6 Mp5  ',
		source: 'Trainer ',
		color: 'Blue',
		quality: 'Uncommon',
		image: require('./images/Chalcedony.png').default
	},
	{
		name: 'Lustrous Majestic Zircon ',
		stats: '+10 Mp5  ',
		source: 'Timothy Jones ',
		color: 'Blue',
		quality: 'Epic',
		image: require('./images/Majestic_Zircon.png').default
	},
	{
		name: 'Lustrous Sky Sapphire ',
		stats: '+8 Mp5  ',
		source: 'Tiffany Cartier ',
		color: 'Blue',
		quality: 'Rare',
		image: require('./images/Sky_Sapphire.png').default
	},
	{
		name: 'Misty Dark Jade ',
		stats: '+6 Critical Strike Rating +6 Spirit ',
		source: 'Trainer',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Misty Eye of Zul ',
		stats: '+10 Critical Strike Rating +10 Spirit ',
		source: 'Timothy Jones',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Misty Forest Emerald ',
		stats: '+8 Critical Strike Rating +8 Spirit ',
		source: 'World Drop',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Mysterious Dreadstone ',
		stats: '+12 Spell Power +13 Spell Penetration ',
		source: 'Timothy Jones',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Mysterious Shadow Crystal ',
		stats: '+7 Spell Power +8 Spell Penetration ',
		source: "(A)Captain O'Neal (H)Lady Palanseer",
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Mysterious Twilight Opal ',
		stats: '+9 Spell Power +10 Spell Penetration ',
		source: 'Wintergrasp',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: "Mystic Autumn's Glow ",
		stats: '+16 Resilience Rating',
		source: 'Wintergrasp ',
		color: 'Yellow',
		quality: 'Rare',
		image: require('./images/Autumns_Glow.png').default
	},
	{
		name: "Mystic King's Amber ",
		stats: '+20 Resilience Rating',
		source: 'Timothy Jones ',
		color: 'Yellow',
		quality: 'Epic',
		image: require('./images/Kings_Amber.png').default
	},
	{
		name: 'Mystic Sun Crystal ',
		stats: '+12 Resilience Rating',
		source: "(A)Captain O'Neal (H)Lady Palanseer ",
		color: 'Yellow',
		quality: 'Uncommon',
		image: require('./images/Sun_Crystal.png').default
	},
	{
		name: 'Opaque Dark Jade ',
		stats: '+6 Resilience   +3 Mp5 ',
		source: "(A)Captain O'Neal (H)Lady Palanseer",
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Opaque Eye of Zul ',
		stats: '+10 Resilience   +5 Mp5 ',
		source: 'Timothy Jones',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Opaque Forest Emerald ',
		stats: '+8 Resilience   +4 Mp5 ',
		source: 'Wintergrasp',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Perfect Accurate Huge Citrine ',
		stats: '+7 Expertise Rating +7 Hit Rating ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Balanced Shadow Crystal ',
		stats: '+14 Attack Power +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Bold Bloodstone ',
		stats: '+14 Strength ',
		source: 'Gem Perfection ',
		color: 'Red',
		quality: 'Perfect',
		image: require('./images/Perfect_Bloodstone.png').default
	},
	{
		name: 'Perfect Bright Bloodstone ',
		stats: '+26 Attack Power ',
		source: 'Gem Perfection ',
		color: 'Red',
		quality: 'Perfect',
		image: require('./images/Perfect_Bloodstone.png').default
	},
	{
		name: 'Perfect Brilliant Sun Crystal ',
		stats: '+14 Intellect ',
		source: 'Gem Perfection ',
		color: 'Yellow',
		quality: 'Perfect',
		image: require('./images/Perfect_Sun_Crystal.png').default
	},
	{
		name: "Perfect Champion's Huge Citrine ",
		stats: '+7 Strength +7 Defense Rating ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Dazzling Dark Jade ',
		stats: '+7 Intellect +4 Mp5 ',
		source: 'Gem Perfection',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Deadly Huge Citrine ',
		stats: '+7 Agility +7 Critical Strike Rating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: "Perfect Defender's Shadow Crystal ",
		stats: '+7 Parry Rating +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Deft Huge Citrine ',
		stats: '+7 Agility +7 HasteRating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Delicate Bloodstone ',
		stats: '+14 Agility ',
		source: 'Gem Perfection ',
		color: 'Red',
		quality: 'Perfect',
		image: require('./images/Perfect_Bloodstone.png').default
	},
	{
		name: 'Perfect Durable Huge Citrine ',
		stats: '+8 Spell Power +7 Resilience Rating ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Empowered Huge Citrine ',
		stats: '+14 Attack Power +7 Resilience Rating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Enduring Dark Jade ',
		stats: '+7 Defense Rating +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Energized Dark Jade ',
		stats: '+7 Haste Rating +4 Mp5 ',
		source: 'Gem Perfection',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Etched Huge Citrine ',
		stats: '+7 Strength +7 Hit Rating ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Fierce Huge Citrine ',
		stats: '+7 Strength +7 Haste Rating ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Flashing Bloodstone ',
		stats: '+14 Parry Rating',
		source: 'Gem Perfection',
		color: 'Red',
		quality: 'Perfect',
		image: require('./images/Perfect_Bloodstone.png').default
	},
	{
		name: 'Perfect Forceful Dark Jade ',
		stats: '+7 Haste Rating +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Fractured Bloodstone ',
		stats: '+14 Armor Penetration Rating',
		source: 'Gem Perfection',
		color: 'Red',
		quality: 'Perfect',
		image: require('./images/Perfect_Bloodstone.png').default
	},
	{
		name: 'Perfect Glimmering Huge Citrine ',
		stats: '+7 Parry +7 Defense Rating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Glinting Huge Citrine ',
		stats: '+7 Agility +7 Hit Rating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Glowing Shadow Crystal ',
		stats: '+8 Spell Power +11 Stamina ',
		source: 'Gem Perfection',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: "Perfect Guardian's Shadow Crystal ",
		stats: '+7 Expertise   +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Infused Shadow Crystal ',
		stats: '+14 Attack Power +4 Mp5 ',
		source: 'Gem Perfection',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Inscribed Huge Citrine ',
		stats: '+7 Strength +7 Critical Strike Rating ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Intricate Dark Jade ',
		stats: '+7 Haste Rating +6 Spirit ',
		source: 'Gem Perfection',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Jagged Dark Jade ',
		stats: '+7 Critical Strike Rating +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Lambent Dark Jade ',
		stats: '+7 Hit Rating +4 Mp5 ',
		source: 'Gem Perfection',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Lucent Huge Citrine ',
		stats: '+7 Agility +7 Resilience Rating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Luminous Huge Citrine ',
		stats: '+8 Spell Power +7 Intellect ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Lustrous Chalcedony ',
		stats: '+7 Mp5  ',
		source: 'Gem Perfection ',
		color: 'Blue',
		quality: 'Perfect',
		image: require('./images/Perfect_Chalcedony.png').default
	},
	{
		name: 'Perfect Misty Dark Jade ',
		stats: '+7 Critical Strike Rating +7 Spirit ',
		source: 'Gem Perfection',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Mysterious Shadow Crystal ',
		stats: '+8 Spell Power +9 Spell Penetration ',
		source: 'Gem Perfection',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Mystic Sun Crystal ',
		stats: '+14 Resilience Rating',
		source: 'Gem Perfection ',
		color: 'Yellow',
		quality: 'Perfect',
		image: require('./images/Perfect_Sun_Crystal.png').default
	},
	{
		name: 'Perfect Opaque Dark Jade ',
		stats: '+7 Resilience   +4 Mp5 ',
		source: 'Gem Perfection',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Potent Huge Citrine ',
		stats: '+7 Spell Power +6 Critical Strike Rating ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Precise Bloodstone ',
		stats: '+14 Expertise Rating ',
		source: 'Gem Perfection',
		color: 'Red',
		quality: 'Perfect',
		image: require('./images/Perfect_Bloodstone.png').default
	},
	{
		name: 'Perfect Pristine Huge Citrine ',
		stats: '+14 Attack Power +7 Hit Rating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Puissant Shadow Crystal ',
		stats: '+7 Armor Penetration +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Purified Shadow Crystal ',
		stats: '+8 Spell Power +7 Spirit ',
		source: 'Gem Perfection',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Quick Sun Crystal ',
		stats: '+14 Haste Rating ',
		source: 'Gem Perfection ',
		color: 'Yellow',
		quality: 'Perfect',
		image: require('./images/Perfect_Sun_Crystal.png').default
	},
	{
		name: 'Perfect Radiant Dark Jade ',
		stats: '+7 Critical Strike Rating +9 Spell Penetration ',
		source: 'Gem Perfection ',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Reckless Huge Citrine ',
		stats: '+8 Spell Power +7 Haste Rating ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Regal Shadow Crystal ',
		stats: '+7 Dodge Rating +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Resolute Huge Citrine ',
		stats: '+7 Expertise   +7 Defense Rating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Resplendent Huge Citrine ',
		stats: '+7 Strength +7 Resilience Rating ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Rigid Sun Crystal ',
		stats: '+14 Hit Rating ',
		source: 'Gem Perfection',
		color: 'Yellow',
		quality: 'Perfect',
		image: require('./images/Perfect_Sun_Crystal.png').default
	},
	{
		name: 'Perfect Royal Shadow Crystal ',
		stats: '+8 Spell Power +4 Mp5 ',
		source: 'Gem Perfection',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Runed Bloodstone ',
		stats: '+16 Spell Power ',
		source: 'Gem Perfection',
		color: 'Red',
		quality: 'Perfect',
		image: require('./images/Perfect_Bloodstone.png').default
	},
	{
		name: "Perfect Seer's Dark Jade ",
		stats: '+7 Intellect +7 Spirit ',
		source: 'Gem Perfection',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Shattered Dark Jade ',
		stats: '+7 Haste Rating +9 Spell Penetration',
		source: 'Gem Perfection ',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Shifting Shadow Crystal ',
		stats: '+7 Agility +11 Stamina ',
		source: 'Gem Perfection',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Shining Dark Jade ',
		stats: '+7 Hit Rating +7 Spirit ',
		source: 'Gem Perfection',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Smooth Sun Crystal ',
		stats: '+14 Critical Strike Rating ',
		source: 'Gem Perfection',
		color: 'Yellow',
		quality: 'Perfect',
		image: require('./images/Perfect_Sun_Crystal.png').default
	},
	{
		name: 'Perfect Solid Chalcedony ',
		stats: '+21 Stamina ',
		source: 'Gem Perfection ',
		color: 'Blue',
		quality: 'Perfect',
		image: require('./images/Perfect_Chalcedony.png').default
	},
	{
		name: 'Perfect Sovereign Shadow Crystal ',
		stats: '+7 Strength +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Sparkling Chalcedony ',
		stats: '+14 Spirit ',
		source: 'Gem Perfection',
		color: 'Blue',
		quality: 'Perfect',
		image: require('./images/Perfect_Chalcedony.png').default
	},
	{
		name: 'Perfect Stalwart Huge Citrine ',
		stats: '+7 Dodge +7 Defense Rating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Stark Huge Citrine ',
		stats: '+14 Attack Power +7 Haste Rating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Steady Dark Jade ',
		stats: '+7 Resilience   +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Stormy Chalcedony ',
		stats: '+18 Spell Penetration  ',
		source: 'Gem Perfection',
		color: 'Blue',
		quality: 'Perfect',
		image: require('./images/Perfect_Chalcedony.png').default
	},
	{
		name: 'Perfect Subtle Bloodstone ',
		stats: '+14 dodge Rating ',
		source: 'Gem Perfection ',
		color: 'Red',
		quality: 'Perfect',
		image: require('./images/Perfect_Bloodstone.png').default
	},
	{
		name: 'Perfect Sundered Dark Jade ',
		stats: '+7 Critical Strike Rating +4 Mp5 ',
		source: 'Gem Perfection',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Tense Dark Jade ',
		stats: '+6 Hit Rating +9 Spell Penetration ',
		source: 'Gem Perfection ',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Tenuous Shadow Crystal ',
		stats: '+7 Agility +4 Mp5 ',
		source: 'Gem Perfection',
		color: 'Purple',
		quality: 'Perfect',
		image: require('./images/Perfect_Shadow_Crystal.png').default
	},
	{
		name: 'Perfect Thick Sun Crystal ',
		stats: '+14 Defense Rating ',
		source: 'Gem Perfection',
		color: 'Yellow',
		quality: 'Perfect',
		image: require('./images/Perfect_Sun_Crystal.png').default
	},
	{
		name: 'Perfect Timeless Dark Jade ',
		stats: '+7 Intellect +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Turbid Dark Jade ',
		stats: '+7 Resilience   +7 Spirit ',
		source: 'Gem Perfection',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Veiled Huge Citrine ',
		stats: '+9 Spell Power +7 Hit Rating ',
		source: 'Gem Perfection ',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Perfect Vivid Dark Jade ',
		stats: '+7 Hit Rating +11 Stamina ',
		source: 'Gem Perfection ',
		color: 'Green',
		quality: 'Perfect',
		image: require('./images/Perfect_Dark_Jade.png').default
	},
	{
		name: 'Perfect Wicked Huge Citrine ',
		stats: '+14 Attack Power +7 Critical Strike Rating ',
		source: 'Gem Perfection',
		color: 'Orange',
		quality: 'Perfect',
		image: require('./images/Perfect_Huge_Citrine.png').default
	},
	{
		name: 'Potent Ametrine ',
		stats: '+12 Spell Power +10 Critical Strike Rating ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Potent Huge Citrine ',
		stats: '+8 Spell Power +7 Critical Strike Rating ',
		source: 'Trainer ',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Potent Monarch Topaz ',
		stats: '+9 Spell Power +8 Critical Strike Rating ',
		source: 'Tiffany Cartier ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Precise Bloodstone ',
		stats: '+12 Expertise Rating ',
		source: 'Trainer',
		color: 'Red',
		quality: 'Uncommon',
		image: require('./images/Bloodstone.png').default
	},
	{
		name: 'Precise Cardinal Ruby ',
		stats: '+20 Expertise Rating ',
		source: 'Timothy Jones',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: 'Precise Scarlet Ruby ',
		stats: '+16 Expertise Rating ',
		source: 'Herald Volazj',
		color: 'Red',
		quality: 'Rare',
		image: require('./images/Scarlet_Ruby.png').default
	},
	{
		name: 'Pristine Ametrine ',
		stats: '+20 Attack Power +10 Hit Rating ',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Pristine Huge Citrine ',
		stats: '+12 Attack Power +6 Hit Rating ',
		source: 'Trainer',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Pristine Monarch Topaz ',
		stats: '+16 Attack Power +8 Hit Rating ',
		source: 'Trainer',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Puissant Dreadstone ',
		stats: '+10 Armor Penetration +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Puissant Shadow Crystal ',
		stats: '+6 Armor Penetration +9 Stamina ',
		source: 'Trainer ',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Puissant Twilight Opal ',
		stats: '+8 Armor Penetration +12 Stamina ',
		source: 'Tiffany Cartier ',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: 'Purified Dreadstone ',
		stats: '+12 Spell Power +10 Spirit ',
		source: 'Timothy Jones',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Purified Shadow Crystal ',
		stats: '+7 Spell Power +6 Spirit ',
		source: 'Trainer',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Purified Twilight Opal ',
		stats: '+9 Spell Power +8 Spirit ',
		source: 'World Drop',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: "Quick Autumn's Glow ",
		stats: '+16 Haste Rating ',
		source: 'Tiffany Cartier ',
		color: 'Yellow',
		quality: 'Rare',
		image: require('./images/Autumns_Glow.png').default
	},
	{
		name: "Quick King's Amber ",
		stats: '+20 Haste Rating ',
		source: 'Timothy Jones ',
		color: 'Yellow',
		quality: 'Epic',
		image: require('./images/Kings_Amber.png').default
	},
	{
		name: 'Quick Sun Crystal ',
		stats: '+12 Haste Rating ',
		source: 'Trainer ',
		color: 'Yellow',
		quality: 'Uncommon',
		image: require('./images/Sun_Crystal.png').default
	},
	{
		name: 'Radiant Dark Jade ',
		stats: '+6 Critical Strike Rating +8 Spell Penetration ',
		source: 'Trainer ',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Radiant Eye of Zul ',
		stats: '+10 Critical Strike Rating +13 Spell Penetration ',
		source: 'Timothy Jones ',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Radiant Forest Emerald ',
		stats: '+8 Critical Strike Rating +10 Spell Penetration ',
		source: 'Storm Peaks harpies ',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Reckless Ametrine ',
		stats: '+12 Spell Power +10 Haste Rating ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Reckless Huge Citrine ',
		stats: '+7 Spell Power +6 Haste Rating ',
		source: 'Frenzyheart ',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Reckless Monarch Topaz ',
		stats: '+9 Spell Power +8 Haste Rating ',
		source: 'Tiffany Cartier ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Regal Dreadstone ',
		stats: '+10 Dodge Rating +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Regal Shadow Crystal ',
		stats: '+6 Dodge Rating +9 Stamina ',
		source: 'Trainer ',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Regal Twilight Opal ',
		stats: '+8 Dodge Rating +12 Stamina ',
		source: 'Trainer ',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: 'Resolute Ametrine ',
		stats: '+10 Expertise   +10 Defense Rating ',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Resolute Huge Citrine ',
		stats: '+6 Expertise   +6 Defense Rating ',
		source: 'Trainer',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Resolute Monarch Topaz ',
		stats: '+8 Expertise   +8 Defense Rating ',
		source: 'World Drop',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Resplendent Ametrine ',
		stats: '+10 Strength +10 Resilience Rating ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Resplendent Huge Citrine ',
		stats: '+6 Strength +6 Resilience Rating ',
		source: "(A)Captain O'Neal (H)Lady Palanseer ",
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Resplendent Monarch Topaz ',
		stats: '+8 Strength +8 Resilience Rating ',
		source: 'Wintergrasp ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: "Rigid Autumn's Glow ",
		stats: '+16 Hit Rating ',
		source: 'Tiffany Cartier',
		color: 'Yellow',
		quality: 'Rare',
		image: require('./images/Autumns_Glow.png').default
	},
	{
		name: "Rigid King's Amber ",
		stats: '+20 Hit Rating ',
		source: 'Timothy Jones',
		color: 'Yellow',
		quality: 'Epic',
		image: require('./images/Kings_Amber.png').default
	},
	{
		name: 'Rigid Stormjewel ',
		stats: '+20 Hit Rating ',
		source: 'Bag of Fishing Treasures',
		color: 'Yellow',
		quality: 'Epic',
		image: require('./images/Kings_Amber.png').default
	},
	{
		name: 'Rigid Sun Crystal ',
		stats: '+12 Hit Rating ',
		source: 'Trainer',
		color: 'Yellow',
		quality: 'Uncommon',
		image: require('./images/Sun_Crystal.png').default
	},
	{
		name: 'Royal Dreadstone ',
		stats: '+12 Spell Power +5 Mp5 ',
		source: 'Timothy Jones',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Royal Shadow Crystal ',
		stats: '+7 Spell Power +3 Mp5 ',
		source: 'Trainer',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Royal Twilight Opal ',
		stats: '+9 Spell Power +4 Mp5 ',
		source: 'Tiffany Cartier',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: 'Runed Bloodstone ',
		stats: '+14 Spell Power ',
		source: 'Trainer',
		color: 'Red',
		quality: 'Uncommon',
		image: require('./images/Bloodstone.png').default
	},
	{
		name: 'Runed Cardinal Ruby ',
		stats: '+23 Spell Power ',
		source: 'Timothy Jones',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: 'Runed Scarlet Ruby ',
		stats: '+19 Spell Power ',
		source: 'Kirin Tor',
		color: 'Red',
		quality: 'Rare',
		image: require('./images/Scarlet_Ruby.png').default
	},
	{
		name: 'Runed Stormjewel ',
		stats: '+23 Spell Power ',
		source: 'Bag of Fishing Treasures',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: "Seer's Dark Jade ",
		stats: '+6 Intellect +6 Spirit ',
		source: "Kalu'ak",
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: "Seer's Eye of Zul ",
		stats: '+10 Intellect +10 Spirit ',
		source: 'Timothy Jones',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: "Seer's Forest Emerald ",
		stats: '+8 Intellect +8 Spirit ',
		source: 'Tiffany Cartier',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Shattered Dark Jade ',
		stats: '+6 Haste Rating +8 Spell Penetration ',
		source: "(A)Captain O'Neal (H)Lady Palanseer ",
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Shattered Eye of Zul ',
		stats: '+10 Haste Rating +13 Spell Penetration',
		source: 'Timothy Jones ',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Shattered Forest Emerald ',
		stats: '+8 Haste Rating +10 Spell Penetration',
		source: 'Wintergrasp ',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Shifting Dreadstone ',
		stats: '+10 Agility +15 Stamina ',
		source: 'Timothy Jones',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Shifting Shadow Crystal ',
		stats: '+6 Agility +9 Stamina ',
		source: 'Trainer',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Shifting Twilight Opal ',
		stats: '+8 Agility +12 Stamina ',
		source: 'Tiffany Cartier',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: 'Shining Dark Jade ',
		stats: '+6 Hit Rating +6 Spirit ',
		source: 'Trainer',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Shining Eye of Zul ',
		stats: '+10 Hit Rating +10 Spirit ',
		source: 'Timothy Jones',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Shining Forest Emerald ',
		stats: '+8 Hit Rating +8 Spirit ',
		source: 'World Drop',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: "Smooth Autumn's Glow ",
		stats: '+16 Critical Strike Rating ',
		source: 'Sons of Hodir',
		color: 'Yellow',
		quality: 'Rare',
		image: require('./images/Autumns_Glow.png').default
	},
	{
		name: "Smooth King's Amber ",
		stats: '+20 Critical Strike Rating ',
		source: 'Timothy Jones',
		color: 'Yellow',
		quality: 'Epic',
		image: require('./images/Kings_Amber.png').default
	},
	{
		name: 'Smooth Sun Crystal ',
		stats: '+12 Critical Strike Rating ',
		source: 'Trainer',
		color: 'Yellow',
		quality: 'Uncommon',
		image: require('./images/Sun_Crystal.png').default
	},
	{
		name: 'Solid Chalcedony ',
		stats: '+18 Stamina ',
		source: 'Trainer ',
		color: 'Blue',
		quality: 'Uncommon',
		image: require('./images/Chalcedony.png').default
	},
	{
		name: 'Solid Majestic Zircon ',
		stats: '+30 Stamina ',
		source: 'Timothy Jones ',
		color: 'Blue',
		quality: 'Epic',
		image: require('./images/Majestic_Zircon.png').default
	},
	{
		name: 'Solid Sky Sapphire ',
		stats: '+24 Stamina ',
		source: 'Tiffany Cartier ',
		color: 'Blue',
		quality: 'Rare',
		image: require('./images/Sky_Sapphire.png').default
	},
	{
		name: 'Solid Stormjewel ',
		stats: '+30 Stamina ',
		source: 'Bag of Fishing Treasures ',
		color: 'Blue',
		quality: 'Epic',
		image: require('./images/Majestic_Zircon.png').default
	},
	{
		name: 'Sovereign Dreadstone ',
		stats: '+10 Strength +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Sovereign Shadow Crystal ',
		stats: '+6 Strength +9 Stamina ',
		source: 'Trainer ',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Sovereign Twilight Opal ',
		stats: '+8 Strength +12 Stamina ',
		source: 'World Drop ',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: 'Sparkling Chalcedony ',
		stats: '+12 Spirit ',
		source: 'Trainer',
		color: 'Blue',
		quality: 'Uncommon',
		image: require('./images/Chalcedony.png').default
	},
	{
		name: 'Sparkling Majestic Zircon ',
		stats: '+20 Spirit ',
		source: 'Timothy Jones',
		color: 'Blue',
		quality: 'Epic',
		image: require('./images/Majestic_Zircon.png').default
	},
	{
		name: 'Sparkling Sky Sapphire ',
		stats: '+16 Spirit ',
		source: 'Trainer',
		color: 'Blue',
		quality: 'Rare',
		image: require('./images/Sky_Sapphire.png').default
	},
	{
		name: 'Sparkling Stormjewel ',
		stats: '+20 Spirit ',
		source: 'Bag of Fishing Treasures',
		color: 'Blue',
		quality: 'Epic',
		image: require('./images/Majestic_Zircon.png').default
	},
	{
		name: 'Stalwart Ametrine ',
		stats: '+10 Dodge +10 Defense Rating ',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Stalwart Huge Citrine ',
		stats: '+6 Dodge +6 Defense Rating ',
		source: 'Trainer',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Stalwart Monarch Topaz ',
		stats: '+8 Dodge +8 Defense Rating ',
		source: 'World Drop',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Stark Ametrine ',
		stats: '+20 Attack Power +10 Haste Rating ',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Stark Huge Citrine ',
		stats: '+12 Attack Power +6 Haste Rating ',
		source: 'Trainer',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Stark Monarch Topaz ',
		stats: '+16 Attack Power +8 Haste Rating ',
		source: 'Tiffany Cartier',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Steady Dark Jade ',
		stats: '+6 Resilience   +9 Stamina ',
		source: "(A)Captain O'Neal (H)Lady Palanseer ",
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Steady Eye of Zul ',
		stats: '+10 Resilience   +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Steady Forest Emerald ',
		stats: '+8 Resilience   +12 Stamina ',
		source: 'Wintergrasp ',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Stormy Chalcedony ',
		stats: '+15 Spell Penetration  ',
		source: "(A)Captain O'Neal (H)Lady Palanseer",
		color: 'Blue',
		quality: 'Uncommon',
		image: require('./images/Chalcedony.png').default
	},
	{
		name: 'Stormy Majestic Zircon ',
		stats: '+25 Spell Penetration  ',
		source: 'Timothy Jones',
		color: 'Blue',
		quality: 'Epic',
		image: require('./images/Majestic_Zircon.png').default
	},
	{
		name: 'Stormy Sky Sapphire ',
		stats: '+20 Spell Penetration  ',
		source: 'Wintergrasp',
		color: 'Blue',
		quality: 'Rare',
		image: require('./images/Sky_Sapphire.png').default
	},
	{
		name: 'Subtle Bloodstone ',
		stats: '+12 Dodge Rating ',
		source: 'Trainer ',
		color: 'Red',
		quality: 'Uncommon',
		image: require('./images/Bloodstone.png').default
	},
	{
		name: 'Subtle Cardinal Ruby ',
		stats: '+20 dodge Rating ',
		source: 'Timothy Jones ',
		color: 'Red',
		quality: 'Epic',
		image: require('./images/Cardinal_Ruby.png').default
	},
	{
		name: 'Subtle Scarlet Ruby ',
		stats: '+16 dodge Rating ',
		source: 'Tiffany Cartier ',
		color: 'Red',
		quality: 'Rare',
		image: require('./images/Scarlet_Ruby.png').default
	},
	{
		name: 'Sundered Dark Jade ',
		stats: '+6 Critical Strike Rating +3 Mp5 ',
		source: 'Trainer',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Sundered Eye of Zul ',
		stats: '+10 Critical Strike Rating +5 Mp5 ',
		source: 'Timothy Jones',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Sundered Forest Emerald ',
		stats: '+8 Critical Strike Rating +4 Mp5 ',
		source: 'Oracles',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Tense Dark Jade ',
		stats: '+6 Hit Rating +8 Spell Penetration ',
		source: "(A)Captain O'Neal (H)Lady Palanseer ",
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Tense Eye of Zul ',
		stats: '+10 Hit Rating +13 Spell Penetration ',
		source: 'Timothy Jones ',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Tense Forest Emerald ',
		stats: '+6 Hit Rating +10 Spell Penetration ',
		source: 'Wintergrasp ',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Tenuous Dreadstone ',
		stats: '+10 Agility +5 Mp5 ',
		source: 'Timothy Jones',
		color: 'Purple',
		quality: 'Epic',
		image: require('./images/Dreadstone.png').default
	},
	{
		name: 'Tenuous Shadow Crystal ',
		stats: '+6 Agility +3 Mp5 ',
		source: 'Trainer',
		color: 'Purple',
		quality: 'Uncommon',
		image: require('./images/Shadow_Crystal.png').default
	},
	{
		name: 'Tenuous Twilight Opal ',
		stats: '+8 Agility +4 Mp5 ',
		source: 'World Drop',
		color: 'Purple',
		quality: 'Rare',
		image: require('./images/Twilight_Opal.png').default
	},
	{
		name: "Thick Autumn's Glow ",
		stats: '+16 Defense Rating ',
		source: 'Cyanigosa',
		color: 'Yellow',
		quality: 'Rare',
		image: require('./images/Autumns_Glow.png').default
	},
	{
		name: "Thick King's Amber ",
		stats: '+20 Defense Rating ',
		source: 'Timothy Jones',
		color: 'Yellow',
		quality: 'Epic',
		image: require('./images/Kings_Amber.png').default
	},
	{
		name: 'Thick Sun Crystal ',
		stats: '+12 Defense Rating ',
		source: 'Trainer',
		color: 'Yellow',
		quality: 'Uncommon',
		image: require('./images/Sun_Crystal.png').default
	},
	{
		name: 'Timeless Dark Jade ',
		stats: '+6 Intellect +9 Stamina ',
		source: 'Trainer ',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Timeless Eye of Zul ',
		stats: '+10 Intellect +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Timeless Forest Emerald ',
		stats: '+8 Intellect +12 Stamina ',
		source: "The Prophet Tharon'ja ",
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Turbid Dark Jade ',
		stats: '+6 Resilience   +6 Spirit ',
		source: "(A)Captain O'Neal (H)Lady Palanseer",
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Turbid Eye of Zul ',
		stats: '+10 Resilience   +10 Spirit ',
		source: 'Timothy Jones',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Turbid Forest Emerald ',
		stats: '+8 Resilience   +8 Spirit ',
		source: 'Wintergrasp',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Veiled Ametrine ',
		stats: '+12 Spell Power +10 Hit Rating ',
		source: 'Timothy Jones ',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Veiled Huge Citrine ',
		stats: '+7 Spell Power +6 Hit Rating ',
		source: 'Trainer ',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Veiled Monarch Topaz ',
		stats: '+9 Spell Power +8 Hit Rating ',
		source: 'Tiffany Cartier ',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	},
	{
		name: 'Vivid Dark Jade ',
		stats: '+6 Hit Rating +9 Stamina ',
		source: 'Oracles ',
		color: 'Green',
		quality: 'Uncommon',
		image: require('./images/Dark_Jade.png').default
	},
	{
		name: 'Vivid Eye of Zul ',
		stats: '+10 Hit Rating +15 Stamina ',
		source: 'Timothy Jones ',
		color: 'Green',
		quality: 'Epic',
		image: require('./images/Eye_of_Zul.png').default
	},
	{
		name: 'Vivid Forest Emerald ',
		stats: '+8 Hit Rating +12 Stamina ',
		source: 'Tiffany Cartier ',
		color: 'Green',
		quality: 'Rare',
		image: require('./images/Forest_Emerald.png').default
	},
	{
		name: 'Wicked Ametrine ',
		stats: '+20 Attack Power +10 Critical Strike Rating ',
		source: 'Timothy Jones',
		color: 'Orange',
		quality: 'Epic',
		image: require('./images/Ametrine.png').default
	},
	{
		name: 'Wicked Huge Citrine ',
		stats: '+12 Attack Power +6 Critical Strike Rating ',
		source: 'Trainer',
		color: 'Orange',
		quality: 'Uncommon',
		image: require('./images/Huge_Citrine.png').default
	},
	{
		name: 'Wicked Monarch Topaz ',
		stats: '+16 Attack Power +8 Critical Strike Rating ',
		source: 'Knights of the Ebon Blade',
		color: 'Orange',
		quality: 'Rare',
		image: require('./images/Monarch_Topaz.png').default
	}
];

export default gemArray;
