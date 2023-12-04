const profile  = {
    name : 'Garima',
    age : 28,
    coords : {
        lat: 10,
        lon: 20
    },
    // function defined inside object with func annotation
    setAge(age: number): void {
        this.age = age;
    }
}

// Destructuring - We cannot simply mention type of value we need to use, we need to write correct structure
const {age}: {age:number}  = profile
// We cannot simply write as const {age}: number  = profile

const { coords: {lat, lon}} : {coords: {lat:number; lon:number }} = profile;

// Destructuting with Annotations

const todaysWeather = {
    date: new Date(),
    weather: 'Sunny'
}
const logWeather = ({date,weather}: {date: Date, weather: string}) : void => {
console.log(date)
console.log(weather)
}

logWeather(todaysWeather)