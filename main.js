function setup() {
    canvas = createCanvas(900,600);
}
screen_width = 0;
screen_height = 0;
apple = "https://i.postimg.cc/kM2Tk864/Apple-Transparent.jpg";
speak_data = "";
toNumber = "";

function preLoad() {
    loadImage(apple);
}

recognition.onresult = function(event){
toNumber = Number (content);

if (Number.isInteger(toNumber)) {
    document.getElementById("status_message").innerHTML = "Started Drawing Apple!";
    draw_apple = "set";
}
else{
    document.getElementById("status_message").innerHTML = "I wasn't able to hear the number. Please Try Again!";
}
}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight
    canvas = createCanvas(screen_width, screen_width-150);
    canvas.position(0,150);
}

function draw() {
    if (draw_apple =="set") {
        for(var i = 1; i<= toNumber; i++){
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
            document.getElementById("status").innerHTML = toNumber + "Apples Drawn";
            speak_data = toNumber + "Apples Drawn";
            speak()
        }
    }
}


function start() {
    document.getElementById("status_message").innerHTML = "We are listening, Speak Up!";
    recognition.start();
}

