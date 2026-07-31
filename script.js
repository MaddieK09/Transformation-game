let story;
let currentScene;

let player = {

    name: "Jake",

    form: "Human",

    species: "Human",

    gender: "Male",

    inventory: [],

    flags: {}

};

async function loadStory() {
    const response = await fetch("story.json");
    story = await response.json();

    showScene(story.start);
}

function showScene(sceneId) {

    currentScene = story.scenes[sceneId];

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
document.getElementById("characterCreator").style.display = "none";

    document.getElementById("game").style.display = "block";
loadStory();
};