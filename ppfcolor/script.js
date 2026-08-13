const nickInput = document.getElementById('nickInput');
const idInput = document.getElementById('idInput');

const lightNameDisplay = document.getElementById('lightNameDisplay');
const darkNameDisplay = document.getElementById('darkNameDisplay');

const charDisplayLight = document.getElementById('charDisplayLight');
const charDisplayDark = document.getElementById('charDisplayDark');

function updateNickPreview(value) {
    if (!value || value.trim() === '') {
        lightNameDisplay.textContent = '—';
        darkNameDisplay.textContent = '—';
        return;
    }
    const hexColor = colorFromText(value);
    const lightColor = setBrightness(hexColor, false);
    const darkColor = setBrightness(hexColor, true);

    lightNameDisplay.style.color = lightColor;
    lightNameDisplay.textContent = value;

    darkNameDisplay.style.color = darkColor;
    darkNameDisplay.textContent = value;
}

function updateIdPreview(value) {
    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue) || value === '' || value === null || value === undefined) {
        charDisplayLight.style.background = '#f3f6fa';
        charDisplayLight.textContent = '?';

        charDisplayDark.style.background = '#3e3e4f';
        charDisplayDark.textContent = '?';
        return;
    }
    
    
    const hslColorLight = getColorFromId(numericValue, false);
    const hslColorDark = getColorFromId(numericValue, true);
    const charFromId = getCharFromId(numericValue);
    
    charDisplayLight.style.background = hslColorLight;
    charDisplayLight.style.color = '#a7a5a5';
    charDisplayLight.textContent = charFromId;

    charDisplayDark.style.background = hslColorDark;
    charDisplayDark.style.color = '#636363';
    charDisplayDark.textContent = charFromId;
}



nickInput.addEventListener('input', function(e) {
    updateNickPreview(e.target.value);
});

idInput.addEventListener('input', function(e) {
    updateIdPreview(e.target.value);
});

window.addEventListener('DOMContentLoaded', function() {
    if (nickInput.value) {
        updateNickPreview(nickInput.value);
    }
    if (idInput.value) {
        updateIdPreview(idInput.value);
    }
});