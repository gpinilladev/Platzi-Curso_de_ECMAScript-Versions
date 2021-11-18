// Dynamic Import
// Nos permite importar archivos de forma dinamica
const button = document.getElementById("btn");
button.addEventListener("click", async () => {
    const moduleTest = await import("./file.js");
    moduleTest.hello();
})