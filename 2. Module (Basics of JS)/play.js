// Function 
    let name = "Max"
    let age = 23
    let game = true

    function summarizeUser (Uname, Uage, Ugame){
        return ('Name is : ' + Uname + ',\nAge : ' + Uage + ",\nThe uesr play game : " + game);
    }

    console.log(summarizeUser(name, age, game));


// Arrow function
    const product  = (a, b) => a*b;
    console.log(product(5, 2));


// Student Object 
    const student = {
        S_name  : 'MedMax',
        S_age : 29,
        /*greet : () => {
            console.log("Hi, I am" + this.S_name); // amundefined
        }*/
        greet(){
            console.log("Hi, I am " + this.S_name);
        }
    }
    // console.log(student);
    student.greet();