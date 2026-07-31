const story = document.getElementById("story");
const choices = document.getElementById("choices");

function showStart(){

    story.textContent =
    "You wake up in a strange glowing room. Three doors stand before you.";

    choices.innerHTML = "";

    addChoice("🚪 Red Door", redDoor);
    addChoice("🚪 Blue Door", blueDoor);
    addChoice("🚪 Green Door", greenDoor);

}

function addChoice(text, action){

    const button = document.createElement("button");

    button.textContent = text;

    button.onclick = action;

    choices.appendChild(button);

}

function redDoor(){

    story.textContent =
    "You open the red door and begin transforming into a dragon.";

    choices.innerHTML = "";

    addChoice("Restart", showStart);

}

function blueDoor(){

    story.textContent =
    "You open the blue door and begin transforming into a wizard.";

    choices.innerHTML = "";

    addChoice("Restart", showStart);

}

function greenDoor(){

    story.textContent =
    "You open the green door and begin transforming into a vampire.";

    choices.innerHTML = "";

    addChoice("Restart", showStart);

}

showStart();