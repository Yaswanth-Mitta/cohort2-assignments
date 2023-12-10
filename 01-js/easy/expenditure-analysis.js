/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  for (let i = 0; i < transactions.length; i++) {
    let cur = 0;
    let cat = transactions[i]["category"]; 
    if (cat == "X") continue;
    for (let j = i; j < transactions.length; j++){
      if (cat == transactions[j]["category"] && cat != "X") {
        cur += transactions[j]["price"];
        transactions[j]["category"] = "X"
      }
    }
    ans.push({ "category": cat, "totalSpent": cur });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
