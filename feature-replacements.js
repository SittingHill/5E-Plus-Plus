Hooks.once('init', () => {
	
	console.log("5E++ | Initializing feature replacements");
	
	//replaced spell lists
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.QvPDSUsAiEn3hD8s.JournalEntryPage.ziBzRlrpBm1KVV0j"] = "Compendium.5E-plus-plus.Rules.JournalEntry.uOsKINxbXbCh4loE.JournalEntryPage.DM4ETqDESWOk3d6E";//bard
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.QvPDSUsAiEn3hD8s.JournalEntryPage.cuG9d7J9fQH9InYT"] = "Compendium.5E-plus-plus.Rules.JournalEntry.uOsKINxbXbCh4loE.JournalEntryPage.cuG9d7J9fQH9InYT";//Cleric
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.QvPDSUsAiEn3hD8s.JournalEntryPage.MWiN7ILEO0Vd3zAZ"] = "Compendium.5E-plus-plus.Rules.JournalEntry.uOsKINxbXbCh4loE.JournalEntryPage.MWiN7ILEO0Vd3zAZ";//Druid
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.QvPDSUsAiEn3hD8s.JournalEntryPage.FhucONA0yRZQjMmb"] = "Compendium.5E-plus-plus.Rules.JournalEntry.uOsKINxbXbCh4loE.JournalEntryPage.FhucONA0yRZQjMmb";//Paladin
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.QvPDSUsAiEn3hD8s.JournalEntryPage.sANq9JMycfSq3A5d"] = "Compendium.5E-plus-plus.Rules.JournalEntry.uOsKINxbXbCh4loE.JournalEntryPage.sANq9JMycfSq3A5d";//Ranger
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.QvPDSUsAiEn3hD8s.JournalEntryPage.PVgly1xB2S2I8GLQ"] = "Compendium.5E-plus-plus.Rules.JournalEntry.uOsKINxbXbCh4loE.JournalEntryPage.PVgly1xB2S2I8GLQ";//Sorcerer	
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.QvPDSUsAiEn3hD8s.JournalEntryPage.mx4TsSbBIAaAkhQ7"] = "Compendium.5E-plus-plus.Rules.JournalEntry.uOsKINxbXbCh4loE.JournalEntryPage.mx4TsSbBIAaAkhQ7";//Warlock
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.QvPDSUsAiEn3hD8s.JournalEntryPage.k7Rs5EyXeA0SFTXD"] = "Compendium.5E-plus-plus.Rules.JournalEntry.uOsKINxbXbCh4loE.JournalEntryPage.k7Rs5EyXeA0SFTXD";//Wizard
	
	//Fighting  Styles
	//Dueling
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.classfeatures.Item.hCop9uJrWhF1QPb4"] = "Compendium.5E-plus-plus.class-features.Item.Yr6gU5O8qNwiwWn7"; 	
	//Great Weapon Fighting
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.classfeatures.Item.3Nc6u9pyStByuJsm"] = "Compendium.5E-plus-plus.class-features.Item.UFHPmowljxWBPLjv"; 
	//Protection
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.classfeatures.Item.06NVMYf58Z76O85O"] = "Compendium.5E-plus-plus.class-features.Item.JE2Wsyz7HPVP66Eo"; 
	
	//Cleric features
	//Channel Divinity
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.classfeatures.Item.YpiLQEKGalROn7iJ"] = "Compendium.5E-plus-plus.class-features.Item.8WE7wAsIxck33OSW"; 	
	
	//Druid Features
	//Wild Shape
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.classfeatures.Item.swK0r5TOIxredxWS"] = "Compendium.5E-plus-plus.class-features.Item.XsQprndaZvEOvOfQ";
	
	//Monk Features
	//Ki
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.classfeatures.Item.10b6z2W1txNkrGP7"] = "Compendium.5E-plus-plus.class-features.Item.ZEEqZGVozf2OPfMy"; 
	
	//Sorcerer features
	//Font of Magic
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.classfeatures.Item.LBKChJY5n02Afhnq"] = "Compendium.5E-plus-plus.class-features.Item.fVVvaDPiYYtL0aPk"; 
	//Careful Spell
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.classfeatures.Item.zElYrOcCFFMhB6Xl"] = "Compendium.5E-plus-plus.class-features.Item.jG4ljpOeXxqK9580"; 
	
	//spells
	//acid splash
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.JLTQyqXEaJDrTXyW"] = "Compendium.5E-plus-plus.spells.Item.sPB5Cy3HCnMzUDQX"; 
	//animate objects
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.ATo0Eb63TDtnu6iA"] = "Compendium.5E-plus-plus.spells.Item.D4bUoPgRwDzmdTr6"; 
	//flame strike
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.5e1xTohkzqFqbYH4"] = "Compendium.5E-plus-plus.spells.Item.kQaEfyDXiQcd4VSW"; 
	//forcecage
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.Y7uWUO4yqUN0JKl0"] = "Compendium.5E-plus-plus.spells.Item.Vy5NaHZBb4Rnstyp"; 
	//hallow
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.SLxA9QhrggTz0taU"] = "Compendium.5E-plus-plus.spells.Item.H7oS4Egw5u5k8iVm"; 
	//legend lore
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.W4Qx5z0id6da0vqg"] = "Compendium.5E-plus-plus.spells.Item.iRzBwUbP3IydeWek"; 
	//levitate
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.MRxldJd6C4bsBo3O"] = "Compendium.5E-plus-plus.spells.Item.yH3JsDFMF4CnXI1V"; 
	//magic missile
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.41JIhpDyM9Anm7cs"] = "Compendium.5E-plus-plus.spells.Item.2zd2UuKsf9jc3Uax"; 
	//maze
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.clwv2PWOcT822hlr"] = "Compendium.5E-plus-plus.spells.Item.NpblRlFonL9FiSma"; 
	//polymorph
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.04nMsTWkIFvkbXlY"] = "Compendium.5E-plus-plus.spells.Item.CXUAn2obGulf3Jo3"; 
	//shield
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.z1mx84ONwkXKUZd7"] = "Compendium.5E-plus-plus.spells.Item.mzvhWCIdq0OpjIsk"; 
	//simulacrum
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.jccbeBIfLrqEZnDP"] = "Compendium.5E-plus-plus.spells.Item.riHEzsXyPD2WwgKW"; 
	//sleep
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.KhwiSi9fwVfUPtku"] = "Compendium.5E-plus-plus.spells.Item.INLm6Rl9HCRWwgzD"; 
	//slow
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.yqUDoxk4x0NWG5Bz"] = "Compendium.5E-plus-plus.spells.Item.QBkuKtScPyUpPJMY"; 
	//telekinesis
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.HQfd7jJyULIoGxrZ"] = "Compendium.5E-plus-plus.spells.Item.UmxQYQtOQ9Sz7FRz"; 
	//tiny hut
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.NXWWWgHtWb7Nv21F"] = "Compendium.5E-plus-plus.spells.Item.jcFokzf9HEHNN18z"; 
	//true strike
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.mGGlcLdggHwcL7MG"] = "Compendium.5E-plus-plus.spells.Item.jA2n7mOwcNf1lVlP"; 
	//wall of force
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.o9ZCvuD2B1OTcubb"] = "Compendium.5E-plus-plus.spells.Item.IIcm44XmLhH9jIIx"; 
	//wish
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.spells.Item.3okM6Gn63zzEULkz"] = "Compendium.5E-plus-plus.spells.Item.a26Gw2M78oT9qvvG"; 
	
	
	
	//enrichment lookup replacements
	
	//charisma
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.9FyghudYFV5QJOuG"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.ViGfBjtVyIlsq1T4"; 
	//constitution
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.MpA4jnwD17Q0RPg7"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.gqpniTaFehmC1RuY"; 
	//dexterity
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.ER8CKDUWLsFXuARJ"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.XuPe7hPrUEr8aEhl"; 
	//intelligence
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.WzWWcTIppki35YvF"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.O5Y004YQhjYMwewt"; 
	//strength
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.nUPv6C66Ur64BIUH"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.NQwHOr5gmdlmI8bf"; 
	//wisdom
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.v3IPyTtqvXqN934s"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.iNGJktPD30QfvS8k"; 
	//acrobatics
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.AvvBLEHNl7kuwPkN"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.YgR1CTXIx12vuRfZ"; 
	//animal handling
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.xb3MCjUvopOU4viE"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.AQkUbgHRnmudkSLF"; 
	//arcana
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.h3bYSPge8IOqne1N"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.M7r7uDflE2vLSlrR"; 
	//athletics 
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.rIR7ttYDUpH3tMzv"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.AtSpyyGnjoEZ4Ybn"; 
	//deception
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.mqVZ2fz0L7a9VeKJ"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.S6VHqozQy7FOKBZ2"; 
	//history
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.kRBZbdWMGW9K3wdY"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.sk3w17avVoHexki7"; 
	//insight
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.8R5SMbAGbECNgO8z"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.wSjSaqqVYCVkEct3"; 
	//intimidation
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.4VHHI2gJ1jEsppfg"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.hIuAYdZQkPzfQy7u"; 
	//investigation
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.Y7nmbQAruWOs7WRM"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.eyfcReaYNXROIl8k"; 
	//medicine
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.GeYmM7BVfSCAga4o"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.UJQ7H6g2wFcJGJDB"; 
	//nature
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.ueMx3uF2PQlcye31"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.m2gCq54PAiCG9hZX";
	//perception
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.zjEeHCUqfuprfzhY"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.0b22zTjmeMZP68kf"; 
	//performance
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.hYT7Z06yDNBcMtGe"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.hrDf0A3Z4uSvpUaw"; 
	//persuasion
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.4R5H8iIsdFQTsj3X"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.kutl8D8WPvTPY30B"; 
	//psionics??
	CONFIG.compendium.uuidRedirects["Compendium.kibbles-compendium-of-craft-and-creation.kccc-journals.JournalEntry.22xGZTi3QtxVkqUH.JournalEntryPage.88IVFMQiTyGjoXEP"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.DU30Sk1fK8lCu3nG"; 
	//religion
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.CXVzERHdP4qLhJXM"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.7X0vQDuL7BG4Lsc8"; 
	//sleight of hand
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.yg6SRpGNVz9nDW0A"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.7Ow7YGs0Rrb7dcQV"; 
	//stealth
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.4MfrpERNiQXmvgCI"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.9RJ6FOGhbeMmwrua"; 
	//survival
	CONFIG.compendium.uuidRedirects["Compendium.dnd5e.rules.JournalEntry.NizgRXLNUqtdlC1s.JournalEntryPage.t3EzDU5b9BVAIEVi"] = "Compendium.5E-plus-plus.Rules.JournalEntry.XpPC93eKfB3pwQug.JournalEntryPage.vLG85PSMGachO97w"; 
	
	//tool replacements: waiting for new wordings
/*        
   
    "tools": {
        "alchemist": {
            "ability": "int",
            "id": "Compendium.dnd5e.items.Item.SztwZhbhZeCqyAes"
        },
        "bagpipes": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.yxHi57T5mmVt0oDr"
        },
        "brewer": {
            "ability": "int",
            "id": "Compendium.dnd5e.items.Item.Y9S75go1hLMXUD48"
        },
        "calligrapher": {
            "ability": "dex",
            "id": "Compendium.dnd5e.items.Item.jhjo20QoiD5exf09"
        },
        "card": {
            "ability": "wis",
            "id": "Compendium.dnd5e.items.Item.YwlHI3BVJapz4a3E"
        },
        "carpenter": {
            "ability": "str",
            "id": "Compendium.dnd5e.items.Item.8NS6MSOdXtUqD7Ib"
        },
        "cartographer": {
            "ability": "wis",
            "id": "Compendium.dnd5e.items.Item.fC0lFK8P4RuhpfaU"
        },
        "chess": {
            "ability": "wis",
            "id": "Compendium.dnd5e.items.Item.23y8FvWKf9YLcnBL"
        },
        "cobbler": {
            "ability": "dex",
            "id": "Compendium.dnd5e.items.Item.hM84pZnpCqKfi8XH"
        },
        "cook": {
            "ability": "wis",
            "id": "Compendium.dnd5e.items.Item.Gflnp29aEv5Lc1ZM"
        },
        "dice": {
            "ability": "wis",
            "id": "Compendium.dnd5e.items.Item.iBuTM09KD9IoM5L8"
        },
        "disg": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.IBhDAr7WkhWPYLVn"
        },
        "drum": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.69Dpr25pf4BjkHKb"
        },
        "dulcimer": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.NtdDkjmpdIMiX7I2"
        },
        "flute": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.eJOrPcAz9EcquyRQ"
        },
        "forg": {
            "ability": "dex",
            "id": "Compendium.dnd5e.items.Item.cG3m4YlHfbQlLEOx"
        },
        "glassblower": {
            "ability": "int",
            "id": "Compendium.dnd5e.items.Item.rTbVrNcwApnuTz5E"
        },
        "herb": {
            "ability": "int",
            "id": "Compendium.dnd5e.items.Item.i89okN7GFTWHsvPy"
        },
        "horn": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.aa9KuBy4dst7WIW9"
        },
        "jeweler": {
            "ability": "int",
            "id": "Compendium.dnd5e.items.Item.YfBwELTgPFHmQdHh"
        },
        "leatherworker": {
            "ability": "dex",
            "id": "Compendium.dnd5e.items.Item.PUMfwyVUbtyxgYbD"
        },
        "lute": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.qBydtUUIkv520DT7"
        },
        "lyre": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.EwG1EtmbgR3bM68U"
        },
        "mason": {
            "ability": "str",
            "id": "Compendium.dnd5e.items.Item.skUih6tBvcBbORzA"
        },
        "navg": {
            "ability": "wis",
            "id": "Compendium.dnd5e.items.Item.YHCmjsiXxZ9UdUhU"
        },
        "painter": {
            "ability": "wis",
            "id": "Compendium.dnd5e.items.Item.ccm5xlWhx74d6lsK"
        },
        "panflute": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.G5m5gYIx9VAUWC3J"
        },
        "pois": {
            "ability": "int",
            "id": "Compendium.dnd5e.items.Item.il2GNi8C0DvGLL9P"
        },
        "potter": {
            "ability": "int",
            "id": "Compendium.dnd5e.items.Item.hJS8yEVkqgJjwfWa"
        },
        "shawm": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.G3cqbejJpfB91VhP"
        },
        "smith": {
            "ability": "str",
            "id": "Compendium.dnd5e.items.Item.KndVe2insuctjIaj"
        },
        "thief": {
            "ability": "dex",
            "id": "Compendium.dnd5e.items.Item.woWZ1sO5IUVGzo58"
        },
        "tinker": {
            "ability": "dex",
            "id": "Compendium.dnd5e.items.Item.0d08g1i5WXnNrCNA"
        },
        "viol": {
            "ability": "cha",
            "id": "Compendium.dnd5e.items.Item.baoe3U5BfMMMxhCU"
        },
        "weaver": {
            "ability": "dex",
            "id": "Compendium.dnd5e.items.Item.ap9prThUB2y9lDyj"
        },
        "woodcarver": {
            "ability": "dex",
            "id": "Compendium.dnd5e.items.Item.xKErqkLo4ASYr5EP"
        }
    }
}*/

 });