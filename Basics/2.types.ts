'use-strict';

// let nothingMuch : null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

// Array

let colors : string[] = ['Red', 'Blue', 'Green'];
let myNumbers : number[] = [1,2,3];
let truths : boolean[] = [true, false, true]

// Classes - Captital letter refers to class name, small letter refers to instance of a class
class Car { }

let car : Car

// Object Literal
let point : {x: number, y:number} = {
    x: 23,
    y: 2
}

// Functions  : first type is for variables , seconds is for annotating function itself
const logNumber: (i: number)  => void  = (i: number) => {
console.log(i)

}




//JSON
const json = '{"x": 10, "y":12}';
const coords: {x:number, y:number} = JSON.parse(json)
console.log(coords)

