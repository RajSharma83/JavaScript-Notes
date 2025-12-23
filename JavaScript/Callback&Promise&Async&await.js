                                 // Sync & Async
 
//   Sync --> asia code jo line by line chale wo Sync hota hai.  
//   Async --> asia code jo jab chale jab wo chalne ke liye ready ho jaye 
//             wo async hota hai.                              
     
//  function kuchderBaad(func){
//     setTimeout(func,Math.floor(Math.random()*20)*1000);
//  }
//  kuchderBaad(function(){
//     console.log("hey");
//  })


  // Ek function ko agar aap ek or function bhej de rahe ho parameter mein, to wo parameter wala 
   // function khelaata hai callback

   // function bringProfile(username,cb){
   //    console.log("Fetching the Profile data ...")
   //    setTimeout(()=>{
   //       cb({_id:2401337,username, age:16, email:"rs12@gmail.com"});
   //    },2000);
   // }
   // function getPost(id,cb){
   //    console.log("Fetching the Post...")
   //    setTimeout(()=>{
   //    cb({_id: id , post:["hello","I am Raj","and Js is going on"]})
   //    },3000);
   // }

   // bringProfile("Raj sharma",function(data){
   //    console.log(data);
   //  getPost(data._id , function(post){
   //    console.log(post)
   //     })
   // });


   // Callback hell --> means go deep in one callback or 2,3,4,5,6,.....
   

  // ---------------------------------------------------------------------------------------------
  
      /* Promise */
    // App ek promise banate ho jo ki do states mein se ek state me jaa sakte hai and wo yaa to
    // resolve hoga yaa to reject hoga ab kya hoga ye to waqt batayega par humein dono ke liye
    // code likhna padtaa hai.    
    
//   let pr = new Promise(function(res, rej) {
//    setTimeout(() => {
//     let rn = Math.floor(Math.random()*10);
//     if (rn>5)  res("Resolved with: "+rn);
//     else rej("Rejected with :"+rn); 
//   }, 3000);
//  });

//  pr.then(function(val) {
//   console.log(val);
// })
// .catch(function(val) {
//   console.log(val);
// });


    // with async 

//   let pr = new Promise(function(res, rej) {
//    setTimeout(() => {
//     let rn = Math.floor(Math.random()*10);
//     if (rn>5)  res("Resolved with: "+rn);
//     else rej("Rejected with :"+rn); 
//   }, 3000);
//  });

//  async function abcd() {
//   try {
//     let val = await pr;
//     console.log(val);
//   }
//   catch(err){
//     console.log(err);
//   }
//  }



    