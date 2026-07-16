/* ============================================================
   CREATING OBJECTS
   Key:value pairs, two ways to access (dot vs bracket),
   and the fullAddress exercise using template literals.
   ============================================================ */

const fitBitData = {
    totalSteps : 302202,//property
    totalMiles : 233,//property
    avgCalorieBurn : 5755,//property
    workoutsThisWeek : '5 of 7',//property
    avgGoodSleep : '2:13'//property
}// whole thing is the object

const car1 = {
    color: ['red', 'blue', 'black'],
    modelYear: 2005,
    brandName: 'Audi'
}

////////////////
//console.log(car1["modelYear"])   //fist way to call a property from an object
//console.log(car1.brandName)  //second way 

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

console.log(fullAddress)