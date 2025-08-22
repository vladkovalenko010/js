// #67kfznmiMl
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arrayTask1 = ['str', 12, 234.2, NaN, undefined, true, false, '21432', null, []];
console.log(arrayTask1[0]);
console.log(arrayTask1[1]);
console.log(arrayTask1[2]);
console.log(arrayTask1[3]);
console.log(arrayTask1[4]);
console.log(arrayTask1[5]);
console.log(arrayTask1[6]);
console.log(arrayTask1[7]);
console.log(arrayTask1[8]);
console.log(arrayTask1[9]);

// #LARqoUj5I
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

let book1 = {title: 'The Silent Patient', pageCount: 336, genre: 'Psychological Thriller'};
let book2 = {title: 'Dune', pageCount: 896, genre: 'Science Fiction'};
let book3 = {title: 'The Great Gatsby', pageCount: 180, genre: 'Classic/Novel'};

// #sA3Gg1sCp
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title, pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book4 = {title: 'Brave New World', pageCount: 311, genre: 'Dystopian', authors: [{name: 'Aldous Huxley', age: 69}]}
let book5 = {title: 'The Catcher in the Rye', pageCount: 277, genre: 'Literary Fiction', authors: [{name: 'J. D. Salinger', age: 91}]}
let book6 = {title: 'The Great Gatsby', pageCount: 180, genre: 'Classic/Novel', authors: [{name: 'F. Scott Fitzgerald', age: 44}]}

// #jCHFnEbdmFd
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username, password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Vasya', username: 'vasya1', password: '23942343'},
    {name: 'Petya', username: 'petya2', password: '3-34234857'},
    {name: 'Kolya', username: 'kolya3', password: '23489245'},
    {name: 'Oleg', username: 'oleg4', password: '543950834'},
    {name: 'Igor', username: 'igor5', password: '23423p5-245'},
    {name: 'Sasha', username: 'sasha6', password: '8t0203243'},
    {name: 'Antnon', username: 'anton7', password: '4302423ffsd342'},
    {name: 'Andriy', username: 'andriy8', password: '342349234'},
    {name: 'Bogdan', username: 'bogdan9', password: '425u235'},
    {name: 'Dima', username: 'dima10', password: '3242348234'}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// #coYydZuaeEB
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let weather = [
    {day: 'Monday', morningTemp: 13, noonTemp: 19, eveningTemp: 11},
    {day: 'Tuesday', morningTemp: 12, noonTemp: 19, eveningTemp: 11},
    {day: 'Wednesday', morningTemp: 11, noonTemp: 18, eveningTemp: 10},
    {day: 'Thursday', morningTemp: 11, noonTemp: 17, eveningTemp: 11},
    {day: 'Friday', morningTemp: 13, noonTemp: 19, eveningTemp: 12},
    {day: 'Saturday', morningTemp: 14, noonTemp: 20, eveningTemp: 13},
    {day: 'Sunday', morningTemp: 17, noonTemp: 23, eveningTemp: 16}
]

// #bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;

if(x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = 0;

if(x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = -3;

if(x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// #3ckURgvs
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число

let time = 18;
if (time >= 0 && time <15) {
    console.log(1);
} else if (time >= 15 && time < 30) {
    console.log(2);
} else if (time >= 30 && time < 45) {
    console.log(3);
} else if (time >= 45 && time < 60) {
    console.log(4);
}

// #UMoNq4biWGe
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 1;
if (day >= 1 && day < 10) {
    console.log(1);
} else if (day >= 10 && day < 20) {
    console.log(2);
} else if (day >= 20 && day <= 31) {
    console.log(3);
}

// #KzrtqyQ
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNum = 2;

switch(dayNum) {
    case 1:
        console.log('Monday');
        break;
        case 2:
            console.log('Tuesday');
            break;
            case 3:
                console.log('Wednesday');
                break;
                case 4:
                    console.log('Thursday');
                    break;
                    case 5:
                        console.log('Friday');
                        break;
                        case 6:
                            console.log('Saturday');
                            break;
                            case 7:
                                console.log('Friday');
                                break;
}

// #uwsz1RnTQJ1
// – Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати, коли введені рівні числа.

let a = 12;
let b = 46;

if(a === b) {
    console.log('Equal');
} else if (a < b) {
    console.log(b);
} else if (b < a) {
    console.log(a);
}

// #iBvqtjEm
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let num = 0;

// if (num === 0 || num === '' || num === undefined || num === null || num === NaN) {
//     num = 'default';
// }

if (!num) {
    num = 'default';
}

// #awLXL6TBzg
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Super');
}
