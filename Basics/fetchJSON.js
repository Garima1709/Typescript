"use strict";
/* Compile file -> tsc <filename.ts> , js file will be created , run it by node <filename.js>
or
we can directly use module ts-node to combine compile and run

 */
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
