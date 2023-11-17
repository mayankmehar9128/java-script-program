const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)   


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)  //acc take 0 value and curr takes the each value from array

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "commerce course",
        price: 9000
    },
    {
        itemName: "data science",
        price: 12000
    },
    {
        itemName: "data analyst course",
        price: 6000
    },
]


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);