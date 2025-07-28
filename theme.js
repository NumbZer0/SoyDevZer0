// Alterna cor arcade entre vermelho e verde (RGB puro)
const arcadeColors = ['#FF0000', '#00FF00'];
let colorIndex = 0;
setInterval(() => {
    colorIndex = 1 - colorIndex;
    document.documentElement.style.setProperty('--arcade-color', arcadeColors[colorIndex]);
}, 1800); // alterna a cada 1.8 segundos
