console.log("hello world");

let he = "I am Viktor,";
let my = "and I am 25 years old"
document.write(he + " " + my);


names = ["viktor", "dusan", "jelena", "dragan", "aleksandar"];

console.log(names[3])

document.write(he + " " + my + " " + "my friend is" + " " + names[3]);



fruite = ["apple", "banana", "kiwi"];
console.log (fruite)

fruite.push("orange");
console.log (fruite);

fruite.pop();
console.log(fruite);


let string = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
let ne = string.split("/");
console.log(ne.join("\n"))

document.write(string)

let a = 7;

let b = 14;

let c = "21";

let d = '36';

let e = 42;

console.log(a+ b+ Number(c) + Number(d) + Number(e))



let f = '1';

let g = 15;

let h = 8;

let i = "1";

let novo = (Number(f) + g + h + Number(i));
console.log(novo);


let people = ["Greg", "Mary", "Devon","James"];

people.shift()

console.log(people)

people.unshift("Matt")

console.log(people);

people.pop()
console.log(people)

people.push("Viktor")
console.log(people)

console.log(people.slice(0, 2));

console.log(people.indexOf('Mary'));


console.log(people.indexOf('Foo'));


people.shift()

people.unshift("Greg");
people.pop();
people.push("Devon")
people.push("James")
console.log(people)

people.splice(2,1, "Elisabather", "Ana");
console.log(people);

let withBob = people.join(" Bob ");
console.log(withBob)


array1 = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]

console.log(array1[1][1], array1[4][2], array1[5][3], array1[2][3], array1[2][1],);


let something = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"

newSomething =something.split("$");
console.log(newSomething.join(" "))

