let i = 0;
let no_of_buttons = document.querySelectorAll(".drum").length;

while (i < no_of_buttons) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var button_innerhtml = this.innerHTML;
        makesound(button_innerhtml);
        add_animation(button_innerhtml);
    });
    i++;
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    add_animation(event.key);
});

function add_animation(current_key) {
    var activebutton = document.querySelector("." + current_key);
    activebutton.classList.add("pressed");
    setTimeout(function () {
        activebutton.classList.remove("pressed");
    },100);
}
function makesound(key) {
    switch (key) {
        case "w":
            let audio1 = new Audio("sounds/sound_1.mp3");
            audio1.play();
            break;
        case "a":
            let audio2 = new Audio("sounds/sound_2.mp3");
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio("sounds/sound_3.mp3");
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio("sounds/sound_4.mp3");
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio("sounds/sound_5.mp3");
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio("sounds/sound_6.mp3");
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio("sounds/sound_7.mp3");
            audio7.play();
            break;

        default: console.log(key);
            break;
    }
}