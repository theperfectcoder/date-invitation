// ==========================================
// Ժամադրության հրավեր ❤️
// script.js
// Մաս 1
// ==========================================

const intro = document.getElementById("intro");

const startBtn = document.getElementById("startBtn");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const laterBtn = document.getElementById("laterBtn");

const goBtn = document.getElementById("goBtn");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const modal = document.getElementById("modal");

const modalEmoji = document.getElementById("modalEmoji");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalButton = document.getElementById("modalButton");

let noCounter = 0;

let musicStarted = false;

// ==========================================

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(s => s.classList.remove("active"));

    screen.classList.add("active");

}

// ==========================================

function openModal(emoji, title, text) {

    modalEmoji.innerHTML = emoji;

    modalTitle.innerHTML = title;

    modalText.innerHTML = text;

    modal.classList.remove("hidden");

}

function closeModal() {

    modal.classList.add("hidden");

}

modalButton.onclick = closeModal;

// ==========================================
// Առաջին էկրան
// ==========================================

startBtn.onclick = () => {

    intro.animate([

        { opacity: 1 },

        { opacity: 0 }

    ], {

        duration: 700,

        fill: "forwards"

    });

    setTimeout(() => {

        showScreen(screen1);

        startTyping();

    }, 700);

};

// ==========================================

function startTyping() {

    const question =
        "Կուզե՞ս ինձ հետ ժամադրության գալ։ ❤️";

    const element =
        document.getElementById("question");

    element.innerHTML = "💭 Մի պահ...";

    setTimeout(() => {

        element.innerHTML = "";

        let i = 0;

        const timer = setInterval(() => {

            element.innerHTML += question[i];

            i++;

            if (i >= question.length) {

                clearInterval(timer);

            }

        }, 55);

    }, 900);

}

// ==========================================
// Այո
// ==========================================

yesBtn.onclick = () => {

    burstHearts();

    sparkleExplosion();

    startConfetti();

    setTimeout(() => {

        showScreen(screen2);

    }, 900);

};

// ==========================================
// Երաժշտություն
// ==========================================

musicBtn.onclick = async () => {

    if (musicStarted)
        return;

    try {

        await music.play();

        musicStarted = true;

        musicBtn.innerHTML =
            "🎵 Երաժշտությունը միացված է";

    }

    catch {

        openModal(

            "🎵",

            "Տեղեկություն",

            "Սեղմիր ևս մեկ անգամ 😊"

        );

    }

};

// ==========================================
// Պատահական թիվ
// ==========================================

function random(min, max) {

    return Math.random() * (max - min) + min;

}

// ==========================================
// Փախչող կոճակ
// ==========================================

// function moveButton(button) {

//     const padding = 20;

//     const width = button.offsetWidth;

//     const height = button.offsetHeight;

//     const maxX =
//         window.innerWidth - width - padding;

//     const maxY =
//         window.innerHeight - height - padding;

//     const x = Math.max(
//         padding,
//         Math.random() * maxX
//     );

//     const y = Math.max(
//         padding + 40,
//         Math.random() * maxY
//     );

//     button.style.position = "fixed";

//     button.style.left = x + "px";

//     button.style.top = y + "px";

//     button.style.transition =
//         "all .35s cubic-bezier(.2,.8,.2,1)";

//     button.style.zIndex = "10000";

// }

// ==========================================

function funnyAnswer() {

    noCounter++;

    if (noCounter === 1) {

        openModal(

            "😂",

            "Սխալ",

            "«Ոչ» պատասխանը ժամանակավորապես հասանելի չէ։ ❤️"

        );

    }

    else if (noCounter === 2) {

        openModal(

            "😏",

            "Հմմ...",

            "Կարծես ուզում ես փորձել, թե ինչ կլինի։ 😄"

        );

    }

    else if (noCounter === 3) {

        openModal(

            "🤖",

            "Համակարգը մտածում է...",

            "Երկար մտածելուց հետո պարզվեց, որ «Ոչ»-ը դեռ չի աշխատում։ 😂"

        );

    }

    else if (noCounter === 4) {

        openModal(

            "🥺",

            "Մի փոքր խնդրանք",

            "Շատ ուրախ կլինեմ, եթե ընտրես «Այո»։ ❤️"

        );

    }

    else if (noCounter === 5) {

        openModal(

            "😆",

            "Վա՜յ",

            "Դու իսկապես շատ համառ ես։ 😂"

        );

    }

    else {

        const texts = [

            "«Ոչ»-ը դեռ փակ է 😌",

            "Փորձիր սեղմել «Այո» ❤️",

            "Ծրագիրը ամեն ինչ մտածել է 😎",

            "Այս կոճակը պարզապես չի աշխատում 😂"

        ];

        openModal(

            "🤣",

            "Դեռ չե՞ս հանձնվում",

            texts[
            Math.floor(
                Math.random() * texts.length
            )
            ]

        );

    }

}

