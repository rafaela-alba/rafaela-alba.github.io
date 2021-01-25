// Assignment 9A-B
const john = {
    firstName: 'John',
    lastName: 'Williams',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike', 'Jack', 'Peter'],
    calAge: function () {
        this.age = 2021 - this.birthYear
        return this.age
    },
    getSummary: function () {
        this.retire = 65 - this.age
        return `${john.firstName} is ${2021 - john.birthYear} years old, and he has ${john.calAge() > 16 ? 'a' : 'no'} driver's license`
    }
};

console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[0]}.`);

console.log(john.getSummary());

// 9C Modal Windows
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const goBack = document.querySelector('.close');
const modal = document.querySelector('.modal');

button1.onclick = function () {
    modal.style.display = "block";
};

button2.onclick = function () {
    modal.style.display = "block";
};

button3.onclick = function () {
    modal.style.display = "block";
};

goBack.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (outside) {
    if (outside.target == modal) {
        modal.style.display = "none"
    };
};


// var closeBtns = [...document.querySelectorAll(".close")];
// closeBtns.forEach(function(btn){
//   btn.onclick = function() {
//     var modal = btn.closest('.modal');
//     modal.style.display = "none";
//   }
// });
