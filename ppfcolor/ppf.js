/*
 * create a simple hash from a string
 */
function simpleHash(str) {
  if (!str) return '0';
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  if (hash < 0) hash >>>= 0;
  return hash.toString(16).toUpperCase();
}

/*
 * generates a color based on a given string
 */
function colorFromText(str) {
  return `#${`00000${simpleHash(str)}`.slice(-6)}`;
}

/*
 * generates a color based on a number
 */
function getColorFromId(id, isDarkMode = false) {
  const hue = (id * 397) % 360;
  if (isDarkMode) {
    return `hsl(${hue}, 50%, 20%)`;
  }
  return `hsl(${hue}, 35%, 90%)`;
}

/*
 * choose a char based on number
 */
function getCharFromId(is) {
  const charCode = 65 + (is % 26);
  return String.fromCharCode(charCode);
}

/*
 * sets a color into bright or dark mode
 */
function setBrightness(hex, dark = false) {
  hex = hex.replace(/^\s*#|\s*$/g, '');

  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, '$1$1');
  }

  let r = Math.floor(parseInt(hex.substring(0, 2), 16) / 2);
  let g = Math.floor(parseInt(hex.substring(2, 4), 16) / 2);
  let b = Math.floor(parseInt(hex.substring(4, 6), 16) / 2);
  if (dark) {
    r += 128;
    g += 128;
    b += 128;
  }
  r = `0${r.toString(16)}`.slice(-2);
  g = `0${g.toString(16)}`.slice(-2);
  b = `0${b.toString(16)}`.slice(-2);
  return `#${r}${g}${b}`;
}