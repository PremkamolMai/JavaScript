class Product {
    constructor(name, description, price, quantity){
        this.name = name
        this.description = description
        this.price = price
        this.quantity = quantity
    }
    getTotalPrice(){
        if( this.quantity <= 0 || this.price <= 0 ){
            return undefined
        }else{
            return this.quantity * this.price
    }

}
    sell(quantity){
        // let sell = quantity
        if(this.quantity < quantity ){
            return undefined
        }else{
            return (`name: ${this.name}`,`quantity: ${this.quantity}`)
        }
    }
}
const pd = new Product()
console.log(pd.getTotalPrice(-1.00,1.34));
console.log(pd.getTotalPrice(11,3));
console.log(pd.sell('mama',3));
console.log(pd.sell('mama',2));
