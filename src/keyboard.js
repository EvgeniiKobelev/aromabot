const kb = require('./keyboard-buttons');

module.exports = {
    home: [
        [kb.home.oils, kb.home.care],
        [kb.home.additives, kb.home.sets],
        [kb.home.materials, kb.home.price],
        [kb.home.catalog, kb.home.aromaTherapy],
        [kb.home.recipes, kb.home.aromadesign],
        [kb.home.aromarecipes, kb.home.video],
        [kb.home.emocionaroma]
    ],
    oils: [
        [kb.oils.single, kb.oils.mixture],
        [kb.oils.dipblu, kb.oils.ongard, kb.oils.accessory],
        [kb.back],
    ],
    care: [
        [kb.care.face, kb.care.hair],
        [kb.care.spa],
        [kb.back],
    ],
    sets: [
        [kb.sets.regSets],
        [kb.sets.leaderSets, kb.sets.collections],
        [kb.back]
    ],
    price: [
        [kb.back],
    ],
    materials: [
        [kb.materials.litproduction],
        [kb.materials.matforbuisness],
        [kb.back],
    ],
    additives: [
        [kb.additives.doterraWomen, kb.additives.kids],
        [kb.additives.didgestZen, kb.additives.slimSessi],
        [kb.additives.dolgozhitel, kb.additives.terraGrins],
        [kb.additives.cellEnergy],
        [kb.back]
    ],
    catalog: [
        [kb.back],
    ],
    aromaTherapy: [
        [kb.back],
    ],
    back: [
        [kb.back],
    ],
}