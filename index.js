// 1 задание
let popArtists = ['usmonova', 'morgenshtern', 'baskov', 'eldzhey', '50cent', 'eminem', 'oxy']

let artistName = popArtists[0]
popArtists.forEach(shortestName => {
    if(shortestName.length < artistName.length ) {
        artistName = shortestName 
    }
})
console.log(artistName)



// 2 задание
let cars = [
    {
        name: "malibu",
        price: 31000
    },
    {
        name: "nexia",
        price: 12000
    },
    {
        name: "onix",
        price: 21000
    },
    {
        name: "tahoe",
        price: 100000
    },
    {
        name: "cobalt",
        price: 13000
    },
    {
        name: "tracker",
        price: 26000
    },
    {
        name: "kia k5",
        price: 43000
    },
    {
        name: "santafe",
        price: 50000
    },
    {
        name: "elantra",
        price: 35000
    },
    {
        name: "tico",
        price: 2500
    }
]

let mostexpensive = 0

cars.forEach(car => {
    if(car.price > mostexpensive){
        mostexpensive = car.price
    }
})

let chosedCar  = cars.map(c => c.price)
let chosedCarName = cars[chosedCar.indexOf(mostexpensive)].name

console.log(chosedCarName,mostexpensive)



// 3 задание
let avarage = (cars.reduce((a,b) => a + b.price, 0))/cars.length
console.log(avarage);



