
let name = prompt("Как тебя зовут?");
let age = prompt("Сколько тебе лет?");
let gender = prompt("Твой пол (мужской / женский)?");


console.log("Имя:", name);
console.log("Возраст:", age);
console.log("Пол:", gender);


let card = document.createElement("div");
card.style.border = "1px solid black";
card.style.padding = "15px";
card.style.width = "200px";
card.style.margin = "20px auto";
card.style.borderRadius = "10px";
card.style.background = "#f3f3f3";


card.innerHTML = `
    <h3>Информация о тебе</h3>
    <p><b>Имя:</b> ${name}</p>
    <p><b>Возраст:</b> ${age}</p>
    <p><b>Пол:</b> ${gender}</p>
`;

document.getElementById("app").appendChild(card);
