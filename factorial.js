function factorial(numero) {
    if (!Number.isInteger(numero) || numero < 0) {
        throw new Error("El número debe ser un entero mayor o igual que 0");
    }

    if (numero === 0 || numero === 1) {
        return 1;
    }

    return numero * factorial(numero - 1);
}

console.log(factorial(5)); // 120