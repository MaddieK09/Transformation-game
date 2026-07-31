let story = {};
let currentScene = "start";

async function loadStory() {
    const response = await fetch("story.json");
    story = await response.json();
    showScene(currentScene);
}

function showScene(sceneId) {
    currentScene = sceneId;

    const scene = story[sceneId];

    document.getElementById("story").textContent = scene.text;

    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");

        button.textContent = choice.text;

        button.onclick = () => showScene(choice.next);

        choices.appendChild(button);
    });
}

loadStory();