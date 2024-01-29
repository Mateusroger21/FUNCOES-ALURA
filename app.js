//Criar uma função que exibe "Olá, mundo!" no console.
function OlaMundo() {
    return 'Olá Mundo';
}
console.log(OlaMundo());

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nome(nome) {
    return "Olá, " + nome;
}
console.log(nome('mateus'));

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numero(numero1,) {
    return numero1 * 2;
}
console.log(numero(3));

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function numeroMedia(num1, num2, num3,) {
    return (num1 + num2 + num3) / 3;
}
console.log(numeroMedia(5, 8, 6));

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function NumeroMaior(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    else (number1 < number2)
    {
        return number2;
    }
}
console.log(NumeroMaior(3, 4));

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numeroRetorna(Numerozinho1) {
    return Numerozinho1 * Numerozinho1;
}
console.log(numeroRetorna(11));