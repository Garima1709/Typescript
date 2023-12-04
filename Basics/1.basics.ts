/*
Install typescript compiler 
npm install -g typescript ts-node


TS Node is a little command line tool that allows us to compile and execute TypeScript with one command at our terminal.

Check the installation :
tsc --help
This command compiles the ts code to plain javascript

npm install axios@0.27.2
*/

/*--------------------------------------------
Types :
Primitive types :
1. Number, Boolean, void, undefined
2. string, symbol, null

Object types :
functions, arrays, classes, objects

*/

/*-----------------------------------------------------------------------------------------
Type annotations :
Code we add to tell Typescript what type of value, a vriable will refer to

When to use annotations:
1. When function returns the 'any' type
    JSON.parse() returns the type any, output type depends on type of input
    Whenever type is any, typescript cannot do its job, i.e. to call methods based on type, for ex: methods to be called on string


2. When we declare a variable on one line and initialize it later
   
3. Variables whose type cannot be inferred correctly

Type inference : Typescript tries to figure out what type of value a variable refers to



*/

