var program=['java','main','baba'];

console.log(program);
console.log(program[2]);

program.push('js');
console.log(program);

program.pop();
console.log(program);

program.unshift('ledioni');
console.log(program);

// program.shift();
// console.log(program);

program.splice(0,2,'ruby');
console.log(program);

console.log(Math.random()*9);

console.log(Math.floor(Math.random()*9));

var students = ["john",'drin','filan'];


var [s1,s2,s3] = students;


console.log(s1);
console.log(s2);
console.log(s3);

var places=['paris','colombia','africa','suedia']
var [paris,,colombia,africa,suedia]=places;
console.log(africa);

var numbers=[1,2,3,4,5,6,7,8,9,10];
var[first,second,....othersNumbers]=numbers;
console.log(first);
console.log(otherNumberst.toString());
