/* Type annotation vs Type inference
Annotation : When type is defined by programmer
Inference : When type is assumed/ assigned by program based on the values assigned
 */

const add = (a: number, b: number) : number => {
    return a+b;
}

// Anonymous function
function substract (a:number, b: number ) : number {
    return a-b
}

// Anonymous function assigned to a variable
const multi = function (a: number, b:number): number {
return a*b;
}

// function that does not return anything (return type void)
const logger = (messsage : string) : void=> {
    console.log(messsage)
}

// when never going to reach end of function and not return anything
const throwError =(message: string) : never =>{
throw new Error(message) ;
}
