const Animal = function (sound, type) {
  this.sound = sound;
  this.type = type;
};

Animal.prototype.talk = function () {
  console.log(`${this.type} speaks ${this.sound}`);
};

const dog = new Animal("Dog", "Woof");
dog.talk();

const Car = function (type, sound) {
  Animal.call(this, type, sound);
};

Car.prototype = Object.create(Animal.prototype);
Car.prototype.constructor = Car;

const bmw = new Car("bmw", "zoooom");
bmw.talk();
