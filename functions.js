/*
For this first set of functions, assume the input array looks like this:

const petsArray = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];


/*
OUTPUT: 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/

export function getDogs(arr) {
    const dogs = arr.filter((dog) => dog.type === 'dog');
    return dogs;
}

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const names = arr.map((pet) => pet.name);
    return names;
}

/*
OUTPUT: 
['spot', 'rover']
*/

export function getNamesOfDogs(arr) {
    const dogNames = arr.filter((dog) => dog.type === 'dog').map((dog) => dog.name);
    return dogNames;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const types = arr.map((pet) => pet.type);
    const reverse = types.reduce((acc, cur) => {
        const reverse = [cur, ...acc]; 
        return reverse;
    }, []);
    return reverse;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const span = arr.map((pet) => { return { nombre: pet.name, tipo: pet.type };});
    return span;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const hungry = arr.map((pet) => { return { ...pet, isHungry: true };});
    return hungry;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const shout = arr.map((pet) => { return { name: pet.name.toUpperCase(), type: pet.type };});
    return shout;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const strings = arr.map((pet) => pet.name + pet.type);
    return strings;
}

/*
findByName('jumpy', petsArray)

(hint: how do you get the first item out of an array?)

OUTPUT: 
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    const match = arr.filter((pet) => pet.name === name)[0];
    return match;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    const arrays = arr.reduce((acc, curr) => {
        const thing = [...acc, Object.entries(curr)];
        return thing;
    }, []);
    return arrays;
}

////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    const cars = arr.filter((auto) => auto.type === 'car');
    return cars;
}

/*
Output:
 [
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
  ] ;

*/

export function getChevyCars(arr) {
    const chevys = arr.filter((auto) => auto.make === 'chevy');
    const cars = chevys.filter((chevy) => chevy.type === 'car');
    return cars;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    const string = arr.reduce((acc, curr) => acc + curr.model, '');
    return string;
}

/*
(add all ages)

Output: 14 
 */

export function getSumOfAges(arr) {
    const ages = arr.reduce((acc, curr) => acc + curr.age, 0);
    return ages;
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    const obj = arr.reduce((acc, curr) => {
        const keys = Object.keys(acc);
        const length = keys.length;
        let totem = 1;
        for(let i = 0; i < length; i++) {
            if(curr.type === keys[i]) {
                acc[keys[i]] += 1;
                totem += 1;
            }
        }
        if(totem === 1) {
            acc[curr.type] = 1;
        }
        totem = 1;
        return acc;
    }, {});
    return obj;
}


/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    const stuff = Object.entries(arr);
    const string = 'l';
    return string;
}
