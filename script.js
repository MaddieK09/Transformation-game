let story;
let currentScene;

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

loadStory();