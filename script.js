let yesSize = 1;
let noSize = 1;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsContainer = document.querySelector(".buttons");

/* Move + Shrink Ignore */
function shrinkAndMove() {

    noSize -= 0.1;

    if (noSize <= 0.2) {
        noBtn.style.display = "none";
        return;
    }

    // Shrink Ignore
    noBtn.style.transform = `scale(${noSize})`;

    // Grow Yes
    yesSize += 0.08;
    yesBtn.style.transform = `scale(${yesSize})`;

    // Random move inside container
    const maxX = buttonsContainer.clientWidth - noBtn.offsetWidth;
    const maxY = buttonsContainer.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

/* Desktop */
noBtn.addEventListener("mouseenter", shrinkAndMove);

/* Mobile */
noBtn.addEventListener("click", function(e){
    e.preventDefault();
    shrinkAndMove();
});

/* Show Letter */
function showLetter(){
    document.getElementById("msg").innerHTML = `
        Hi love… I’m sorry kung napansin mo na kaya kong magpa-libre sa iba 
        pero pag ikaw na nanlilibre, umaayaw ako kasi nahihiya ako. 
        Hindi dahil ayoko or iba tingin ko sa’yo.
        <br><br>
        To be honest, mas nahihiya ako sa’yo kasi ayoko isipin mo na inaabuso kita 
        or pineperahan kita. I want to be the one who takes care of you, 
        not the other way around.
        <br><br>
        Pero mali rin na nagmumukha akong unfair. 
        I’m really sorry kung nasaktan ka or nagtampo ka.
        <br><br>
        At gusto ko rin sabihin na walang magbabago sa atin. 
        Kung ililibre mo pa rin ako minsan, go pa rin ako — hindi dahil umaasa ako, 
        kundi dahil gusto ko lang maging normal at masaya tayo.
        <br><br>
        Sana sa lahat, walang magbago sa atin. 
        Ganon pa rin tayo. 💖
    `;

    document.querySelector(".buttons").style.display = "none";

    document.getElementById("update").innerHTML = `
        💖 Thank you for reading <br>
        I love you always 💕
    `;
}

/* Floating Hearts */
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);