// ==========================================

// function escape(button) {

//     button.addEventListener(

//         "mouseenter",

//         () => {

//             moveButton(button);

//             funnyAnswer();

//         }

//     );

//     button.addEventListener(

//         "touchstart",

//         e => {

//             e.preventDefault();

//             moveButton(button);

//             funnyAnswer();

//         },

//         {

//             passive: false

//         }

//     );

// }

// escape(noBtn);

// escape(laterBtn);

// ==========================================
// Убегающие кнопки (iPhone friendly)
// ==========================================

const safeButton = yesBtn;

function runAway(button) {

    const safe = safeButton.getBoundingClientRect();

    const w = button.offsetWidth;
    const h = button.offsetHeight;

    const padding = 20;

    let x;
    let y;

    do {

        x = Math.random() *
            (window.innerWidth - w - padding * 2)
            + padding;

        y = Math.random() *
            (window.innerHeight - h - padding * 2)
            + padding;

    }

    while (

        x < safe.right + 20 &&
        x + w > safe.left - 20 &&
        y < safe.bottom + 20 &&
        y + h > safe.top - 20

    );

    button.style.position = "fixed";

    button.style.left = x + "px";

    button.style.top = y + "px";

    button.style.transition =
        "all .35s cubic-bezier(.18,.89,.32,1.28)";

    button.style.zIndex = "9999";

}

// ==========================================

function attachRun(button) {

    button.addEventListener("mouseenter", () => {

        runAway(button);

        funnyAnswer();

    });

    button.addEventListener("touchstart", (e) => {

        e.preventDefault();

        runAway(button);

        funnyAnswer();

    }, {

        passive: false

    });

}

// ==========================================

attachRun(noBtn);
attachRun(laterBtn);

// ==========================================
// Если палец приближается
// ==========================================

document.addEventListener("touchmove", (e) => {

    const touch = e.touches[0];

    [noBtn, laterBtn].forEach(button => {

        const rect = button.getBoundingClientRect();

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dist = Math.hypot(

            touch.clientX - cx,

            touch.clientY - cy

        );

        if (dist < 90) {

            runAway(button);

        }

    });

}, { passive: true });

// ==========================================
// Если экран повернули
// ==========================================

window.addEventListener("resize", () => {

    noBtn.removeAttribute("style");

    laterBtn.removeAttribute("style");

});

document.addEventListener("touchmove", (e) => {

    [noBtn, laterBtn].forEach(button => {

        const rect = button.getBoundingClientRect();

        const touch = e.touches[0];

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.hypot(
            touch.clientX - centerX,
            touch.clientY - centerY
        );

        if (distance < 80) {
            moveButton(button);
        }

    });

}, { passive: true });

// ==========================================
// script.js
// Մաս 2
// Սրտիկներ, կոնֆետի, անցումներ
// ==========================================

const hearts = document.getElementById("hearts");
const petals = document.getElementById("petals");
const sparkles = document.getElementById("sparkles");

// ==========================================

const heartIcons = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💓",
    "💞"
];

const flowerIcons = [
    "🌸",
    "🌺",
    "🌷"
];

const sparkleIcons = [
    "✨",
    "⭐",
    "💫"
];

// ==========================================

function createFloating(container, icons) {

    const item =
        document.createElement("div");

    item.className = "float";

    item.innerHTML =
        icons[
        Math.floor(
            Math.random() * icons.length
        )
        ];

    item.style.left =
        Math.random() * 100 + "vw";

    item.style.fontSize =
        random(18, 38) + "px";

    item.style.animationDuration =
        random(5, 9) + "s";

    container.appendChild(item);

    setTimeout(() => {

        item.remove();

    }, 9000);

}

// ==========================================
// Սրտիկներ
// ==========================================

setInterval(() => {

    createFloating(
        hearts,
        heartIcons
    );

}, 350);

// ==========================================
// Ծաղիկներ
// ==========================================

setInterval(() => {

    createFloating(
        petals,
        flowerIcons
    );

}, 900);

