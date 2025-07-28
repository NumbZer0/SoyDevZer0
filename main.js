// Script para navegação e exibição dinâmica

function showMyHubs() {
    // Deixa a aba My Hub's ativa
    document.querySelectorAll('aside li').forEach(li => li.classList.remove('active'));
    document.querySelector('aside li.myhubs').classList.add('active');

    // Conteúdo do script
    const script = `loadstring(game:HttpGet("https://raw.githubusercontent.com/NumbZer0/Steal-A-Brainrot-/refs/heads/main/SoyDevWinHub.lua"))()`;

    // Exibe a caixa com o script e botão de copiar
    document.getElementById('main-content').innerHTML = `
        <h2>Steal A Brainrot (My)</h2>
        <div id="brainrot-container">
            <button class="copy-btn" onclick="copyScript()">Copy</button>
            <code id="script-code">${script}</code>
        </div>
    `;
}

// Função para copiar o script
function copyScript() {
    const code = document.getElementById('script-code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        let btn = document.querySelector('.copy-btn');
        btn.innerText = "Copied!";
        setTimeout(() => { btn.innerText = "Copy"; }, 1200);
    });
}

// Deixar a aba My Hub's ativa ao carregar a página
window.onload = showMyHubs;
