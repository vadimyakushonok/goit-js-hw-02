const totalInput = function(input) {
    const numbers = [];
    
    do {
        input = prompt('Введи число');
        numbers.push(input);
    } while(input !== null);

    let total = 0;
    for (let number of numbers) {
        total += Number(number);
    }

    return `Общая сумма чисел равна ${total}`;
}

console.log(totalInput());
console.log(totalInput());