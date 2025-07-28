// Abre/fecha a página de scripts
document.getElementById("myHubsBtn").addEventListener("click", () => {
  const scriptsPage = document.getElementById("scriptsPage");
  scriptsPage.style.display = scriptsPage.style.display === "none" ? "block" : "none";
});

// Toggle do script expandido
document.querySelectorAll(".toggle-script").forEach(button => {
  button.addEventListener("click", () => {
    const scriptBox = button.nextElementSibling;
    scriptBox.style.display = scriptBox.style.display === "none" ? "block" : "none";
  });
});

// Copiar script para a área de transferência
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const code = btn.previousElementSibling.innerText.trim();
    navigator.clipboard.writeText(code);
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = "Copy", 2000);
  });
});
