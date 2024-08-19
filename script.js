import "./style.css";
import { Coffee } from "./coffee";
import { Coffebar } from "./coffeebar";
import { Basket } from "./basket";
import { AboutFunction, contactsFunction, menuClick } from "./functions";



export const basket = new Basket()
export const coffebar = new Coffebar();

let espresso = new Coffee("Espresso", "6$");
let cappucino = new Coffee("Cappucino", "8$");
let tonic = new Coffee("Tonic", "12$");
tonic.composition = `${espresso._name} х2 + Адреналин`;

coffebar.addCoffee(espresso);
coffebar.addCoffee(cappucino);
coffebar.addCoffee(tonic);
console.log(coffebar.bar)

export const contentHome = document.createElement('div')
const headText = document.createElement('h1')
const headText2 = document.createElement('h1')
export const headTextF = document.createElement('div')
export const menu = document.createElement('ul');
export const contacts = document.createElement('div')
export const About = document.createElement('div')
contacts.classList.add('contacts')
About.classList.add('about')

headText.textContent = "this."
headText2.textContent = "Coffee"
headText2.classList.add('Coffee')
headText.classList.add('this')
headTextF.classList.add('headText')
headTextF.append(headText)
headTextF.append(headText2)
menu.classList.add('menu')
contentHome.classList.add('content')

contentHome.append(headTextF)
contentHome.appendChild(menu)
contentHome.appendChild(contacts)
contentHome.appendChild(About)

// const coffeeItems = document.createElement('div')
// coffeeItems.classList.add('coffeeItems')
// coffeeItems.style.display = "flex"  ///
// contentHome.append(coffeeItems)
const home = document.querySelector("#content");
home.append(contentHome);


contacts.addEventListener('click', contactsFunction)


menu.addEventListener('click', menuClick)

About.addEventListener('click', AboutFunction)

console.log(basket.basketItem)



