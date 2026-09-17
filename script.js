/* =====================================================
   SETTINGS
===================================================== */

/*
   CHANGE YOUR PASSWORD HERE
*/

const SECRET_PASSWORD = "september21";


/* =====================================================
   PASSWORD
===================================================== */

const passwordInput =
    document.getElementById("passwordInput");

const lockScreen =
    document.getElementById("lockScreen");

const website =
    document.getElementById("website");

const errorMessage =
    document.getElementById("errorMessage");


function unlock() {

    const enteredPassword =
        passwordInput.value.trim();


    if (enteredPassword === SECRET_PASSWORD) {

        errorMessage.classList.remove("show");

        lockScreen.classList.add("unlocked");

        setTimeout(() => {

            lockScreen.style.display = "none";

            website.classList.remove("hidden");

            window.scrollTo(0, 0);

        }, 900);

    }

    else {

        errorMessage.classList.add("show");

        passwordInput.value = "";

        passwordInput.focus();

    }

}


/* Press ENTER */

passwordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            unlock();

        }

    }
);


/* =====================================================
   MUSIC
===================================================== */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


let musicPlaying = false;


function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicButton.innerHTML =
            "♫ <span>Music</span>";

        musicPlaying = false;

    }

    else {

        music.play()
            .then(() => {

                musicButton.innerHTML =
                    "❚❚ <span>Music</span>";

                musicPlaying = true;

            })
            .catch(() => {

                alert(
                    "Add your song to music/song.mp3 first."
                );

            });

    }

}


/* =====================================================
   FINAL SURPRISE
===================================================== */

function showSurprise() {

    const surprise =
        document.getElementById("surprise");

    surprise.classList.add("show");

}


/* =====================================================
   FLOATING PARTICLES
===================================================== */

const particleContainer =
    document.querySelector(".particles");


function createParticle() {

    if (!particleContainer) return;


    const particle =
        document.createElement("span");


    particle.innerHTML =
        Math.random() > .5 ? "♡" : "·";


    particle.style.position =
        "fixed";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.bottom =
        "-20px";

    particle.style.color =
        "rgba(216,137,145,.25)";

    particle.style.fontSize =
        (Math.random() * 10 + 5) + "px";

    particle.style.pointerEvents =
        "none";

    particle.style.zIndex =
        "1";

    particle.style.transition =
        "transform 10s linear, opacity 10s linear";


    particleContainer.appendChild(
        particle
    );


    setTimeout(() => {

        particle.style.transform =
            `translateY(-${window.innerHeight + 100}px)`;

        particle.style.opacity = "0";

    }, 100);


    setTimeout(() => {

        particle.remove();

    }, 10000);

}


setInterval(
    createParticle,
    700
);
/* =====================================================
   FLOWER BOUQUET
===================================================== */

function openBouquet() {

    const bouquet = document.getElementById("bouquet");
    const openedBouquet = document.getElementById("openedBouquet");
    const tapHint = document.getElementById("tapHint");

    bouquet.style.display = "none";

    tapHint.style.display = "none";

    openedBouquet.style.display = "block";

    setTimeout(() => {
        openedBouquet.classList.add("show");
    }, 50);

}