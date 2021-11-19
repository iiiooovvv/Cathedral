var bg = document.getElementById("bg")
var bgButton = document.getElementById("bgButton")

const name = [
    "Gul",
    "Hymnal",
    "Ragash",
    "Flak",
    "Manta",
    "Grat",
    'Nail',
    "Sepa",
    "Cyan",
    "Sin",
    "Durz",
    "Vassal",
    "Tabernacle",
    "Magos",
    "Chaste",
    "Ugak",
    "Vultor",
    "Vakar",
    "Nach",
    "Xurl",
    "Xaakt",
    "Jukha",
    "Yegoth",
    "Vargan",
    "Uzul",
    "Urag",
    "Glush",
    "Pall",
    "Cruel",
    "Paten",
    "Chalice",
    "Durrot",
    "Naz",
    "Dreg",
    "Gorslag",
    "Akkar",
    "Dalkaar",
    "Toross",
    "Shroud",
    "Ankh",
    "Ka",

];

const equipment = [
    "vial of a priest's blood",
    "13 knives",
    "fire resistant jacket",
    "corrupted copy of the book of vargha",
    "flask of holy water",
    "gps data for three sectors",
    "stimulants",
    "unidentified pills",
    "tasty biscuits",
    "four teeth in a bag",
    "crowbar",
    "scroll tube (mystery text)",
    "inflatable tent (four-person)",
    "sewing kit",
    "zip ties",
    "a dull bell",
    "aerosoles hair spray",
    "small reconnaissance drone",
    "carved wooden toy cat",
    "shovel",
    "hatchet",
    "sacrificial knife",
    "four empty jars",
    "bug in a jar",
    "engraved lighter",
    "depressants",
    "psychedelics",
    "pack of 20 meals in pill form",
    "rope 50 ft",
    "lock",
    "hunting trap",
    "whistle",
    "first aid kit",
    "reusable glow-stick lantern",
    "chain",
    "grappling hook with rope",
    "chalk",
    "3 white candles",
    "8 single-use glow sticks",
    "2 black candles",
    "a red candle",
    "hammer",
    "block and tackle",
    "holy symbol",
    "hologram recording of unknown person",
    "bag of caltrops",
    "laser distance finder",
    "vial of acid",
    "blanket",
    "one person tent",
    "antitoxin pill",
    "sedative",
    "field rations", 
    "internal respiration accessory",
    "robotic arm",
    "robotic arms",
    "robotic hand",
    "robotic leg",
    "robotic legs",
    "reconstructed skull",
    "datajack",
    "replacement eyes (dark vision)",
    "replacement eyes (infrared vision)",
    "replacement eyes (telescopic vision)",
    "replacement eyes (data HUD)",
    "hidden compartment in limb",
    "voice modulator",
    "neural implant (extended memory)",
    "neural implants (data storage)",
    "neural implants (increased processing)",
    "neural implants (thought regulation)"
];


const ammo = [
    "plasma",
    "laser",
    "bolt",
    "",
    ""
]

const weaponType = [
    "rifle",
    "hunting rifle",
    "combat rifle",
    "lever-action rifle",
    "bolt-action rifle",
    "semi-automatic rifle",
    "automatic rifle",
    "assault rifle",
    "carbine",
    "pistol",
    "subtle pistol",
    "large pistol",
    "gun",
    "submachine gun",
    "machine gun",
    "breaching gun",
    "scattergun",
    "hand gun",
    "revolver",
    "cannon",
    "launcher",
    "shotgun",
    "volley gun",
    "gatling gun"
];

const blessings = [
// left
"left a cabal",
"left service as a squire",
"left priesthood",
"left a noble house",
"left catching rats",
"left the pit",
"left overwhelming forces",
"left pestilence",
"left the beyond",
"left knighthood",
"left pack of spawnbitten",
"left a coven",
"left an apprenticeship",
"left the pilgrimage",
"left manual labor",
"left the inquisition",
"left prison",
"left a farm",
"left a gang",
"left the crusade",
"left a family duty",
//spent time as a
"spent time as a smuggler",
"spent time as a mystic",
"spent time as a mechanic",
"spent time as a knight",
"spent time as an insurgent",
"spent time as a chronicler",
"spent time as a heavy",
"spent time as a mercenary",
"spent time as a assassin",
"spent time as a oracle",
"spent time as a ranger",
"spent time as a monk",
"spent time as a witch",
"spent time as a poet",
"spent time as a warden",
"spent time as a cavalier",
//IIII
"ambivalent psionic: you've transcended most normal concerns",
"and cub: you travel with a child or cute creature",
"changeling: you impersonate",
"diviner: you see a future, maybe the future",
"divine warrior: the book is the way and the book wants war",
"fixer: you know someone",
"flesh is weak: the body is vestigial",
"great weapon: your weapon is a standin for your personality",
"healer: you mend",
"lone wolf: your alone even when with others",
"mercenary: how much does it pay",
"plague bearer: carry the plague. the plague is sacred",
"one drop: will kill a man",
"scavenger: one persons trash is another's sacrament",
"scum: people don't like you. you don't like people",
"skulk: what was that",
"suspended derelict: instead of walking, you slowly float",
"trap in a trap: they have no idea",
"plans in plans: an ontologically superior position",
];


bgButton.onclick = function () { 

   //NAME AND BACKGROUND
   const nameRandom = Math.floor(Math.random() * name.length);
   document.getElementById("name").innerHTML = name[nameRandom]; 

   //BLESSINGS PAI
   const bless = []
   for (let i = 0; i < 2;)
   {
       var blessingsRandom = Math.floor(Math.random() * blessings.length);
       var grace = blessings[blessingsRandom]
       if (bless.includes(grace) === false) {
           //  block of code to be executed if the condition is true
           bless.push(grace);
           i++;
         }
     }
    
   document.getElementById("b1").innerHTML = bless[0]; 
   document.getElementById("b2").innerHTML = bless[1]; 
   

   //EQUIPMENT LIST
   const equip = []
   for (let i = 0; i < 2;)
   {
       var equipmentRandom = Math.floor(Math.random() * equipment.length);
       var gear = equipment[equipmentRandom]
       if (equip.includes(gear) === false) {
           //  block of code to be executed if the condition is true
           equip.push(gear);
           i++;
         }
     }
    
   document.getElementById("equipment2").innerHTML = equip[0]; 
   document.getElementById("equipment3").innerHTML = equip[1]; 

   
   
   //WEAPON
   const ammoRandom = Math.floor(Math.random() * ammo.length);
   const weaponTypeRandom = Math.floor(Math.random() * weaponType.length);
   document.getElementById("equipment1").innerHTML = ammo[ammoRandom] + " " + weaponType[weaponTypeRandom];
   
   
};