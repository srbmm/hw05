const User = {
    name: "John",
    age: 30,
    sayHello: function (){
        console.log(`Hello ${this.name}`);
    },
}

User.sayHello();