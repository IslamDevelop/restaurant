

export class Coffebar {
 constructor() {
     this.bar = []
    }
    
    addCoffee(coffee) {
        this.bar.push(coffee)
        this.displayCoffee()
}
removeCoffee(index) {
    this.bar.splice(index, 1)
}
displayCoffee() {
// const coffeeItems = document.querySelector('coffeeItems')
// const coffeeItem = document.createElement("div");
// coffeeItem.textContent = ''
// this.bar.forEach((item) => {
//     if (item._name === item._name) {
//       const nameCoffee = document.createElement('h1')
//       const priceCoffe = document.createElement('h2')
//       nameCoffee.classList.add('nameCoffee')
//       priceCoffe.classList.add('priceCoffee')
//       nameCoffee.textContent = `${item._name}`
//       priceCoffe.textContent = `Цена: ${item._price}`
//       let className = item._name
//       coffeeItem.classList.add(`${className}`)
//       coffeeItem.append(nameCoffee,priceCoffe)
//       coffeeItem.addEventListener('click',()=> {
//           basket.addBasket(item)
//           buyButton.textContent = "Заказать"
//           coffeeItems.appendChild(coffeeItem);
//           console.log(basket.basketItem)
          
//         })
//     }
//   });


}

}