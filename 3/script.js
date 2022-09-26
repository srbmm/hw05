const Persons = [
    {name: 'Ali Rezaee', age: 19},
    {name: 'Nima Hamedani', age: 14},
    {name: 'Abdollah poordad', age: 24},
    {name: 'Omid Hemati', age: 33},
    {name: 'Hamed Sohrabi', age: 12},
    {name: 'Shakiba Pedram', age: 11},
    {name: 'Mohammad Parvizi', age: 16},
    {name: 'AliReza Ashouri', age: 17},
    {name: 'Mohammad Mousavi', age: 22},
    {name: 'Sadra Kamyab', age: 27},
];
function findMaxAge(array){
    let max = array[0];
    for(let i of array){
        max = i.age > max.age ? i : max
    }
    return max
}
function sortingArrayByAge(array){
    let temp = [];
    let max = array[0];
    while (array[0]){
        max = findMaxAge(array);
        array.splice(array.indexOf(max),1);
        temp.push(max);
    }
    return temp
}

console.log(Persons);
console.log(sortingArrayByAge(Persons));