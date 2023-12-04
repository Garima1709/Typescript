/*
Interfaces are created to avoid duplication of type annotation

*/


interface Vehicle {
    name: string;
    year: number;
    summary() : string;
}


//Object using the interface can have additional properties apart from mentioned in interface
const vehicle = {
    name : 'civic',
    year: 2000,
    broken: true,
    summary () : string {
        return `Name of Vehicle : ${this.name} and year of manufacture : ${this.year}`
    }

};

const girl = {
    name: 'Garima',
    year: 1994,
    summary() : string {
        return `Hey! my name is ${this.name} and I was born in ${this.year}`
    }

}

const printSummary = (item: Vehicle): void => {
console.log(`Summary : ${item.summary()}`)
}

printSummary(vehicle)
printSummary(girl)