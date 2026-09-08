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
console.log(factorialFor(23)); // Resultado: 120git
