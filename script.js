const output = document.getElementById("output");

function manipulateArray() {
    return new Promise((resolve) => {
        const array = [1, 2, 3, 4];
        setTimeout(() => resolve(array), 3000);
    });
}

manipulateArray()
    .then((array) => {
        return new Promise((resolve) => {
            const evenNumbers = array.filter(num => num % 2 === 0);
            setTimeout(() => {
                output.textContent = `Even numbers: ${evenNumbers.join(", ")}`;
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        return new Promise((resolve) => {
            const multipliedNumbers = evenNumbers.map(num => num * 2);
            setTimeout(() => {
                output.textContent = `Multiplied even numbers: ${multipliedNumbers.join(", ")}`;
                resolve(multipliedNumbers);
            }, 2000);
        });
    });