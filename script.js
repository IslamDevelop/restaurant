import "./style.css";
import { Coffee } from "./coffee";
import { Coffebar } from "./coffeebar";

const coffebar = new Coffebar();

let espresso = new Coffee("Espresso", "6$");
let cappucino = new Coffee("Cappucino", "8$");

let tonic = new Coffee("Tonic", "12$");
tonic.composition = `${espresso._name} х2 + Адреналин`;

coffebar.addCoffee(espresso);
coffebar.addCoffee(cappucino);
coffebar.addCoffee(tonic);

console.log(coffebar.bar);

const home = document.querySelector('#content')
const menu = document.createElement('ul');
const drinks = document.createElement('li')
const contacts = document.createElement('li')

menu.textContent = 'Меню'
drinks.textContent = `${espresso._name} \n${cappucino._name} \n${tonic._name}`
contacts.textContent = '88005553535'

home.appendChild(menu)
menu.appendChild(drinks,contacts)
