/*
Tuple: Array like structure where each element represents some property of a record


*/

const drink = {
    color: 'Brown',
    carbonated : true,
    sugar : 40
}

/*
If we do not specify the types in tuples, values might be interchaged by coder, which we do not need as index has importance
in tuples, thus types must be defined
 */

const pepsi: (string|boolean|number)[] = ['Brown',40,  true] // Should give error as values are interchanged


// We can assign different types as below
const coke : [string, boolean, number] = ['Brown',true,  40]

// We can also create type alias which we can use to describe type
type Drink = [string, boolean, number]
 const thumsup : Drink = ['Brown',true,  40]



