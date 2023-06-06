const numbers = [23, 456, 67, 789, 98];

c = numbers.map(function (number) {
    var reverse = 0;
    while (number > 0) {
        var remainder = number % 10;
        reverse = (reverse * 10) + remainder;
        number = parseInt(number / 10);

    }
    return reverse;
})
document.write(`reversed numbers in the array is ${c}`);