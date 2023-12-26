let num = +prompt("Введиет время 24+");

switch (num) {
  case 1:
    alert("час ночи");
    break;
  case 2:
    alert("2 часа ночи");
    break;
  case 3:
    alert("3 часа ночи");
    break;
  case 4:
    alert("4 часа утра");
    break;
  case 5:
    alert("5 часов утра");
    break;
  case 6:
    alert("6 часов утра");
    break;
  case 7:
    alert("7 часов утра");
    break;
  case 8:
    alert("8 часов утра");
    break;
  case 9:
    alert("9 часов утра");
    break;
  case 10:
    alert("10 часов утра");
    break;
  case 11:
    alert("11 часов дня");
    break;
  case 12:
    alert("12 часов дня");
    break;
  case 13:
    alert("час дня");
    break;
  case 14:
    alert("2 часа дня");
    break;
  case 15:
    alert("3 часа дня");
    break;
  case 16:
    alert("4 часа дня");
    break;
  case 17:
    alert("5 часов вечера");
    break;
  case 18:
    alert("6 часов вечера");
    break;
  case 19:
    alert("7 часов вечера");
    break;
  case 20:
    alert("8 часов вечера");
    break;
  case 21:
    alert("9 часов вечера");
    break;
  case 22:
    alert("10 часов вечера");
    break;
  case 23:
    alert("11 часов ночи");
    break;
  case 24:
    alert("12 часов ночи");
    break;
  default:
    break;
}

function dspage() {
  let age = document.getElementById("ageInput").value;
  if (age <= 10) {
    alert(`Тебе только ${age} лет`);
  } else if (age >= 50 && age < 61) {
    alert("Пенсия!");
  } else if (age >= 25) {
    alert("Все, старый ты)");
  } else if (age <= 15) {
    alert(`Тебе ${age} лет.`);
  } else if (age <= 17) {
    alert(`Тебе уже ${age} лет.`);
  } else if (age >= 18) {
    alert(`Тебе ${age}. Теперь можно все`);
  } else  {
    alert(`Допущена ошибка. Вы ввели ${age}. Введите свой возраст`);
  }
}





let text = "...WEB---SITE...";
let content = document.querySelector("#span-text");

for (let i in [...text]) {
  let letter = document.createElement("span");
  letter.textContent = [...text][i];
  if (letter.textContent.match(/\s/)) {
    letter.style.margin = "auto 30px";
  }
  letter.style.animationDelay = i / 10 + "s";
  content.appendChild(letter);
}


let x, y, z; 

x = parseFloat(+prompt('Введите первое число'));
y = parseFloat(+prompt('Введите второе число'));
z = parseFloat(+prompt('Введите третье число'));

let resultNum = Math.round((x + y +z) / 3);
alert(resultNum);

