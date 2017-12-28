const superman = {
    name: 'superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villlain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() {
        return 'Up, up and away!';
    }
}


console.log(superman.name);
console.log(superman.height);
console.log(superman.fly());
console.log(superman.hasOwnProperty('city'))


for(const key in superman) {
    
    console.log(key + ": " + superman[key]);
}