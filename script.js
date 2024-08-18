import "./style.css";
import { Coffee } from "./coffee";
import { Coffebar } from "./coffeebar";
import { addBasketButton, Basket } from "./basket";

const basket = new Basket()
const coffebar = new Coffebar();

let espresso = new Coffee("Espresso", "6$");
let cappucino = new Coffee("Cappucino", "8$");
let tonic = new Coffee("Tonic", "12$");
tonic.composition = `${espresso._name} х2 + Адреналин`;

coffebar.addCoffee(espresso);
coffebar.addCoffee(cappucino);
coffebar.addCoffee(tonic);
console.log(coffebar.bar)

const contentHome = document.createElement('div')
const headText = document.createElement('h1')
const headText2 = document.createElement('h1')
const headTextF = document.createElement('div')
const menu = document.createElement('ul');
const contacts = document.createElement('div')

contacts.classList.add('contacts')

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

const coffeeItems = document.createElement('div')
coffeeItems.classList.add('coffeeItems')
coffeeItems.style.display = "none"
contentHome.append(coffeeItems)
const home = document.querySelector("#content");
home.append(contentHome);





menu.addEventListener('click', () => {
  headTextF.classList.remove('headtext')
  headTextF.classList.add('headTextL')
    menu.style.display = "none"
    contacts.style.display = 'none'
    coffeeItems.style.display = "flex"
    
    const addBasketButton = document.createElement('div')
    addBasketButton.classList.add('basketContainer')
const addBasketText = document.createElement('h1')
const basketList = document.createElement('h2')
const buyButton = document.createElement('span')
buyButton.textContent = 'Добавьте товары'
buyButton.classList.add('buyButton')
basketList.textContent = ""
addBasketText.classList.add('basket')
basketList.classList.add('basketList')
addBasketText.textContent = 'Корзина:'

addBasketButton.append(addBasketText)
addBasketButton.append(basketList)
addBasketButton.append(buyButton)


headTextF.addEventListener('click', () =>{
  coffeeItems.style.display = "none"
  addBasketButton.style.display = "none"
  menu.style.display = 'block'
  contacts.style.display = 'block'
  headTextF.classList.remove('headTextL')
  headTextF.classList.add('headtext')

})

coffebar.bar.forEach((item) => {
  if (item._name === item._name) {
    const coffeeItem = document.createElement("div");
    const nameCoffee = document.createElement('h1')
    const priceCoffe = document.createElement('h2')
    nameCoffee.classList.add('nameCoffee')
    priceCoffe.classList.add('priceCoffee')
    nameCoffee.textContent = `${item._name}`
    priceCoffe.textContent = `Цена: ${item._price}`
    let className = item._name
    coffeeItem.classList.add(`${className}`)
    coffeeItem.append(nameCoffee,priceCoffe)
    coffeeItems.appendChild(coffeeItem);
    coffeeItem.addEventListener('click',()=> {
      basket.addBasket(item)
      buyButton.textContent = "Заказать"
      console.log(basket.basketItem)
      
    })
  }
});
buyButton.addEventListener('click', () => {
  alert('Когда-нибудь доставим братишка, пока иди в Рамозотти')
})
contentHome.appendChild(addBasketButton)
})



console.log(basket.basketItem)