// ==========================================
// Փայլեր
// ==========================================

setInterval(() => {

    createFloating(
        sparkles,
        sparkleIcons
    );

}, 700);

// ==========================================
// Կոնֆետի
// ==========================================

function startConfetti() {

    if (typeof confetti !== "function")
        return;

    const end =
        Date.now() + 3000;

    (function frame() {

        confetti({

            particleCount: 3,

            angle: 60,

            spread: 70,

            origin: {
                x: 0
            }

        });

        confetti({

            particleCount: 3,

            angle: 120,

            spread: 70,

            origin: {
                x: 1
            }

        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

}

// ==========================================
// Սրտիկների պայթյուն
// ==========================================

function burstHearts() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.innerHTML =
                heartIcons[
                Math.floor(
                    Math.random() * heartIcons.length
                )
                ];

            heart.style.position = "fixed";

            heart.style.left = "50%";

            heart.style.top = "55%";

            heart.style.fontSize =
                random(24, 45) + "px";

            heart.style.pointerEvents = "none";

            const angle =
                random(0, Math.PI * 2);

            const distance =
                random(120, 300);

            heart.animate([

                {

                    transform:
                        "translate(-50%,-50%) scale(.2)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(${Math.cos(angle) * distance}px,${Math.sin(angle) * distance}px)`,

                    opacity: 0

                }

            ], {

                duration: 1700,

                easing: "ease-out"

            });

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 1800);

        }, i * 30);

    }

}

// ==========================================
// Փայլերի պայթյուն
// ==========================================

function sparkleExplosion() {

    for (let i = 0; i < 45; i++) {

        const star =
            document.createElement("div");

        star.innerHTML =
            sparkleIcons[
            Math.floor(
                Math.random() * sparkleIcons.length
            )
            ];

        star.style.position = "fixed";

        star.style.left =
            random(0, 100) + "vw";

        star.style.top =
            random(0, 100) + "vh";

        star.style.fontSize =
            random(14, 24) + "px";

        document.body.appendChild(star);

        star.animate([

            {

                opacity: 0,

                transform: "scale(.2)"

            },

            {

                opacity: 1,

                transform: "scale(1.5)"

            },

            {

                opacity: 0,

                transform: "scale(.2)"

            }

        ], {

            duration:
                random(900, 1700)

        });

        setTimeout(() => {

            star.remove();

        }, 1800);

    }

}

// ==========================================
// Գնացինք
// ==========================================

goBtn.onclick = () => {

    const checked =
        document.querySelectorAll(
            ".card input:checked"
        );

    if (checked.length === 0) {

        openModal(

            "🤨",

            "Սպասիր",

            "Ընտրիր գոնե մեկ տարբերակ 😊"

        );

        return;

    }

    burstHearts();

    sparkleExplosion();

    startConfetti();

    setTimeout(() => {

        showScreen(screen3);

        startCarAnimation();

    }, 1000);

};

// ==========================================
// Փոքրիկ անիմացիա
// ==========================================

setInterval(() => {

    yesBtn.animate([

        {

            transform: "scale(1)"

        },

        {

            transform: "scale(1.08)"

        },

        {

            transform: "scale(1)"

        }

    ], {

        duration: 700

    });

}, 5000);

// ==========================================

document
    .querySelectorAll(".card")
    .forEach((card, index) => {

        setTimeout(() => {

            card.animate([

                {

                    transform: "translateY(0)"

                },

                {

                    transform: "translateY(-4px)"

                },

                {

                    transform: "translateY(0)"

                }

            ], {

                duration: 1300

            });

        }, index * 100);

    });

// ==========================================
// script.js
// Մաս 3
// Վերջնական անիմացիա
// ==========================================

const car = document.getElementById("car");
const bouquet = document.getElementById("bouquet");

// ==========================================

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

// ==========================================

async function startCarAnimation() {

    // Машина выезжает

    car.animate([

        {

            transform: "translateX(150vw)"

        },

        {

            transform: "translateX(0)"

        }

    ], {

        duration: 2500,

        easing: "ease-out",

        fill: "forwards"

    });

    await sleep(2500);

    // Небольшое покачивание

    car.animate([

        {

            transform: "translateX(0)"

        },

        {

            transform: "translateX(-8px)"

        },

        {

            transform: "translateX(8px)"

        },

        {

            transform: "translateX(0)"

        }

    ], {

        duration: 600

    });

    await sleep(500);

    // Появляется букет

    bouquet.style.opacity = "1";

    bouquet.animate([

        {

            opacity: 0,

            transform: "translateY(-60px) scale(.3)"

        },

        {

            opacity: 1,

            transform: "translateY(10px) scale(1.2)"

        },

        {

            opacity: 1,

            transform: "translateY(0) scale(1)"

        }

    ], {

        duration: 1200,

        easing: "ease-out",

        fill: "forwards"

    });

    burstHearts();

    sparkleExplosion();

    startConfetti();

    await sleep(1000);

    showFinalMessage();

}

