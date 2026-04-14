function showMessage(){
    alert("HELLO FROM DS")
}
showMessage();

function sum(number1,number2){
    return number1+number2
}

console.log (sum(60,50))

var arrowFunction = () => alert("hello");

arrowFunction();

var arrowFunction = name => alert(`hello ${name}`);

arrowFunction("strawberita");

function dsFunction(){
    var localVar= "Digital school"

    alert(localVar)
}

dsFunction();

var car={
    name:"Mercedes",
    color:"black",
    year:"2026",
    kilometers:500,
    startEngine: function(){
        alert("vroooooooooooooooooooooooooooooom");
    }

}

car.startEngine();

var computer = new Object();
computer.name = "opel";
computer.CPU = "intel core i9";
computer.RAM = "16gb";
computer.GPU = "geforce";

computer.type = function() {
    return this.name + ',' + this.CPU + '.' + this.RAM + ',' + this.GPU;
};

alert(computer.GPU);
console.log(computer.type());

delete computer.GPU;

function Computer(name, CPU, RAM, GPU) {
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1 = new Computer("Dell", "i7", "8GB", "RTX 3060");

console.log(computer1.type); 
delete computer.GPU;

function Computer(name, CPU, RAM, GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1 = new Computer("macbook", "m1", "8gb", "5600");
var computer2 = new Computer("acer", "intel", "4gb", "integrated");