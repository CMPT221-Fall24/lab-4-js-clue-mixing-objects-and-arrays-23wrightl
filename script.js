const suspectsArray = ["Col Mustard", "Miss Scarlet", "Prof Plum", "Mr Green", "Mrs White", "Mrs Peacock"];
const weaponsArray = ["revolver", "knife", "lead pipe", "wrench", "rope", "candlestick", "baseball bat", "lamp"];
const roomsArray = ["conservatory", "ball room", "dining room", "lounge", "billard room", "study", "kitchen", "hall", "library", "bed room"];

function revealMystery(mysteryCard){
    document.getElementById("mysteryReveal").innerHTML = mysteryCard.suspectCard + " killed Mr. Marist using the " + mysteryCard.weaponCard + " in the " + mysteryCard.roomCard +".";
}

function pickMystery(){
    let mysteryCard= {};
    mysteryCard.suspectCard=selectRandom(suspectsArray);
    mysteryCard.weaponCard=selectRandom(weaponsArray);
    mysteryCard.roomCard =selectRandom(roomsArray);
    return mysteryCard;
}

function selectRandom(arrayName){
    return arrayName[Math.floor(Math.random() *arrayName.length)];
}






