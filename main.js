<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
function toggleMyHubs() {
    const container = document.getElementById("myHubsContainer");
    container.style.display = container.style.display === "none" ? "block" : "none";
}

function copyScript() {
    const code = document.getElementById("scriptCode").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Copiado com sucesso!");
    });
}
