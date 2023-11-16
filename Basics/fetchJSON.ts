    /* Compile file -> tsc <filename.ts> , js file will be created , run it by node <filename.js>
or
we can directly use module ts-node to combine compile and run ts-node <filename.ts>

 */

import axios from 'axios'

const url = 'http://jsonplaceholder.typicode.com/todos/1';

//Interface in typescript are used yo define structure of an object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {

    const Todo = response.data as Todo
    const ID = Todo.id;
    const Title = Todo.title;
    const completed = Todo.completed

    console.log(`The ID is ${ID} for Title ${Title} and complete status is ${completed}`)
    // Print by another method (function)
    printTodo(ID, Title, completed )

});

// Another method: types of parameter is passed so that we do not mistakenly change the order of parameters, which will give wrong result

const printTodo = (id: number, title: string, completed: boolean) => {
    console.log(`The print for another ID is ${id} for Title ${title} and complete status is ${completed}`)
}