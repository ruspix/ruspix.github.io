document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const home = document.getElementById('home');
    const guides = document.getElementById('guides');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            if (tab.innerText === "Гайды") {
                home.style.display = "none";
                guides.style.display = "block";
            } else {
                home.style.display = "block";
                guides.style.display = "none";
            }
        });
    });
});

function openGuide(guide) {
    document.getElementById('overlay').style.display = 'flex';
    fetch(`https://raw.githubusercontent.com/ruspix/ruspix.github.io/refs/heads/main/guides/${guide}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('guide-text').innerHTML = data;
        });
}

function closeGuide() {
    document.getElementById('overlay').style.display = 'none';
}