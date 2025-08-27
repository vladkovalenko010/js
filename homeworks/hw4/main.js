// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

function squareArea(a, b) {
    let result;
    result = a * b;
    console.log(result);
    return result;
}

squareArea(3, 7);

// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function roundSquare(r) {
    let result = Math.PI * r *r;
    console.log(result);
    return result;
}

roundSquare(3);

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderArea(h, r) {
    let result = 2 * Math.PI * h * r;
    console.log(result);
    return result;
}

cylinderArea(3, 2);

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

let users = [
    {name: "John", email: "john@example.com"},
    {name: "Jane", email: "jane@example.com"},
    {name: "February", email: "february@example.com"}
]

function arrayPrinter(array) {
    for (const item of array) {
        console.log(item);
    }
}

arrayPrinter(users);

// #59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function textPrinter(text) {
    document.write(`
<p>${text}</p>
`)
}

textPrinter("Hello World!");

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function ulPrinter(text) {
    document.write(`
<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>
    `)
}

ulPrinter("Hello Okten");

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function ulQtyPrinter(text, qty) {
    document.write(`<ul>`)
    for (let i = 0; i < qty; i++) {
        document.write(`<li>${text} ${i+1}</li>`);
    }
    document.write(`</ul>`)
}

ulQtyPrinter("Hello Okten", 8);

// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function primitiveArrayPrinter(array) {
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}

primitiveArrayPrinter([1, 2, 4, 238, 23.2, true, false, 'hello', 'world']);

// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

function usersPrinter(array) {
    for (const item of array) {
        const id = item.id;
        const name = item.name;
        const age = item.age;

        document.write(`
        <div style="background-color: gray; border-radius: 10px; padding: 10px; margin-bottom: 5px">
        ${id} ${name} ${age}
        </div>
        `)
    }
}

let usersArray = [
    {id: 1, name: "John", age: 45},
    {id: 2, name: "Jane", age: 35},
    {id: 3, name: "George", age: 19},
    {id: 4, name: "Oleksandr", age: 23},
    {id: 5, name: "Andrii", age: 49},
]

usersPrinter(usersArray);

// #pghbnSB
// – створити функцію яка повертає найменьше число з масиву

function retSmallest(array) {
    let smallest = array[0];
    for (const item of array) {
        if (smallest > item) {
            smallest = item;
        }
    }
    return smallest;
}

let smallest = retSmallest([1, 3, -8, 6, 1, 0, -2, -30]);
console.log(smallest);

// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum;
}

let result = sum([1, 3, 4, 9, 3])
console.log(result);

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    if (index1 < arr.length && index2 < arr.length) {

        let element1 = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = element1;

        return arr;
    } else {
        return -Infinity;
    }


}

swapArray = [1, 3, 5, 1, 2, 8];
swapResult = swap(swapArray, 2, 3)
console.log(swapResult);

// #mkGDenYnNjn.html
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

let currencies = [
    {currency: "USD", value: 25},
    {currency: "EUR", value: 42},
    {currency: "GBP", value: 50}

]

function exchange(sumUAH, currencyValues, exchangeCurrency) {

    for (const item of currencyValues) {
        if (exchangeCurrency === item.currency) {
            return sumUAH / item.value;
            }
    }

    return 'Invalid currency'

}

let exchangeResult = exchange(10000, currencies, "USD");
console.log(exchangeResult);