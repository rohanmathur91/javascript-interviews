// object creation without "new" operator
const functionStore = {
  increase() {
    this.score++;
  },
};

function user(name, score) {
  const obj = Object.create(functionStore);
  obj.name = name;
  obj.score = score;
  return obj;
}

const user1 = user("John", 10);
const user2 = user("Doe", 20);

// ----------  with the "new" operator -----------
function User(name, score) {
  this.name = name;
  this.score = score;
}

// shared functions will go in prototype
User.prototype.increase = function () {
  this.score++;
};

const user10 = new User("John", 10);
const user20 = new User("Doe", 20);
console.log(user10, user20);

user10.increase();
user10.increase();
console.log(user10.score);
