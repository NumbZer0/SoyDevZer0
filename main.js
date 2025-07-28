// RGB alternando entre verde e vermelho
const rgbTab = document.getElementById('myHubsTab');
let hue = 0;
setInterval(() => {
  hue += 1;
  const r = Math.floor(255 * Math.abs(Math.sin(hue * 0.05)));
  const g = Math.floor(255 * Math.abs(Math.sin(hue * 0.05 + Math.PI)));
  rgbTab.style.backgroundColor = `rgb(${r},${g},0)`;
}, 50);

// Toggle da lista de scripts
const tab = document.getElementById('myHubsTab');
const list = document.getElementById('scriptList');
tab.addEventListener('click', () => {
  list.style.display = list.style.display === 'none' ? 'block' : 'none';
});

// Expansão/retração dos scripts
document.querySelectorAll('.script-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';
  });
});

// Botão copiar
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const code = button.previousElementSibling.innerText;
    navigator.clipboard.writeText(code);
    button.innerText = 'Copiado!';
    setTimeout(() => (button.innerText = 'Copiar'), 1500);
  });
});
