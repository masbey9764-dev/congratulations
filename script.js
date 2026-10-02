```javascript
/* =========================================
   GRADUATION WEBSITE - TEH SARAH
   JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const heartsContainer = document.querySelector(".hearts");
    const starsContainer = document.querySelector(".stars");
    const celebrateButton = document.getElementById("celebrateButton");
    const celebration = document.getElementById("celebration");


    /* =========================================
       FLOATING HEARTS ❤️
    ========================================= */

    function createHeart() {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        // Variasi bentuk hati
        const heartSymbols = [
            "❤️",
            "💗",
            "💖",
            "💕",
            "💓",
            "💞"
        ];

        heart.innerHTML =
            heartSymbols[
                Math.floor(Math.random() * heartSymbols.length)
            ];

        // Posisi horizontal acak
        heart.style.left =
            Math.random() * 100 + "%";

        // Ukuran acak
        const size =
            Math.random() * 25 + 15;

        heart.style.fontSize =
            size + "px";

        // Kecepatan animasi acak
        const duration =
            Math.random() * 5 + 5;

        heart.style.animationDuration =
            duration + "s";

        // Delay kecil secara acak
        heart.style.animationDelay =
            Math.random() * 1.5 + "s";

        heartsContainer.appendChild(heart);

        // Hapus setelah animasi selesai
        setTimeout(() => {
            heart.remove();
        }, (duration + 2) * 1000);
    }


    // Hati muncul otomatis
    setInterval(createHeart, 450);


    /* =========================================
       SPARKLE ✨
    ========================================= */

    function createStar() {

        const star = document.createElement("div");

        star.classList.add("star");

        const symbols = [
            "✦",
            "✧",
            "✨",
            "⋆",
            "✩"
        ];

        star.innerHTML =
            symbols[
                Math.floor(Math.random() * symbols.length)
            ];

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.fontSize =
            Math.random() * 10 + 8 + "px";

        star.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        star.style.animationDelay =
            Math.random() * 2 + "s";

        starsContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 6000);
    }


    // Sparkle otomatis
    setInterval(createStar, 300);


    /* =========================================
       INITIAL SPARKLES
    ========================================= */

    for (let i = 0; i < 25; i++) {
        createStar();
    }


    /* =========================================
       BUTTON CELEBRATION
    ========================================= */

    celebrateButton.addEventListener("click", () => {

        // Tampilkan pesan
        celebration.classList.add("show");

        // Ubah teks tombol
        celebrateButton.innerHTML =
            "🎉 Congratulations Teh Sarah! ❤️";

        // Buat banyak hati
        for (let i = 0; i < 35; i++) {

            setTimeout(() => {
                createHeart();
            }, i * 70);

        }

        // Jalankan confetti
        createConfetti();


        // Scroll otomatis pada HP
        setTimeout(() => {

            celebration.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    });


    /* =========================================
       CONFETTI 🎉
    ========================================= */

    function createConfetti() {

        const confettiSymbols = [
            "🎉",
            "✨",
            "🎊",
            "❤️",
            "💖",
            "🌸",
            "⭐"
        ];

        for (let i = 0; i < 60; i++) {

            const confetti =
                document.createElement("div");

            confetti.innerHTML =
                confettiSymbols[
                    Math.floor(
                        Math.random() *
                        confettiSymbols.length
                    )
                ];

            confetti.style.position =
                "fixed";

            confetti.style.left =
                Math.random() * 100 + "vw";

            confetti.style.top =
                "-30px";

            confetti.style.fontSize =
                Math.random() * 20 + 12 + "px";

            confetti.style.zIndex =
                "9999";

            confetti.style.pointerEvents =
                "none";

            confetti.style.transition =
                "transform 3s ease-in, opacity 3s ease-in";

            document.body.appendChild(confetti);


            // Animasi jatuh
            setTimeout(() => {

                const rotation =
                    Math.random() * 720 - 360;

                const xMove =
                    Math.random() * 300 - 150;

                confetti.style.transform =
                    `translate(${xMove}px, 110vh)
                     rotate(${rotation}deg)`;

                confetti.style.opacity = "0";

            }, 50);


            // Hapus confetti
            setTimeout(() => {
                confetti.remove();
            }, 3500);

        }

    }


    /* =========================================
       EXTRA HEART BURST
       Saat mouse diklik
    ========================================= */

    document.addEventListener("click", (event) => {

        // Jangan membuat burst tambahan
        // ketika klik tombol
        if (event.target === celebrateButton) {
            return;
        }

        for (let i = 0; i < 5; i++) {

            const heart =
                document.createElement("div");

            heart.innerHTML = "❤️";

            heart.style.position =
                "fixed";

            heart.style.left =
                event.clientX + "px";

            heart.style.top =
                event.clientY + "px";

            heart.style.fontSize =
                Math.random() * 15 + 12 + "px";

            heart.style.pointerEvents =
                "none";

            heart.style.zIndex =
                "9999";

            heart.style.transition =
                "all 1s ease-out";

            document.body.appendChild(heart);


            const x =
                (Math.random() - 0.5) * 150;

            const y =
                (Math.random() - 0.5) * 150;


            setTimeout(() => {

                heart.style.transform =
                    `translate(${x}px, ${y}px)
                     scale(1.5)`;

                heart.style.opacity = "0";

            }, 20);


            setTimeout(() => {
                heart.remove();
            }, 1100);

        }

    });


    /* =========================================
       CONSOLE MESSAGE
    ========================================= */

    console.log(
        "🎓 Congratulations Teh Sarah Juhairiyah! ❤️"
    );

    console.log(
        "Semoga sukses untuk perjalanan barunya! ✨"
    );

});
```
