Hooks.once('init', () => {

//Adds new class feature types
CONFIG.DND5E.featureTypes.class.subtypes.survivalSkill = "Survival Skill";
CONFIG.DND5E.featureTypes.class.subtypes.combatManeuver = "Combat Maneuver";
CONFIG.DND5E.featureTypes.class.subtypes.spiritRage = "Spirit Rage";
CONFIG.DND5E.featureTypes.class.subtypes.spiritAscension = "Spirit Ascension";
CONFIG.DND5E.featureTypes.class.subtypes.spiritBlessing = "Spirit's Blessing";
CONFIG.DND5E.featureTypes.class.subtypes.improvedFightingStyle = "Improved Fighting Style";
CONFIG.DND5E.featureTypes.class.subtypes.dragonAncestor = "Dragon Ancestor";
CONFIG.DND5E.featureTypes.class.subtypes.elementalTechnique = "Elemental Technique";
CONFIG.DND5E.featureTypes.class.subtypes.beastCompanionTrait = "Beast Companion Trait";

setup5EPlusPlusConditionReferences();
newConditions();

 });
 
 function newConditions(){
	 //Burning
	delete CONFIG.DND5E.conditionTypes.burning.pseudo;
	
	 //Dazed
	foundry.utils.mergeObject(CONFIG.DND5E.conditionTypes, {
    dazed: {
      name: "Dazed",
	  img: 'modules/5E-plus-plus/assets/icons/daze.svg',
	  id: "dazed",
	  _id: dnd5e.utils.staticID("dnd5edazed"),
      reference:
        'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.DPVPIDue1oNmC0i8',
    },
	
	})
	
	 //Silenced
	
	const silenced = {
		name: "Silenced",
		img: 'modules/5E-plus-plus/assets/icons/silenced.svg',
		id: "silenced",
		_id: dnd5e.utils.staticID("dnd5esilenced"),
		reference: 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.67rfOxQ8XTxJAr0Q',
	}

	CONFIG.DND5E.conditionTypes.silenced = silenced;

	CONFIG.statusEffects.push({
		name: silenced.name,
		img: silenced.img,
		id: silenced.id,
		_id: silenced._id,
	});
	
	foundry.utils.mergeObject(CONFIG.DND5E.conditionTypes, {
		slowed: {
			name: "Slowed",
			img: 'modules/5E-plus-plus/assets/icons/stoned.svg',
			id: "slowed",
			_id: dnd5e.utils.staticID("dnd5eslowed"),
			reference: 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.JsrrrmDBCOb1pE2z',
		},
	});
	CONFIG.statusEffects.push({
		img: 'modules/5E-plus-plus/assets/icons/stoned.svg',
		id: "slowed",
		name: "Slowed",
		_id: dnd5e.utils.staticID("dnd5eslowed")
	});
	CONFIG.DND5E.conditionEffects.halfMovement.add("slowed");
 }
  
 function setup5EPlusPlusConditionReferences(){
	CONFIG.DND5E.conditionTypes.blinded.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.9oO8rwOfq6ERed6d';
	CONFIG.DND5E.conditionTypes.burning.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.ekX667SlWwg4m6qe';
	CONFIG.DND5E.conditionTypes.charmed.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.zIkZcEXOZ9gvpSmA';
	CONFIG.DND5E.conditionTypes.deafened.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.NYHSZom6iuqwx8bY';
	CONFIG.DND5E.conditionTypes.exhaustion.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.PJfwL3XYJoaZw8Pd';
	CONFIG.DND5E.conditionTypes.frightened.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.O97EPMPak7hbqbbO';
	CONFIG.DND5E.conditionTypes.grappled.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.7ZYjGwiZi9gmWPsf';
	CONFIG.DND5E.conditionTypes.incapacitated.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.Hqmi4z7ysictmua5';
	CONFIG.DND5E.conditionTypes.invisible.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.XHd9b5h2RbaAItbR';
	CONFIG.DND5E.conditionTypes.paralyzed.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.EdwvcQBJQI3iBRjW';
	CONFIG.DND5E.conditionTypes.petrified.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.ecIwtbQZeJjYpgK6';
	//CONFIG.DND5E.conditionTypes.poisoned.reference = '';
	//CONFIG.DND5E.conditionTypes.prone.reference = '';
	CONFIG.DND5E.conditionTypes.restrained.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.OX4gViLEPubYzNRK';
	CONFIG.DND5E.conditionTypes.stunned.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.qLDlRftGbEv7zhkW';
	CONFIG.DND5E.conditionTypes.unconscious.reference = 'Compendium.5E-plus-plus.Rules.JournalEntry.Arm7o4ZWUZQHKWvJ.JournalEntryPage.MF7fldLmAIagvVBQ';

 }
 
