export class Basket {
    _finishPrice = 0
    constructor() {
        this.basketItem = []
    }
    addBasket(coffeeBasket) {
        this.basketItem.push(coffeeBasket)
        this.displayBasket()
        
        
    }
    displayBasket(){
        let result = 0
        let itemName = ''
        let itemPrice = 0
        
        this.basketItem.forEach((item,) => {
            this._finishPrice = parseInt(item._price.replace(/[a-zA-Z/$]/g,''))
            result =  this._finishPrice + result
          
            itemName = item._name 
            itemPrice = item._price
            console.log(itemName)
        })
        console.log(result)
        
        const itemBasket = document.createElement('h3')
        const basketMenu = document.querySelector('.basket')
        
        basketMenu.textContent = `Итого: ${result} $`
        const basketList = document.querySelector('.basketList')
        
        itemBasket.textContent = `${itemName} ${itemPrice}`
        basketList.append(itemBasket)
        }
    }

export const addBasketButton = document.createElement('button')