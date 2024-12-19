// Generar la lista de imágenes automáticamente
const images = [];
for (let i = 1; i <= 42; i++) {
    images.push(`imagenes/titi (${i}).JPEG`);
}

// Obtener referencias a elementos HTML
const generateButton = document.getElementById("generateButton");
const randomImage = document.getElementById("randomImage");

// Función para generar una imagen aleatoria
function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImage.src = images[randomIndex];
    randomImage.classList.remove("hidden");
}

// Asociar la función al botón
generateButton.addEventListener("click", generateRandomImage);
