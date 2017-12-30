var products = [{
	name : "test",
	price : 12.9,
	inventory : 20
}, {
	name : "test2",
	price : 30,
	inventory : 80
}];

class ProductLineItem {
	constructor(product) {
		this.name = product.name;
		this.quantity = 1;
		this.price = product.price * this.quantity;
	}
	
	getName(){
		return this.name;
	}
	getQuantity(){
		return this.quantity;
	}
	getPrice(){
		return this.price;
	}
    setQuantity(quantity){
        this.price /= this.quantity;
        this.quantity = quantity;
        this.price *= this.quantity;
    }
}

var basket = (function(){
	var buy = [];
    
	return {
		addProduct : function(productID){
            var exists = false;
            
            buy.forEach(function(item, i, buy){
                exists = (item.getName() == products[productID].name) ? true : false;            
            });
            if(exists) alert("TOVAR EST YJE");
            else buy[buy.length] = new ProductLineItem(products[productID]);
		},
		removeProduct : function(productID){
			buy.forEach(function(item, i, buy){
                if(item.getName() == products[productID].name) buy.splice(i, 1);
            })
		},
		updateProductQuantity : function(productID, quantity) {
			buy.forEach(function(item, i, buy){
                if(item.getName() == products[productID].name) {
                    item.setQuantity(quantity);
            }})
		},
		getTotalPrice : function(){
			var tp = 0;
            
            buy.forEach(function(item, i, buy){
                tp+=item.getPrice();
            })
            return tp;
		}
	}
})();
