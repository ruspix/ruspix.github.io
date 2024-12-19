document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const home = document.getElementById('home');
    const instructions = document.getElementById('instructions');
    const news = document.getElementById('guides');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            if (tab.innerText === "Инструкция по скрипту") {
                home.style.display = "none";
                instructions.style.display = "block";
                news.style.display = "none";
            } else if (tab.innerText === "Мини-гайды") {
                home.style.display = "none";
                instructions.style.display = "none";
                news.style.display = "block";
            } else {
                home.style.display = "block";
                instructions.style.display = "none";
                news.style.display = "none";
            }
        });
    });
});