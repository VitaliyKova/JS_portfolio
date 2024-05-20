const originEl = document.querySelector(".task__item");
const section = document.querySelector(".task__items");
const body = document.querySelector("body");
const fieldInpStyle = "field-input";
const buttonStyle = "button";
const textAnswerStyle = "answer-text";
const boxCenterStyle = "box-center";
const buttonModStyle = "button__modal";
const modalAnswerStyle = "modal-answer";
const overlayStyle = "overlay";

function cloneItemAll(header, heading, text) {
  const item = originEl.cloneNode(true);
  item.style.display = "block";
  item.querySelector(".task__header").textContent = header;
  item.querySelector(".task__heading").textContent = heading;
  item.querySelector(".task__text").textContent = text;
  section.appendChild(item);
  return item.querySelector(".task__details");
}

function cloneItem(heading, text) {
  const item = originEl.cloneNode(true);
  item.style.display = "block";
  const removeEl = item.querySelector(".task__header");
  removeEl.remove();
  item.querySelector(".task__heading").textContent = heading;
  item.querySelector(".task__text").textContent = text;
  section.appendChild(item);
  return item.querySelector(".task__details");
}

function modal(text) {
  const overlay = document.createElement("div");
  overlay.className = overlayStyle;
  body.appendChild(overlay);

  const modalAnswer = document.createElement("div");
  modalAnswer.className = modalAnswerStyle;

  const info = document.createElement("p");
  info.textContent = text;
  info.className = "modal-answer__text";

  const button = document.createElement("button");
  button.classList.add(buttonModStyle, buttonStyle, "heartbeat");

  button.textContent = "ОК";
  button.addEventListener("click", () => {
    body.removeChild(modalAnswer);
    body.removeChild(overlay);
  });

  modalAnswer.append(info);
  modalAnswer.append(button);

  body.append(modalAnswer);
}

//HOMEWORK 2

//task 1
/*Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Вывести в консоль температуру в Цельсиях и Фаренгейтах. */

function tempConvert() {
  const header = "Задания к 2 уроку";

  const heading = "Задание 1";

  const text =
    "Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту. Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32. Вывести в консоль температуру в Цельсиях и Фаренгейтах.";

  const cloneEl = cloneItemAll(header, heading, text);

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("placeholder", "Введите температуру в градусах цельсия");
  input.className = fieldInpStyle;

  const button = document.createElement("button");
  button.className = buttonStyle;
  button.textContent = "Перевести в градусы Фаренгейта";

  const resultFar = document.createElement("p");
  resultFar.className = textAnswerStyle;

  const box = document.createElement("div");
  box.className = boxCenterStyle;

  cloneEl.append(box);

  box.append(input);
  box.append(button);

  input.addEventListener("focus", () => {
    input.classList.remove("error");
  });

  button.addEventListener("click", () => {
    const tempCel = input.value;
    if (tempCel === "") {
      modal("Введите температуру в градусах цельсия");
      input.classList.add("error");
      return;
    }
    console.log(`input data Celsius ${tempCel}`);

    const tempFar = (9 / 5) * tempCel + 32;
    console.log(`output data Fahrenheit ${tempFar}`);
    resultFar.textContent = `Температура в градусах Фаренгейта = ${tempFar}F`;
    cloneEl.append(resultFar);
    input.value = "";
    input.focus();
  });
}

tempConvert();

//task2

function nameAdmin() {
  const heading = "Задание 2";

  const text =
    "Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.";

  const clonEL = cloneItem(heading, text);

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Введите ваше имя");
  input.className = fieldInpStyle;

  const button = document.createElement("button");
  button.className = buttonStyle;
  button.textContent = "ОК";
  button.style.width = "70px";

  const box = document.createElement("div");
  box.className = boxCenterStyle;

  clonEL.append(box);

  box.append(input);
  box.append(button);

  input.addEventListener("focus", () => {
    input.classList.remove("error");
  });

  button.addEventListener("click", () => {
    if (input.value !== "") {
      const name = input.value;
      console.log(`${name} ваше имя успешно сохранено!`);
      const text = document.createElement("p");
      text.className = textAnswerStyle;
      text.textContent = `${name}, Ваше имя успешно сохранено!`;
      clonEL.append(text);
      input.value = "";
      return name;
    } else {
      modal("Введите ваше имя!");
      input.classList.add("error");
    }
  });
}

nameAdmin();

//HOMEWORK 4

/**task 1
 * Создать переменные num1, num2 которые пользователь вводит с клавиатуры. Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
 */

function checkVar() {
  const header = "Задания к 4 уроку";

  const heading = "Задание 1";

  const text =
    "Создать переменные num1, num2 которые пользователь вводит с клавиатуры. Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.";

  const clonEL = cloneItemAll(header, heading, text);

  //Решение

  const box = document.createElement("div");
  box.className = boxCenterStyle;

  const inputFirst = document.createElement("input");
  inputFirst.setAttribute("type", "text");
  inputFirst.setAttribute("placeholder", "Введите первое число");
  inputFirst.className = fieldInpStyle;

  const inputSec = document.createElement("input");
  inputSec.setAttribute("type", "text");
  inputSec.setAttribute("placeholder", "Введите второе число");
  inputSec.className = fieldInpStyle;

  const button = document.createElement("button");
  button.className = buttonStyle;
  button.textContent = "Проверить";
  button.style.width = "150px";

  clonEL.append(box);
  box.append(inputFirst);
  box.append(inputSec);
  box.append(button);

  button.addEventListener("click", () => {
    const valueFirst = inputFirst.value;
    const valueSec = inputSec.value;

    if (isNaN(+valueFirst) || isNaN(+valueSec)) {
      modal("Вы ввели не число!");
      inputFirst.value = "";
      inputSec.value = "";
      return;
    } else if (valueFirst === "" || valueSec === "") {
      modal("Не все поля заполнены!");
      return;
    }

    valueFirst <= 1 && valueSec >= 3
      ? modal("Условия выполнены!")
      : modal("Условия не выполнены!");
  });
}

checkVar();

/**task 2
 * Перепишите код к тернарному оператору
 */

function changingOper() {
  const heading = "Задание 2";

  const text = "Перепишите код к тернарному оператору";

  const clonEL = cloneItem(heading, text);

  //Решение

  const box = document.createElement("div");
  box.className = boxCenterStyle;

  const pre = document.createElement("pre");
  const preNew = document.createElement("pre");
  const code = document.createElement("code");
  const codeNew = document.createElement("code");
  codeNew.className = "language-javascript";
  code.className = "language-javascript";

  const textCode = 
`let test = true;
if (test === true) {
    console.log('+++');
} else {
    console.log('---');
}
`;

  const textNewCode = 
`let test = true;
test ? console.log('+++') : console.log('---');`;

  code.textContent = textCode;
  codeNew.textContent = textNewCode;
//   Prism.highlightElement(code);
//   Prism.highlightElement(codeNew);

  clonEL.append(box);
  box.append(pre);
  box.append(preNew);
  pre.append(code);
  preNew.append(codeNew);
}

changingOper();
