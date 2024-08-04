//? String

//! 1-misol \\\

// let str = 'assalomu alaykum'

// function search(arg) {
//     let count = 0
//     for (const i of arg) {
//         if (i=='a') {
//             count+=1
//         }
//     }
//     return count
// }

// console.log(search(str));

//! 2-misol \\\

// let str = 'salom'
// let res = str.slice(2)
// console.log(res);


//! 3-misol \\\

// let str = 'azizbek';

// function string(arg) {
//     return str.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();
// }

// let res = string(str);

// console.log(res);

//! 4-misol \\\

// function removeProbel(str) {
//     return str.replace(/\s+/g, '');
// }

// let str = "Salom bolalar ishlar qalay";
// let res = removeProbel(str);
// console.log(res);


//! 5-misol \\\

// let str = 'salom'

// function teskari(str) {
//     return str.split('').reverse().join('');
// }

// let res = teskari(str);
// console.log(res);

//! 6-misol \\\

// let str = 'salom'

// function count(arg) {
//     let count = 0;
//     for (const i of arg) {
//         count += 1
//     }
//     return count
// }

// console.log(count(str));

//! 7-misol \\\

// let str = 'salom'
// let res = str.repeat(3)
// console.log(res);

//! 8-misol \\\

// function num(str) {
//     return str.replace(/\D/g, '');
// }

// let str = "Salom123 azizbek456";
// let res = num(str);
// console.log(res);

//! 9-misol \\\

// let str = 'salom'
// let res = str.charAt(0)
// console.log(res);

//! 10-misol \\\

// let str = 'salom bolalar bugun js bilan tanishamiz'
// let res = str.search('js')
// console.log(res);


//? Array \\\

//! 1-misol \\\

// let arr = [1, 2, 3, 4, 5, 6]
// let max = arr[0]
// let res = arr.forEach(function (v) {
//     if (max < v) {
//         max = v
//     }
// })

// console.log(max);

//! 2-misol \\\

// let arr = [1, 2, 3, 4, 5, 6]

// let res = arr.filter(function (v) {
//     return v % 2 == 0
// })

// console.log(res);

//! 3-misol \\\

// let arr = [1, 2, 3, 4, 5, 6]
// let sum = 0;
// let res = arr.forEach(function (v) {
//     sum += v
// })

// console.log(sum);

//! 4-misol \\\

// let arr = [1, 2, 3, 4, 5, 6]
// let res = arr.map(function (v) {
//     return v * 2
// })
// console.log(res);

//! 5-misol \\\

// let arr = [1, -2, 3, -4, 5, -6]
// let res = arr.filter(function (v) {
//     return v > 0
// })
// console.log(res);

//! 6-misol \\\

// let arr = [1, 2, 2, 3, 4, 4, 5];

// function noyobElement(array) {
//     return array.filter((item, index) => array.indexOf(item) === index && array.lastIndexOf(item) === index);
// }

// let res = noyobElement(arr);
// console.log("Noyob elementlar:", res);


//! 7-misol \\\

// let arr = [1, 2, 3, 4, 5, 6]
// let arr2 = [11, 12, 13, 14, 15]

// function concatArray(arg1, arg2) {
//     let res = arg1.concat(arg2)
//     return res
// }

// console.log(concatArray(arr, arr2));

//! 8-misol \\\

// let arr = [1, 2, 3, 4, 5, 6]
// let res = []

// let res2 = arr.forEach(function (v) {
//     res.unshift(v)
// })

// console.log(res);

//! 9-misol \\\

// let arr = [1, 2, 3, 4, 5, 6]

// function indexArray(arg) {
//     let res = []
//     for (let i = 0; i <+ arg.length; i++) {
//         if (i % 2 == 1) {
//             res.push(i)
//         }
//     }
//     return res
// }
// console.log(indexArray(arr));

//! 10-misol \\\

// let arr = [1, 2, 3, 4, 5, 6]

// function ortacha(arg) {
//     if (arg.length === 0) return 0;

//     let sum = 0;

//     for (let element of arg) {
//         sum += element;
//     }

//     return sum / arg.length;
// }

// let res = ortacha(arr);
// console.log("O'rtacha qiymat:", res);

//? Object \\\

//! 1-misol \\\

// function getOldestPersonName(people) {
//     if (people.length === 0) {
//         return null;
//     }

//     let max = people[0];

//     for (let i = 1; i < people.length; i++) {
//         if (people[i].age > max.age) {
//             max = people[i];
//         }
//     }

//     return max.name;
// }

// let people = [
//     { name: "Ali", age: 30 },
//     { name: "Vali", age: 40 },
//     { name: "Salim", age: 35 }
// ];

// let res = getOldestPersonName(people);
// console.log(res);

//! 2-misol \\\

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// let age = 27;

// let res = people.filter(function (v) {
//     return v.age > age
// })

// console.log(res);

//! 3-misol \\\

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// let res = people.map(function(v){
//     return v.name
// })

// console.log(res);

//! 4-misol \\\

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// let sum = 0

// let res = people.forEach(function (v) {
//     sum = sum + v.age
// })

// console.log(sum);

//! 5-misol \\\

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// let ism = "Hasan";

// function search(arg, name1) {
//     for (const i of arg) {
//         if (i.name == name1) {
//             return i;
//         }
//     }
//     return null;
// }

// console.log(search(people, ism));

//! 6-misol \\\

// function ortacha(people) {
//     if (people.length === 0) {
//         return 0;
//     }

//     let res = 0;

//     for (const person of people) {
//         res += person.age;
//     }

//     return res / people.length;
// }

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// let res = ortacha(people);
// console.log(res);

//! 7-misol \\\

// const people = [
//     { name: "Ali", age: 25, gender: "male" },
//     { name: "Vali", age: 30, gender: "male" },
//     { name: "Hasan", age: 28, gender: "male" },
//     { name: "Salima", age: 22, gender: "female" }
// ];

// let res = people.filter(function(v){
//     return v.gender == 'female'
// })

// console.log(res);

//! 8-misol \\\

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// let res = people.map(function (v) {
//     return v.age + 1
// })

// console.log(res);
