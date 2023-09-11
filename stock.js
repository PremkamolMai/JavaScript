const { template } = require('@babel/core')
//your student id, firstname, and lastname here
//64130500108 Premkamol Sriyothee
class Stock {
  constructor(stockItems=[]) {
    this.stockItems = stockItems
  }
  findItemIndex(id) {
  for(let i=0; i < this.stockItems.length; i++){ 
    if(this.stockItems[i].itemId === id){
      return i
    }
    // return this.stockItems.findIndex(item => item.itemId === id);
  }
  return -1
}

  
  addItem(id, amount) {
    if (id == null || amount == null) {
      return -1;
    }
    const index = this.findItemIndex(id);
    if (index !== -1) {
      this.stockItems[index].quantity += amount;
      return this.stockItems[index].quantity;
    }
    this.stockItems.push({ itemId: id, quantity: amount });
    return amount;
  
  }
  addItems(items) {
    let count = 0;
    for (const item of items) {
      const result = this.addItem(item.itemId, item.quantity);
      if (result !== -1) {
        count++;
      }
    }
    return count;
    

  }
  sell(id, amount) {
    const index = this.findItemIndex(id);
    if (index === -1) {
      return -1;
    }
    const item = this.stockItems[index];
    const sellAmount = Math.min(item.quantity, amount);
    item.quantity -= sellAmount;
    return sellAmount;
  
  }
  getAllStockAmount() {
    let total = 0;
    for (const item of this.stockItems) {
      total += item.quantity;
    }
    return total;
  }

}
module.exports = Stock
