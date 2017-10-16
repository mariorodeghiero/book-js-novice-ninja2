const colors = ['Red', 'Green', 'Blue'];

for(let i = 0, max = colors.length; i < max; i++) {
    
    console.log(`Color at position ${i} is ${colors[i]}`);
}

// for each 1
const colors = ['Red', 'Green', 'Blue'];
colors.forEach( (color, index) =>
    console.log(`Color at position ${index} is ${color}`));

// for each 2 snippet vscode
const colors = ['Red', 'Green', 'Blue'];

colors.forEach(function(color, index) {
    console.log(`Color at position ${index} is ${color}`);
    
    console.log(color)
}, this);

// array using map()
[1,2,3].map(x => 2 * x);


//filter
const numbers = [ 2, 7, 8,2, 5, 9, 10];

numbers.filter(x => x % 2 === 0); // return true values
