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
