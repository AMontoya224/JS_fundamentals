// 1
console.log( hello );
var hello = 'world';

const hello2 = 'world';
console.log( hello2 );

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

function test(){
    const needle1 = 'magnet';
    console.log( needle1 );
}
test();

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

let brendan1 = 'super cool';
function print(){
    brendan1 = 'only okay';
    console.log( brendan1 );
}
console.log( brendan1 );

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

let food1 = 'chicken';
console.log( food1 );
eat();
function eat(){
    const food1 = 'half-chicken';
    console.log( food1 );
}

// 5
/*
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
*/

console.log( food1 );
let mean = () => {
    let food1 = "chicken";
    console.log( food1 );
    food1 = "fish";
    console.log( food1 );
}
mean();
console.log( food1 );

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

let genre1 = "disco";
console.log( genre1 );
rewind();
function rewind() {
    let genre1 = "r&b";
    console.log( genre1 );
    genre1 = "rock";
    console.log( genre1 );
}
console.log( genre );

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

dojo1 = "san jose";
console.log( dojo1 );
learn();
function learn() {
    dojo1 = "seattle";
    console.log( dojo1 );
    var dojo1 = "burbank";
    console.log( dojo1 );
}
console.log( dojo1 );

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
}
else if(dojo.students <= 0){
    dojo = "closed for now";
}
    return dojo;
}

console.log( makeDojo( "Chicago", 65 ) );
console.log( makeDojo( "Berkeley", 0 ) );
function makeDojo( name1, students1 ){
    let dojo1 = {};
    dojo1.name1 = name1;
    dojo1.students1 = students1;
    if(dojo1.students1 > 50){
        dojo1.hiring = true;
}
    else if(dojo1.students1 <= 0){
        dojo1 = "closed for now";
    }
    return dojo1;
}