/*
If array is typed, we can only insert one type of values

*/

const carsMakers : string[] = ['Audi', 'Polestar', 'BMW']

// 2D Array  - Array that contains array of strings
const eat : string[][]= [
    ['Mango'],
    ['Aalu'],
    ['Almonds']
]

// Array with multiple value types
const multiValues :(Date | string)[]= [new Date(), 'Birthday']

/* Why types arrays:
1. Help with inference when extracting values
2. Prevet incompatible values, when we try to insert another type of value
*/

// It will automatically infer the value as string
const car = carsMakers[0]

//3. Help with functions like map
carsMakers.map((car: string) : string => {
console.log(car.toUpperCase())
return car.toUpperCase();
})