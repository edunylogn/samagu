// Función para cambiar el idioma a español
function switchToSpanish() {
    document.querySelectorAll('[lang="es"]').forEach(function (element) {
        element.style.display = 'block';
    });
    document.querySelectorAll('[lang="en"]').forEach(function (element) {
        element.style.display = 'none';
    });
}

// Función para cambiar el idioma a inglés
function switchToEnglish() {
    document.querySelectorAll('[lang="es"]').forEach(function (element) {
        element.style.display = 'none';
    });
    document.querySelectorAll('[lang="en"]').forEach(function (element) {
        element.style.display = 'block';
    });
}