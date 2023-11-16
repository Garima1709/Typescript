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