// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},

	{
		name: "apple",
		vegetarian:true,
		glutenFree: true,
		organic: true,
		price:1.50
	},
	{
		name:"potato chips",
		vegetarian:true,
		glutenFree:true,
		organic:true,
		price:3.00
	},
	{
		name:"chicken",
		vegetarian:false,
		glutenFree:true,
		organic:false,
		price:12.00
	},
	{
		name:"pasta",
		vegetarian:true,
		glutenFree:false,
		organic:true,
		price:5.00
	},
	{
		name:"eggs",
		vegetarian:true,
		glutenFree:true,
		organic:false,
		price:4.00
	},
	{
		name:"steak",
		vegetarian:false,
		glutenFree:true,
		organic:true,
		price:14.00
	},
	{
		name:"peppers",
		vegetarian:true,
		glutenFree:true,
		organic:true,
		price:3.50
	}





];

function getProducts(){
	return products
}
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	var no_selected = restriction.length;
	for (let i=0; i<prods.length; i+=1) {
		switch(no_selected){
			case 1:
				if ((restriction.includes("Vegetarian") ) && (prods[i].vegetarian == true)){
					product_names.push(prods[i].name);
				}
				else if ((restriction.includes("GlutenFree")) && (prods[i].glutenFree == true)){
					product_names.push(prods[i].name);
				}
				else if (restriction.includes("Organic") && (prods[i].organic == true))  {
					product_names.push(prods[i].name);
				}
				else if (restriction == "None"){
					product_names.push(prods[i].name);
				}
			case 2:
				if(restriction.includes("Vegetarian") && restriction.includes("Organic") && prods[i].vegetarian == true && prods[i].organic == true){
					product_names.push(prods[i].name);
					
				}
				else if(restriction.includes("Vegetarian") && restriction.includes("GlutenFree") && prods[i].vegetarian == true && prods[i].glutenFree == true){
					product_names.push(prods[i].name);
				}
				else if(restriction.includes("Organic") && restriction.includes("GlutenFree") && prods[i].organic == true && prods[i].glutenFree == true){
					product_names.push(prods[i].name);
				}
			case 3:
				if(restriction.includes("Vegetarian") && restriction.includes("Organic") && restriction.includes("GlutenFree") && prods[i].vegetarian == true && prods[i].organic == true && prods[i].glutenFree == true){
					product_names.push(prods[i].name);
					console.log(prods[i].name);
				}
		

		}
		
	}
	print
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}