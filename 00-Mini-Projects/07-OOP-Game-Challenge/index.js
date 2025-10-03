// creating a constructor to create Player object-

function Player(name = 1, level = 1, health = 100, points = 0) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.points = points;

    // method to display player information
    this.displayInfo = function() {
        console.log(`Player: ${this.name}, Level: ${this.level}, Health: ${this.health}, Points: ${this.points}`);
    };

    // method to level up the player
    this.levelUp = function() {
        this.level += 1;
        console.log(`${this.name} has leveled up to Level ${this.level}!`);
    };

    // method to increase player's points
    this.increasePoints = function(pts) {
        this.points += pts;
        console.log(`${this.name} has gained ${pts} points! Total points: ${this.points}`);
    };

    // method to decrease player's health
    this.decreaseHealth = function(dmg) {
        this.health -= dmg;
        if (this.health < 0) this.health = 0;
        console.log(`${this.name} has taken ${dmg} damage! Remaining health: ${this.health}`);
    };
}

// creating player instances
const player1 = new Player('Alice', 5, 80, 150);
const player2 = new Player('Bob', 3, 90, 100);

// displaying initial information
player1.displayInfo();
player2.displayInfo();

// simulating some actions
player1.levelUp();
player1.increasePoints(50);
player1.decreaseHealth(20);

player2.levelUp();
player2.increasePoints(30);
player2.decreaseHealth(10);

// displaying updated information
player1.displayInfo();
player2.displayInfo();