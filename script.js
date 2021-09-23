

const app = vue.createApp({
    data()
    {
        return {
        fullname: "shelly",
        designation: "techie",
        age: 21,
        email: "shell@gmail.com",
        countries: ("usa","uk")
        }
    }


});

app.mount("#myApp1");

/*
class Director extends Person {
    constructor(designation,salary,name,age,joiningDate)
    {super(name,   age, joiningDate);
    
    this.designation = designation;
    this.salary = salary;}
}

class Person { constructor 
    (name,age,joiningDate)
    {this.name = name; 
        this.age = age; 
        this.joiningDate = joiningDate;}}

let cto = new Director("cto", 100)
console.log(cto);
*/
