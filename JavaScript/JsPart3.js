      //  <---------------------  This Keyword  -------------------------->
  
  //* this keyword special keyword hai, kyuki jaise baaki sari keyword ki value ya unka nature
    // same rahtta hai , this keyword ki value badl jati hai iss baat se ki app useee kaha use 
    // kar rahe ho .

   //  global scope:
//  console.log(this);     // window hota h 

   // function ke andar:
//  function abcd() {
//     console.log(this);   // window hota h
//  }
//  abcd();


  // if function is written in object then it is called method

  // object ke andar:
//   let obj = {
//    name: "Raj sharma",
//    age: 19,
//    sayname: function(){
//       console.log(this);    // object hota h 
//    },
//   };
//   obj.sayname();


  // event lister ke andar:
//   document.querySelector("h1").addEventListener("click",function(){
//    console.log(this.style.color="red"); // event listner m selector hi this keyword hota h 
//  });


    // class ke andar:
   // class abcd {
   //    constructor(){
   //       console.log("Hehehehe");
   //       this.a = 18;   // class ke andar this ka mtlb blank object hota h 
   //    }
   // } 
   // let val = new abcd();



      //   <-------------------------- this ki values --------------------->

   //  global - window 
   //  function - window
   //  Object with Es5 function - Object
   //  Object with Es6 arrow function - window
   //  Es5 function inside Es5 method - window
   //  arrow function inside Es5 method - Object
   //  event listerner - Element
   //  class - blank object



// <---------------------------------------------------------------------------------------->

      /* call apply bind */
     
//   function ko call karte waqt aap set kar sakte ho ki uski this kya hogi

//   let obj = {
//    name: "Raj sharma",
//    age: 19,
//   };
//   function abcd (a,b,c){
//    console.log(this,a,b,c);
//   };
//   abcd.call(obj,1,2,3);   // call
//   abcd.apply(obj,[1,2,3])   // In apply we pass only two parameter 
//   let func = abcd.bind(obj,1,2,3) // bind remake a function it is a copy of a real function




  