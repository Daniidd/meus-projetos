function calculadora(num1, num2, operador) {
    try {
        if (!["+", "-", "*", "/", "%"].includes(operador)) {
            throw new Error("Operador não existente");
        }

        if (typeof num1 !== "number") {
            throw new Error("O parâmetro n1 não é um número inteiro");
        }

        if (typeof num2 !== "number") {
            throw new Error("O parâmetro n2 não é um número inteiro");
        }

        switch (operador) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                if (num2 === 0) {
                    throw new Error("A operação não pode ser executada pois o divisor é 0");
                }
                return num1 / num2;
            case "%":
                if (num2 === 0) {
                    throw new Error("A operação não pode ser executada pois o divisor é 0");
                }
                return num1 % num2;
        }
    } catch (error) {
        console.error("Houve um erro:", error.message);
    }
}

try {
    console.log(calculadora(10, 5, "+")); // Saída: 15
    console.log(calculadora(10, 0, "/")); // Saída: Erro: A operação não pode ser executada pois o divisor é 0
    console.log(calculadora(5, 3, "&")); // Saída: Erro: Operador não existente
    console.log(calculadora("abc", 3, "+")); // Saída: Erro: O parâmetro n1 não é um número
} catch (error) {
    console.error("Houve um erro:", error.message);
}
