// ЗМІННІ В JS 
// в математиці це змінні напр. х, у, z 
//3.14 
const pi = 3.14; // константа - величина яка не змінюєтся під час виконання скрипту
let square = 15;
var radius = 5; // застаріле ключове слово
let name = "Mykola";
// якщо ми створюємо константу ми одразу повинні задати їй значення
// різниця між let та const полягає в тому скільки браузер виділяє памяті для зберігання данних

// 1) коли в нас виконуєтся скрипт? 
// 2) в якому порядку виконуєтся команди в скрипту?
const buttonBorderRadius = 10; // camel case

// ТИПИ ДАННИХ 
// ----- примітивні типи данних-------- 
// 1) числа const pi = 3.14;
// 2) строки let name = "My name is... 150кг?/"
// 3) undefined - це невизначеність 
// 4) null - це невизначеність/ пустота
// 5) NaN - не число (not a number) (10/null)
// 6) boolean (логічний тип) - true/false (або правда або брехня) const isStudent = true;
// -----складні типи данних--------------
//  7)масиви (вони зберігають данні під індексами)
     const group171Names = ['Mykola', "Ivan", "Sofia"];
     const user = ["Mykola", 18, false, null, ["JS", "Pyton"]]
    //  індекси елементів будуть наступними: 
    //  'Mykola' - 0 
    //  "Ivan" - 1 
    //  "Sofia" - 2
//  8)об'єкти (дані зберігаются в вигляді пари "ключ:значення")

const newUser = {
  name: "Mykola",
  age: 18,
  isStudent: false,
  school: null,
  languages: ["JS", "Pyton"],
  family: {
    brother: {
        name: "Ivan"
    },
    father: {
        name: "Igor"
    },
  }
}

group171Names.forEach((el) => {
 console.log(el)
})

console.log(Object.keys(newUser))
console.log(Object.values(newUser))