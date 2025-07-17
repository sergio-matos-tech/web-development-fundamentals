
const cat = {
    name: 'Francisco',
    color: 'Yellow',
    breed: 'Scottish Fold',

    meow: function() {
        console.log(`${this.breed} ${this.color}`);
    }
}

console.log(cat.meow());