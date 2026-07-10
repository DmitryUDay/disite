// --- Загружаем JSON ---
fetch("app.json")
    .then(res => res.json())
    .then(data => {
        const app = data.find(a => a.idi === idi);

        if (!app) {
            window.location.href = "404.html";
            return;
        }

        const ua = navigator.userAgent;
        if (app) {

            // document.getElementById("contents").textContent = `ABartaj || ${app.name}`; //
            // document.getElementById("IconApp").src = app.icon;//
            // document.getElementById("raiting").style.display = 'block';//
            // document.getElementById("selfDeveloop").href = app.siteDeveloper;//

            // if (app.updateText && app.updateText.trim() !== "") {
            //     updatesElement.textContent = app.updateText;
            //     mwsBlock.style.display = "block";
            // } else {
            //     mwsBlock.style.display = "none";
            // }



        }
});