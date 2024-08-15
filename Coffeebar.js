export class Coffebar {
constructor() {
   this.bar = []
}
addCoffee(coffee) {
    this.bar.push(coffee)
}
removeCoffee(index) {
    this.bar.splice(index, 1)
}
displayCoffee() {
    
}
}