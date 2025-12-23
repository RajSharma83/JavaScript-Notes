                            /* 📦Chapter 1: Variables & Declarations */

// var, let, const //
 // var : is Es5 version of js  //
 // let and const : is Es6 version of js //

     //  var a;
     //  var a= 12;

     //  let a;
     //  let a= 13;

 // const must be intialized on declaration it generates error without that //
       //  const a = 22;


                                       /* About Variables */

      //   var a = 12;
 // window mein add hota hai //
 // function scope hota hai //
 // we can again declare it with same name , this will not generate error //
    //   var a = 13;

      
     //   let a = 12;
     //   let a =122;
 // we cannot declare it with same name rather you change the value, this will generate error //   


     //  const a = 12;
     //  const a = 21;
 // we cannot change the const value if it is declared , it will genreates error //
 // const variable only used when there is no need to change the value //

                                          /* About Variables Ends */
            



                                      /* Scope ( global , block , functional ) */

    // var a = 56;   // global scope , it is declared in open
    

    // {
    //     let a = 65;   // block scope , it is declared in block that is bracket 
    // }
                              
    //  function abcd() 
    //  {
    //     if(true)
    //     {
    //         var c = 12;   // functional scope ,
    //     }
    //  }

                               /* Scope ( global , block , functional ) Ends */
 
    

                                     /* Temporal dead zone */
     //  What is temopral dead zone ? //
     //    utna area jitne mein js ko pata to hai ki variable exist karta hai par wo 
     //       apko value nahi de sakta                                

         //  console.log(a);
         //  let a = 12; //  
 //  it produce error because we can not access it before initalization //
 
         //  console.log(a);
         //  const a = 12; //  
 //  it produce error because we can not access it before initalization //
      
         //  console.log(a);
         //  var a = 12; //  
 //   it not produce error because it is type of gopi bahu . it only produce undifined //
                           
                                    /* Temporal dead zone Ends */




                                 /* Hoisting impact per type */                                   

             //  What is  hoisting ? //
            //   Ek variable jab js mein banate hai to wo variable doo hisoo mein toot jata hai and
            //   decalre part upar chala jata hai, uska intialization part niche rah jata hai

           //    var a = undefined;
           //    a = 12;

     //  var --> hoist --> undefined
     //  let --> hoist --> X
     //  const --> hoist --> X

                            /* 📦Chapter 1: Variables & Declarations Ends */



                           
                             /*🧠Chapter 2: Data Types + Type System */


        //📦 What Are Data Types?//
    //     In JavaScript, every value has a type.
    //     These types define what kind of data is being stored — a number, text, boolean, object, etc.
    //     There are two categories:
    //     Primitive types – stored directly.
    //    Reference types – stored as memory references.

         //  🔹 Primitive Data Types
     //    1. String → Text
     //         "hello"       
     //    2. Number → Any numeric value
     //         3 , -99 , 3.14
     //    3. Boolean → True or false
     //       true , false
     //    4. Undefined → Variable declared but not assigned
     //         let x;→ x is undefined
     //    5. Null → Intentional empty value
     //      let x = null;
     //    6. Symbol → Unique identifier (rarely used) it is different value with different symbol
     //    7. BigInt → Very large integers
     //      123456789012345678901234567890n                               
    

    //        🔹 Reference Data Types
    //   Object →    { name: "Harsh", age: 26 }5/3628/06/2025, 15:10
    //   Array → [10, 20, 30]
    //  Function → 
    //  function greet() {}
    //   These are not copied directly, but by reference




    // Dynamic Typing --> Js mein static typing nahi hai or yaha par hai dynamic typing
    //                    jsika matlab hai aap data ko change kar sakte hai kyuki yaha par
    //                    dynamic typing hai.


    // typeof quirsk (example: typeof Object == 'null')


       // Truthy and Falsy value //
      // 0 false ""  undefined null NaN document.all   ---> false
      // rest all are considered --> true  

                     /*🧠Chapter 2: Data Types + Type System Ends */



     

                           /*🔄Chapter 3: Operators */

  // Arithmatic , comparison , assignment , logical , unary , ternary //
  
      // In arithmatic operator : 
      // +  -  *  /  %  ** 

      // In comparison operator :
      // =  ==  ===  !=  !==  <  >  <=  >=

      // In assignment operator :
      // =  +=  -=  *=  /=  %= 

      // In logical operator :
      // &&  ||  !

      // In unary  operator :
      // +  -  !  typeOf  ++ --
    
      // In ternary operator :
      //      :   ?
         //    eg-->  12<13 ? console.log("true") : console.log("false");

     // let score = 78
     // let grade = score >=90 ? "A" : score >=75 ? "B" : score >=60 ? "C" : "Fail";
     // console.log(grade);

                    /*🔄Chapter 3: Operators Ends */



                 
                       /* 🧭Chapter 4: Control Flow */ 
    
    //    What is Control Flow?
    //       Control flow decides which code runs, when it runs, and how many times it runs.
    //       It's like decision-making + direction in your JavaScript program.
    //      If operators are the verbs, control flow is the traffic signal.                     



        // The control flows are :
         //    if else  else if 
         //    switch case
        //    early return pattern

      //   if else  else if :

    //  let marks = 78;
    //   if (marks >= 90) {
    //    console.log("A");
    //  } else if (marks >= 75) {
    //    console.log("B");
    //  } else {
    //    console.log("C");
    //   }

   // Switch case :

    // let fruit = "apple";
    // switch (fruit) {
    //   case "banana":
    //    console.log("Yellow");
    //    break;
    //   case "apple":
    //    console.log("Red");
    //    break;
    //   default:
    //   console.log("Unknown");
    //    }


    // Early return pattern :
    //     function checkAge(age) {
    //    if (age < 18) return "Denied";
    //   return "Allowed";
    //   }



    // Rock paper scissor //

    // function rps(user, computer) {
    //       if(user== computer) return "draw";

    //      if (user=="rock" && computer=="sicssor") return "user";
    //      if (user=="sicssor" && computer=="paper") return "user";
    //      if (user=="paper" && computer=="rock") return "user";
        
    //     return "computer" ;
    // } 
    // console.log(rps("rock" , "paper"));

                            /* 🧭Chapter 4: Control Flow Ends */ 



                      

                             /* 🔁Chapter 5: Loops */

   // Types of loops are :
        // for  while  do-while foreach forin forof 

         //      for (let i = 0; i < 5; i++) {
         //        console.log(i);
         //     }


        //     let i = 0;
        //     while (i < 5) {
        //     console.log(i);
        //      i++;
        //    }

            //   let i = 0;
            //  do {
            //  console.log(i);
            //  i++;
            //  } 
            //  while (i < 5);


            //    ⛔ break and continue
         
            //    break : Exit loop completely
            //   continue : Skip current iteration and move to next

            //    for (let i = 1; i <= 5; i++) {
            //       if (i === 3) continue;
            //      console.log(i);  // Skips 3
            // }

            
            //    Table printing with for loop :
            // for(let i=1;i<=10;i++) {
            //     console.log(`5 * ${i} = ${5 *i}`);
            // }

                          /* 🔁Chapter 5: Loops Ends */





                           /*  🧮Chapter 6: Functions */

            //    🧠 What are Functions?
            //        Functions are blocks of reusable logic.
            //        Instead of repeating the same task again and again, wrap it in a function
            //        and reuse it with different inputs.

            //       Think of a function like a vending machine:
            //         Input: you give money + item code
            //         Output: it gives you the item
            //         Logic: hidden inside               
             
             //      function first( v) {
             //       for(let i=v;i<=10;i++){
             //          console.log(i);
             //     }
             //    }
             //     first(5);


             // fat arrow function //

             //  ()=> {

             //  }

             // we can also store the function in variables :

                  //  let a = function() {
                 //     console.log("hello java")
                 //  }
                 //   a();

         // Note : Jab argument kai sara ho to hume utna hi parameter banane padenge, isliye
         //  ise bachne ke liye rest ka use karte hai ... agar function ke parameter mein
         //  laga hai to wo rest operator hai.   
         
        //  for example: 
            //  function rest(...val) {
            //      console.log(val);
            //  }
            //  rest(1,2,3,4,5,6);



        // first class function --> funtions jo value ke tarah treat karte hai
        
         // for example : 
            // function abcd(val) {
            //     val();
            // }
            // abcd( function() {
            //     console.log("JavaScript");
            // })

        //  higher order functions --> wo function jo ki return kare function ya fir accept 
        //  kare ek function apne parameter mein   

         // for example : 
        //   function abcd(){
        //     return function(){
        //         console.log("JavaScript is going on");
        //     }
        //   }
        //   abcd()();

       // pure and impure functions :
        
       // aisa function jo ki bahr ki value ko naa badal de wo pure function hota hai.
          // for example :
        //     let a = 12;
        //     function pure() {
        //     console.log("this is pure funtion");
        //    }

       // asia function jo ki bahar ki value ko badal de wo impure function hota hai.
          // for example :
        //    let a = 12;
        //   function impure() {
        //     a++;
        //    console.log(a);
        //   }

        //   Closure function --> ek function jo return kare ek aur function aur return hone wala function
        //  hamesa  wo use karega parent function ka koi variable

    //     function Closure() {
    //         let a = 22;
    //       return function()
    //       {
    //         console.log(a);
    //       }
    //     }
    //    Closure()();


        //   ⚡ IIFE – Immediately Invoked Function Expression
 
        //        (function () {
        //     console.log("Runs immediately");
        //    })();



        // 🚀 Hoisting: Declarations vs Expressions
 
            //    hello();   // function call before declaration

            //  function hello() {
            //  console.log("Hi");
            // }

            // Bute we cannot use the hoisting when the function is declared in variable it produce error.
            // for example :
            //  greet(); // error
            //  let greet = function () {
            //  console.log("Hi");
            //  };




    // @1. Use rest parameter to accept any number of score and return the total .
    
    //   function getscore(...score) {
    //      let total = 0;
    //      score.forEach(function(val) {
    //         total = total + val;
    //      }) 
    //      return total;
    //   }
    //   console.log(getscore(65,56,45,40,30));



       // @2. Make a BMI calculator :

    //    function BMI(weight, height) {
    //     return weight / (height*height);
    //    }
    //    console.log(BMI(60, 1.3).toFixed(2));
         
                                      /*  🧮Chapter 6: Functions Ends */

    





                                   /*  🧰Chapter 7: Arrays */
 
        //  let fruits = ["apple", "banana", "mango"];

        //  let marks = [90, 85, 78];
        //  console.log(marks[1]); // 85
        //  marks[2] = 80;    // Update index 2

        //  🧱 Modifiers (Change original array)

            //  let arr = [1, 2, 3, 4];
            //  arr.push(5);        // Add to end 
            //  arr.pop();        // Remove last
            //  arr.shift();       // Remove first
            //  arr.unshift(0);    // Add to start
            //  arr.splice(1, 2);  // Remove 2 items starting at index 1
            //  arr.reverse();    // Reverse order


            //    🔍 Extractors (Don't modify original array)

            // let newArr = arr.slice(1, 3); // Copy from index 1 to 2
            // arr.sort();  // Lexical sort by default

            // let arr = [15,31,21,56,2,12];
            // let sr = arr.sort(function(a,b) {
            //     return (a-b);   for ascending order
            // })


            // foreach loop in array :
 
            //  let arr = [12,8,45,32,18,49];
            //  arr.forEach(function(val) {
            //      console.log(val+2);;
            // })

            // Map in array :    
            // Map tab use karte h jab apko ek new array bana hai pichle array ke data basis par

            // Map dikhte hi ek blank array maan mein assume kar liya karo

            // let arr =[12,25,15,16,18,45];
            // newarr = arr.map(function(val) {
            //     return 2006;
            // })

            // When to use the Map in array ?
            // Jab bhi aap ko koi asia case dikh jaye jaha par ek array se naya array or wo naya array 
            // kuch values ko hi rakhe ga tab map use karte hai.


            // Filter in array :
            // Filter is same as the foreach or map but it gives only true and false only
            // true means pass to new array and false means not to pass .

            // let arr = [1,2,3,4,5,6,7,8,9,10];
            // let newarr = arr.filter(function(val) {
            //     if(arr<2) return true;
            // })

            // Reduce in array :
            // reduce means you have to combine all array elements and the final result is to be in 
            // single form.

            // let arr = [12,10,24,14];
            // let ans = arr.reduce(function(accumulator, val) {
            //   return accumulator +val;
            // },0);      // accumulator means the intial value 

        //    nums.find(n => n > 2);   // First match
        //   nums.some(n => n > 5);   // At least one true
        // nums.every(n => n > 0);   // All true or flase


        //  ✂ Destructuring & Spread 
         
        //  Destructuring :
        // let arr = [1,2,3,4,5,6];
        // let [a,b,c] = arr;

        // spread :
        // let  arr = [12,13,45,56,78,18];
        // let arr2 = [...arr];

                                             /*  🧰Chapter 7: Arrays Ends */






                                
                                             /*   🧱Chapter 8: Objects */

        //  Objects in JavaScript are like real-world records – a collection of key-value pairs.
        // They help us store structured data (like a student, a product, or a user profile).
 
        //      let student = {
        //      name: "Raj",
        //      age: 19,
        //      isEnrolled: true
        //      };                                     


        //     🏗 Nesting and Deep Access :
        //   Objects can have nested objects (objects inside objects)
 
        //      let user = {
        //      name: "Raj",
        //      address: {
        //      city: "Delhi",
        //      pincode: 110001
        //    }
        //  };
        // console.log(user.address.city); // Delhi


        // ✂ Object Destructuring :
        //  You can extract values directly
            
        //   let { name, age } = student;


        // forin loop in object :

        // let obj = {
        //     name : "Raj",
        //     age : 19,
        //     email : "hellojava@gmail.com",
        // } ;

        // for (let key in obj) {
        //     console.log(key, obj[key]); 
        // }

        //   Object.keys(obj);   // ["name", "age", "isEnrolled"]  
        //   Object.entries(obj);   // [["name", "Ravi"], ["age", 21], ...]

        // assign or coping Object : 

        // let obj = {
        //     name : "Raj",
        //     age : 19,
        //     education : "Graduation",
        // };
        // let obj2 = Object.assign({car:"BMW"},obj);

        // let obj = {
        //     name : "Raj",
        //     age: 19,
        //     language : "Javascript",
        //     address : {
        //         city : "Gorakhpur",
        //     },
        // };
        // let obj2 = JSON.parse(JSON.stringify(obj));
        // obj2.city = "Noida";


        //  ❓ Optional Chaining
        //      Avoids errors if a nested property is undefined:

        //      console.log(user?.address?.city);   // Delhi  
        //   console.log(user?.profile?.email);  // undefined (no error)


        //@1. Destructure the key "first-name" in variable called as firstname.

        //  const user = {
        //     "first-name" : "Raj",
        //  };
        //  let {"first-name" : firstname} = user;


        //@2. Use object.entries() to print all key values pairs as :
        //language : JavaScirpt
        // Duration : 20 hours

        //  const coure = {
        //     language : "JavaScirpt",
        //     duration : "20 hours",
        //  };
        //  Object.entries(coure).forEach(function(val) {
        //     console.log(val[0] +":"+ val[1]);
        //  })


       //@3. Use variable to dynamic assing a property :

    //    const key = "role";
    //    let obj = {
    //       name : "Raj",
    //       [key] : "admin",
    //    };

                                  /*   🧱Chapter 8: Objects Ends */


 





