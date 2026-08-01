let story;
let currentScene;
let originalPlayer;
let player = {

    name: "Jake",

    form: "Human",

    species: "Human",

    gender: "Male",

    inventory: [],

    flags: {}

};

async function loadStory() {
const response = await fetch("story.json?version=2");
    story = await response.json();

    showScene(story.start);
}

function showScene(sceneId) {

currentScene = story.scenes[sceneId];

if (sceneId === story.start && originalPlayer) {
    player = JSON.parse(JSON.stringify(originalPlayer));
}

if (currentScene.transform) {
    Object.assign(player, currentScene.transform);
}

document.getElementById("playerStats").innerHTML = `
<h2>${player.name}</h2>
<p>
Age: ${player.age}<br>
Gender: ${player.gender}<br>
Sex: ${player.sex}<br>
Pronouns: ${player.pronouns}<br>
Height: ${player.height} cm<br>
Weight: ${player.weight} kg<br>
Hair: ${player.hairColor}<br>
Eyes: ${player.eyeColor}<br>
Species: ${player.species}
</p>
`;
    document.getElementById("story").textContent = currentScene.text;

    const choices = document.getElementById("choices");

    choices.innerHTML = "";

    currentScene.choices.forEach(choice => {

        const button = document.createElement("button");

        button.textContent = choice.text;

        button.onclick = () => showScene(choice.next);

        choices.appendChild(button);

    });

}

document.getElementById("characterCreator").style.display = "block";
document.getElementById("game").style.display = "none";



document.getElementById("startAdventure").onclick = () => {

    player.name = document.getElementById("playerName").value || "Player";
player.age = Number(document.getElementById("playerAge").value);

player.gender =
    document.getElementById("playerGender").value;

player.sex =
    document.getElementById("playerSex").value;

player.pronouns =
    document.getElementById("playerPronouns").value;

player.height =
    Number(document.getElementById("playerHeight").value);

player.weight =
    Number(document.getElementById("playerWeight").value);

player.hairColor =
    document.getElementById("playerHairColor").value;

player.eyeColor =
    document.getElementById("playerEyeColor").value;

player.species =
document.getElementById("playerSpecies").value;   
originalPlayer = JSON.parse(JSON.stringify(player));
document.getElementById("characterCreator").style.display = "none";

    document.getElementById("game").style.display = "block";
loadStory();
};