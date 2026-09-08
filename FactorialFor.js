function factorialFor(n) {
    if (n < 0) return "El factorial no está definido para números negativos";

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

// Ejemplo de uso:
console.log(factorialFor(5)); // Resultado: 120git

function mostrarSerieFactorial(limite) {
    let factorial = 1;

    for (let i = 1; i <= limite; i++) {
        factorial *= i;
        console.log(`El factorial de ${i} (${i}!) es: ${factorial}`);
    }
}

// Ejemplo: Mostrar la serie para los primeros 5 números
mostrarSerieFactorial(5);