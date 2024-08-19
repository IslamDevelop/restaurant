
import { headTextF } from "./script"
import { menu } from "./script"
import { contacts } from "./script"
import { contentHome } from "./script"
import { coffebar } from "./script"
import { basket } from "./script"
import { About } from "./script"



export function menuClick () {

    {
      headTextF.classList.remove('headtext')
      headTextF.classList.add('headTextL')
        menu.style.display = "none"
        contacts.style.display = 'none'
        About.style.display = 'none'
        
        
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
    
    const coffeeItems = document.createElement('div')
    coffeeItems.classList.add('coffeeItems')
    coffeeItems.style.display = "flex" 
    contentHome.append(coffeeItems)
    
    addBasketButton.append(addBasketText)
    addBasketButton.append(basketList)
    addBasketButton.append(buyButton)
    
    
    headTextF.addEventListener('click', () =>{
      coffeeItems.style.display = "none"
      addBasketButton.style.display = "none"
      menu.style.display = 'block'
      contacts.style.display = 'block'
      About.style.display = 'block'
      headTextF.classList.remove('headTextL')
      headTextF.classList.add('headtext')
    addBasketButton.remove()
    coffeeItems.remove()
    basket.removeBasket()
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
    }
  
  }


  
  export function contactsFunction () {
      headTextF.classList.remove('headtext')
      headTextF.classList.add('headTextL')
      menu.style.display = "none"
      contacts.style.display = 'none'
      About.style.display = 'none'
      headTextF.addEventListener('click', () => {hivelink.remove()
        menu.style.display = 'block'
        contacts.style.display = 'block'
        About.style.display = 'block'
        headTextF.classList.remove('headTextL')
        headTextF.classList.add('headtext')
      })
      
      const hivelink = document.createElement('a')
      hivelink.href = 'https://hivebootcamp.ru'
      hivelink.textContent = ''
      hivelink.classList.add('contactsItem')
      const hiveText = document.createElement('h1')
      hiveText.textContent = 'Заходи'
      hiveText.classList.add('HiveText')
      hivelink.append(hiveText)
      
        contentHome.appendChild(hivelink)
}
export function AboutFunction () {
    headTextF.classList.remove('headtext')
    headTextF.classList.add('headTextL')
    menu.style.display = "none"
    contacts.style.display = 'none'
    About.style.display = 'none'
    const AboutText = document.createElement('h1')
    AboutText.classList.add('AboutText')
    AboutText.textContent = 'Мы хотим лишь одного, чтобы Мадара стал Хокагe'
    contentHome.appendChild(AboutText)

    headTextF.addEventListener('click', () => {
        menu.style.display = 'block'
        contacts.style.display = 'block'
        About.style.display = 'block'
        headTextF.classList.remove('headTextL')
        headTextF.classList.add('headtext')
        AboutText.remove()
        
      })
}