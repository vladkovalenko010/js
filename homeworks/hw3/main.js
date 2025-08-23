// #y7crMeFwHcS
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for(let i=0; i<10; i++){
    document.write(`<div>Hello world</div>`);
}

// #TYj7ncx
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>HELLO WORLD ${i}</div>`);
}



// #uzkt71dp
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write('<h1>Hello Okten</h1>');
    i++;
}



// #uzkt71dp
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let x = 0;
while (x < 20) {
    document.write(`<h1 class="brown">Hello Okten ${x+1}</h1>`);
    x++;
}

// #vLSZKMlO
// – Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру за шаблоном

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)

for (let i = 0; i < listOfItems.length; i++) {
    let listOfItem = listOfItems[i];
    document.write(`<li>${listOfItem}</li>`);
}

document.write(`</ul>`)

// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [

    {

        title: 'milk',

    price: 22,

    image: 'https://horizon.com/wp-content/uploads/horizon-organic-whole-milk-lockup-v3-.png'

    },

{

    title: 'juice',

    price: 27,

        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'

},

{

    title: 'tomato',

    price: 47,

        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'

},

{

    title: 'tea',

    price: 15,

        image: 'https://www.naturalneherbatki.pl/1167-medium_default/my-lord-green-tea-100-g.jpg'

},

];

for (const product of products) {
    const title = product.title;
    const price = product.price;
    const image = product.image;

    document.write(`
<div class="product-card">
<h2 class="title">${title}</h2>
<h2 class="price">${price} UAH</h2>
<img class="image" src="${image}" alt="">
</div>
`)
}

// #4WrHwFTEop0
// є масив
// за допомогою циклу вивести:
//  – користувачів зі статусом true
//  – користувачів зі статусом false
//  – користувачів, які старші за 30 років

let users = [

    {name: 'vasya', age: 31, status: false},

{name: 'petya', age: 30, status: true},

{name: 'kolya', age: 29, status: true},

{name: 'olya', age: 28, status: false},

{name: 'max', age: 30, status: true},

{name: 'anya', age: 31, status: false},

{name: 'oleg', age: 28, status: false},

{name: 'andrey', age: 29, status: true},

{name: 'masha', age: 30, status: true},

{name: 'olya', age: 31, status: false},

{name: 'max', age: 31, status: true}

];

console.log('status true');

for (const user of users) {
    const status = user.status;

    if (status) {
        console.log(user);
    }
}

console.log('-----------------');
console.log('status false');

for (const user of users) {
    const status = user.status;

    if (!status) {
        console.log(user);
    }
}

console.log('-----------------');
console.log('age > 30');

for (const user of users) {
    const age = user.age;


    if (age > 30) {
        console.log(user);
    }
}