// ==========================================

function showFinalMessage() {

    const box = document.createElement("div");

    box.style.position = "fixed";
    box.style.left = "50%";
    box.style.top = "50%";
    box.style.transform = "translate(-50%,-50%)";
    box.style.width = "90%";
    box.style.maxWidth = "360px";
    box.style.background = "rgba(255,255,255,.92)";
    box.style.backdropFilter = "blur(20px)";
    box.style.borderRadius = "28px";
    box.style.padding = "30px";
    box.style.textAlign = "center";
    box.style.boxShadow = "0 20px 60px rgba(0,0,0,.18)";
    box.style.zIndex = "999999";

    box.innerHTML = `

        <div style="font-size:80px;">❤️</div>

        <h2 style="
            color:#ff4f8b;
            margin-top:15px;
        ">

            Շնորհակալություն 😊

        </h2>

        <p style="
            margin-top:18px;
            line-height:1.7;
            font-size:18px;
        ">

            Շնորհակալ եմ,
            որ ընդունեցիր հրավերս։ ❤️

            <br><br>

            Շատ ուրախ եմ,
            որ շուտով կհանդիպենք։

            <br><br>

            Հուսով եմ՝
            մեզ շատ հաճելի
            օր է սպասվում։ ✨

        </p>

        <button
            id="finishButton"

            style="
                margin-top:25px;
                width:100%;
                border:none;
                border-radius:18px;
                padding:18px;
                font-size:18px;
                font-weight:bold;
                cursor:pointer;
                color:white;
                background:linear-gradient(135deg,#ff4f8b,#ff78ad);
            "

        >

            🌸 Մինչ հանդիպում

        </button>

    `;

    document.body.appendChild(box);

    box.animate([

        {

            opacity: 0,

            transform: "translate(-50%,-45%) scale(.7)"

        },

        {

            opacity: 1,

            transform: "translate(-50%,-50%) scale(1)"

        }

    ], {

        duration: 700,

        easing: "ease-out",

        fill: "forwards"

    });

    document
        .getElementById("finishButton")
        .onclick = finishAnimation;

}

// ==========================================

function finishAnimation() {

    startConfetti();

    for (let i = 0; i < 250; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.innerHTML =
                heartIcons[
                Math.floor(
                    Math.random() * heartIcons.length
                )
                ];

            heart.style.position = "fixed";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.top = "110vh";

            heart.style.fontSize =
                random(18, 48) + "px";

            heart.style.pointerEvents = "none";

            document.body.appendChild(heart);

            heart.animate([

                {

                    transform:
                        "translateY(0)",

                    opacity: 1

                },

                {

                    transform:
                        `translateY(-${random(700, 1200)}px)
                     translateX(${random(-220, 220)}px)
                     rotate(${random(0, 720)}deg)`,

                    opacity: 0

                }

            ], {

                duration:
                    random(3500, 6000),

                easing: "ease-out"

            });

            setTimeout(() => {

                heart.remove();

            }, 6000);

        }, i * 20);

    }

    showGoodbye();

}

// ==========================================

function showGoodbye() {

    const text =
        document.createElement("div");

    text.style.position = "fixed";
    text.style.left = "50%";
    text.style.top = "12%";
    text.style.transform = "translateX(-50%)";
    text.style.fontSize = "38px";
    text.style.fontWeight = "900";
    text.style.color = "#ff4f8b";
    text.style.textShadow = "0 10px 25px rgba(255,0,120,.35)";
    text.style.zIndex = "999999";

    text.innerHTML = "😊 Մինչ հանդիպում";

    document.body.appendChild(text);

    text.animate([

        {

            opacity: 0,

            transform: "translateX(-50%) scale(.5)"

        },

        {

            opacity: 1,

            transform: "translateX(-50%) scale(1.1)"

        },

        {

            opacity: 1,

            transform: "translateX(-50%) scale(1)"

        }

    ], {

        duration: 1200,

        fill: "forwards"

    });

}