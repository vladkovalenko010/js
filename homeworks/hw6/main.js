// #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’

let s1 = 'hello world';
let s2 = 'lorem ipsum';
let s3 = 'javascript is cool';

console.log(s1.length);
console.log(s2.length);
console.log(s3.length);

// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let sc1 = 'hello world';
let sc2 = 'lorem ipsum';
let sc3 = 'javascript is cool';

console.log(sc1.toUpperCase());
console.log(sc2.toUpperCase());
console.log(sc3.toUpperCase());

// #ClDsAm7xba7
//
// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let sl1 = 'HELLO WORLD';
let sl2 = 'LOREM IPSUM';
let sl3 = 'JAVASCRIPT IS COOL';

console.log(sl1.toLowerCase());
console.log(sl2.toLowerCase());
console.log(sl3.toLowerCase());

// #0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let clear = str.trim();
console.log(clear);

// #bfoJuse4ZzP

// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str = ‘Ревуть воли як ясла повні’;

// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’];

let stringToArray = str => {
    if (str){
        return str.split(' ');
    }
    return [''];
}

console.log(stringToArray('Ревуть воли як ясла повні'));

// #Rbr5kEQ

// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

let arr = [10, 8 ,-7 ,55 ,987 ,-1011 ,0 ,1050 , 0];
const strings = arr.map(number => {
    return number.toString();
})

console.log(strings);

// #5hqyKTfmc

// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.

// let nums = [11,21,3];

// sortNums(nums,’ascending’) // [3,11,21]

// sortNums(nums,’descending’) // [21,11,3]

let nums = [11, 21, 3];

function sortNums(array, direction) {
    const sort = array.sort((a, b) => a - b);
    if (direction === 'asc') {
        return sort;
    }
    if (direction === 'desc') {
        return sort.reverse();
    }
}

console.log(sortNums(nums, 'asc'));


// #yo06d74c1C
// – є масив

// — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4}

];

const map = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
    value.id = index + 1;
    return value;
})

console.log(map);

/*#4LJn7zBx

взяти з arrays.js масив coursesArray

–написати пошук всіх об’єктів, в яких в modules є sass

–написати пошук всіх об’єктів, в яких в modules є docker*/

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));

console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));

/*#bolvdlhP

 описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу

Після опису, використовуючи функції масивів:

 – знайти піковий туз

 – всі шістки

 – всі червоні карти

 – всі буби

 – всі трефи від 9 та більше*/

let deck = [];

const suits = ['spade', 'club', 'diamond', 'heart'];
const cardValues = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

for (let suit of suits) {
    for (let cardValue of cardValues) {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
        deck.push({value: cardValue, suit: suit, color: color});
    }
}
console.log(deck);

console.log(deck.filter(card => {
    return (card.suit === 'spade' && card.value === 'ace');
}));

console.log(deck.filter(card => {
    return (card.value === 6);
}));

console.log(deck.filter(card => {
    return (card.color === 'red');
}));

console.log(deck.filter(card => {
    return (card.suit === 'diamond');
}));

console.log(deck.filter(card => {
    return (card.suit === 'club' && (card.value >= 9 || typeof card.value === 'string'));
}));

let suitsGrouped = {
    spade: [],
    diamond: [],
    club: [],
    heart: []
};

let grouped = deck.reduce((acc, card) => {
    acc[card.suit].push(card);
    return acc;
}, suitsGrouped);

console.log(grouped);