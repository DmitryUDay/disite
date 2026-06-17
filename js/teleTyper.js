const baseText = "Создаем сайты, которые";
const words = [
    "приводят клиентов",
    "работают за вас",
    "приносят заказы",
    "экономят время",
    "приносят доход",
    "продают даже ночью"
];
const element = document.getElementById("changing-text");
let wordIndex = 0;
let i = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        element.textContent = currentWord.substring(0, i);
        element.className = `changing-text color-${wordIndex}`;
        i++;

        if (i > currentWord.length) {
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 2000);
            return;
        }
    } else {
        element.textContent = currentWord.substring(0, i);
        i--;

        if (i < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            i = 0;

            setTimeout(type, 300);
            return;
        }
    }

    const speed = isDeleting ? 150 : 100;
    setTimeout(type, speed);
}

setTimeout(type, 500);