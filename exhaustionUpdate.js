Hooks.once("ready", () => {
  configureExhaustionHooks();
  CONFIG.DND5E.conditionEffects.halfMovement.delete("exhaustion-2");
  CONFIG.DND5E.conditionEffects.halfHealth.delete("exhaustion-4");
  CONFIG.DND5E.conditionEffects.noMovement.delete("exhaustion-5");
  console.log("5E++ Exhaustion | Ready");
});

Hooks.on("preUpdateActor", (actor, data) => {
      const exhaustion = foundry.utils.getProperty(data, "system.attributes.exhaustion");
      if (exhaustion === undefined) return;
      return plugins.handleExhaustion(actor, data);
    });

function configureExhaustionHooks() {

	if (Hooks.events["dnd5e.preRollAbilityCheckV2"]) Hooks.off("dnd5e.preRollAbilityCheckV2", _preAbilityCheck);
    if (Hooks.events["dnd5e.preRollSavingThrowV2"]) Hooks.off("dnd5e.preRollSavingThrowV2", _preAbilitySave);
    if (Hooks.events["dnd5e.preRollDeathSaveV2"]) Hooks.off("dnd5e.preRollDeathSaveV2", _preDeathSave);
    if (Hooks.events["dnd5e.preRollAttackV2"]) Hooks.off("dnd5e.preRollAttackV2", _preAttack);
}

function _preAbilityCheck(config) {
  if (!config.subject?.statuses.has("exhaustion")) return;
  config.rolls[0].options.disadvantage = true;
}

function _preAbilitySave(config) {
  if (!config.subject?.statuses?.has("exhaustion")) return;
  if (!(config.subject?.system?.attributes?.exhaustion >= 3)) return;
  config.rolls[0].options.disadvantage = true;
}

function _preDeathSave(config) {
  if (!config.subject?.statuses?.has("exhaustion")) return;
  if (!(config.subject?.system?.attributes?.exhaustion >= 3)) return;
  config.rolls[0].options.disadvantage = true;
}

function _preAttack(config) {
  let actor = config.subject?.actor;
  if (!actor) return;
  if (!actor?.statuses?.has("exhaustion")) return;
  if (!(actor?.system?.attributes?.exhaustion >= 3)) return;
  config.rolls[0].options.disadvantage = true;
}

export default class plugins {

  static handleExhaustion(actor, data) {
	
    const exhaustionLevel = foundry.utils.getProperty(data, "system.attributes.exhaustion");
	const actorExhaustionEffect = actor.effects.find(effect => foundry.utils.getProperty(effect, "flags.5E-plus-plus.exhaustion-effect"));
	const actorExhaustionMovementEffect = actor.effects.find(effect => foundry.utils.getProperty(effect, "flags.5E-plus-plus.exhaustion-movement"));
	
	if(actorExhaustionEffect){
		actor.deleteEmbeddedDocuments("ActiveEffect", [actorExhaustionMovementEffect.id]);
	}

	const movementReduction = exhaustionLevel * -5;
	
	const plusPlusExhaustionMovementEffectData = {
  "name": "Exhaustion Movement Reduction",
  "description": "",
  "img": "icons/svg/downgrade.svg",
  "tint": null,
  "seconds": null,
  "rounds": null,
  "turns": null,
  "isDynamic": false,
  "isViewable": false,
  
  "flags": {
    "5E-plus-plus": {
      "exhaustion-movement": true
    }
  },
  
  "changes": [{
    "key": "system.attributes.movement.walk",
    "value": movementReduction,
    "mode": 2,
    "priority": 20
  }]
}
	
	if (exhaustionLevel > 0) {
		if(!actorExhaustionEffect){
			actor.createEmbeddedDocuments("ActiveEffect", [plusPlusExhaustionEffectData]);
		}
		actor.createEmbeddedDocuments("ActiveEffect", [plusPlusExhaustionMovementEffectData]);
		
      return
    } else if (exhaustionLevel <= 0 && actorExhaustionEffect) {
		
      return actor.deleteEmbeddedDocuments("ActiveEffect", [actorExhaustionEffect.id]);
	
  }
}}
  
const plusPlusExhaustionEffectData = {
  "name": "Exhaustion (5E++)",
  "description": "Your attack rolls, ability checks, saving throw, and spell save DC are reduced by 1 for each level of exhaustion you have.  Your speed is reduced by 5 feet for each level of exhaustion you have.  If you reach 6 levels of Exhaustion, you die.",
  "img": "icons/svg/downgrade.svg",
  "tint": null,
  "seconds": null,
  "rounds": null,
  "turns": null,
  "isDynamic": false,
  "isViewable": true,
  
  "flags": {
    "5E-plus-plus": {
      "exhaustion-effect": true
    }
  },
  
  "changes": [{
    "key": "system.bonuses.msak.attack",
    "value": "-@attributes.exhaustion",
    "mode": 2,
    "priority": 20
  }, {
    "key": "system.bonuses.mwak.attack",
    "value": "-@attributes.exhaustion",
    "mode": 2,
    "priority": 20
  },  {
    "key": "system.bonuses.rsak.attack",
    "value": "-@attributes.exhaustion",
    "mode": 2,
    "priority": 20
  },  {
    "key": "system.bonuses.rwak.attack",
    "value": "-@attributes.exhaustion",
    "mode": 2,
    "priority": 20
  }, {
    "key": "system.bonuses.abilities.save",
    "value": "-@attributes.exhaustion",
    "mode": 2,
    "priority": 20
  }, {
    "key": "system.bonuses.abilities.check",
    "value": "-@attributes.exhaustion",
    "mode": 2,
    "priority": 20
  }, {
    "key": "system.bonuses.spell.dc",
    "value": "-@attributes.exhaustion",
    "mode": 2,
    "priority": 20
  }]
}
const plusPlusExhaustionMovementEffectData = {
  "name": "Exhaustion Movement Reduction",
  "description": "",
  "img": "icons/svg/downgrade.svg",
  "tint": null,
  "seconds": null,
  "rounds": null,
  "turns": null,
  "isDynamic": false,
  "isViewable": false,
  
  "flags": {
    "5E-plus-plus": {
      "exhaustion-movement": true
    }
  },
  
  "changes": [{
    "key": "system.attributes.movement.walk",
    "value": "-5",
    "mode": 2,
    "priority": 20
  }]
}


