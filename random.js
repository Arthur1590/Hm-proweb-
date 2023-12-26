// // let ask = prompt(`Введиет колво прмиеров: `)
// // function random(min, max){
// //   return Math.floor(math.random() * (min - max) + min)
// // }

// // ///
// // for (let i = 0; i < ask; i++) {
// // let num1 = random(1, 10)
// // let num2 = random(1, 10)
// // let symb = random(1, 10)
// // let exmp = 0

// // if(symb == 1){
// //   exmp = num1 + num2
// //   symb = '+'
// // } else if(symb == 2){
// //   exmp = num1 - num2
// //   symb = '-'
// // } else if(symb == 3){
// //   exmp = num1 * num2
// //   symb = '*'
// // } else {
// //   exmp = num1 / num2
// //   symb = '/'
// // }
// // let answer = +prompt(num1 + symb + num2 )
// // console.log(exmp == answer ? `Ваш ответ ` + answer : `Ваш ответ не верный: ` + answer + `!` + `Правильный овтет - ` + exmp + `!`);
// // }

// // /// Объекты ///
// // obj(имя переменной) - является ссылкой на ОП компьютера. Такокй тип данных называется ссылочный тип данных
// // const objUser = {
// //   user: "Artur",
// //   age: 22,
// //   from: "Uzb",
// //   status: "alive",
// //   date: '05.09.2001'
// // }
// // console.log(objUser);
// // objUser.job = 'programemr'

// /// for in 'Object' ///

//  // Обрабатывает весь массив в const objUser - и выводит в консоль все ключи(name, age... и т.д)

// // //так же можно вызывать отдельно ключи ---

// // console.log(objUser.user); //в консоль показывает только ключ(user)

// const objUser = {
//   user: "Artur",
//   age: 22,
//   from: "Uzb",
//   status: "alive",
//   date: '05.09.2001',
// } // this -- всегда ссылается на родителя элемента в данном случае objUser

// objUser.job = 'programemr'

// const objUser = {
//   '1': {
//     name: 'Artur',
//     age: 22
//   },
//   '2': {
//     name: 'Lena',
//     age: 21
//   }
// };

// let i = 3;
// objUser[i] = {}
// console.log(objUser);


function randomName() {
  const randomName = ["Dinara", "Egor", "Salima", "Kamila", "Ruslan"];
  const choosenName = Math.floor(Math.random() * randomName.length);
  return randomName[choosenName];
}
function randomCoutry(){
  const country = ['Uzbekistan, Toshkent', 'Russiya, Moscow', 'Germany, Bendesharf', 'USA, CA-st:75/8', 'Korea, Inch-hon', 'Japan, Okinava', ];
  const generatedCountry = Math.floor(Math.random() * country.length);
  return country[generatedCountry]
}
function randomAge() {
  const radnomAge = (Math.floor(Math.random() * 27) + 17);
  return radnomAge;
}
  
  for (let i = 1; i <= 5; i++) {
    const userName = prompt(
      `Пользователь №${i}.Введите ваше имя:`,
      `${randomName()}`
    );
    const userAge = +prompt(
      `Пользователь №${i}.Введите ваш возраст`,
      `${randomAge()}`
    );
    console.log(`Пользователь № ${i}`);
    console.log(`Имя пользователя - ${userName}\nВозраст пользователя - ${userAge}`);
    let users = {
      User: {
        name: `${userName}`,
        age: userAge,
        country: randomCoutry(),
        status: 'alive',
      }
    };
    console.log(users.User);
  }

////////////////////////////////

const rec = receipt();
for (const key in rec) {
  const itemName = key;
  let itemInfo = rec[key].info
  let itemPrice = rec[key].price
  let tax = (Math.floor(Math.random() * 20000) + 10000);
  let withTax = tax + itemPrice;
  console.log(`Ваш заказ - ${itemName} ${itemInfo}.\nЦена: ${itemPrice} сум.\nДоставка ${tax}.\nОбщая стоимость с доставкой: ${withTax}`);
}
