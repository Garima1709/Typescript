/* Type annotation vs Type inference
Annotation : When type is defined by programmer
Inference : When type is assumed/ assigned by program based on the values assigned
 */

/* If there is type added to a function , value must be retruned of same type
If there is no type added to a function, code will work, but it will not show error if there is nothing returned from the function
And in that case return type of function becomes void


There is no type inference for arguments, and we need to mention it 


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

// function that does not return anything (return type void), it can return null or undefined
const logger = (messsage : string) : void=> {
    console.log(messsage)
}

// when never going to reach end of function and not return anything
const throwError =(message: string) : never =>{
throw new Error(message) ;
}
