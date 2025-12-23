    // Objects:
    //     In JavaScript, an object is a collection of data (properties) and actions
    //      (methods) stored as key–value pairs.

    //    1.Properties hold values like strings, numbers, or even other objects.
    //    2.Methods are functions inside the object that define what it can do.
    //    3.Objects let you group related data and functionality together in one place.


//   function CreaterPencil(name,price,color,brand){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.brand = brand;
//     this.write = function(text){
//       let h1 = document.createElement("h1");
//       h1.textContent = text;
//       h1.style.color = color;
//       document.body.append(h1);
//     };
//   }  
//   let pencil1 = new CreaterPencil("Natraj",15,"Red","Netraj");
//    let pencil2 = new CreaterPencil("Dooms",25,"Pink","Dooms");


       /* With prototype  */

  //   function CreaterPencil(name,price,color,brand){
  //   this.name = name;
  //   this.price = price;
  //   this.color = color;
  //   this.brand = brand;
  //  }  
  //   CreaterPencil.prototype.write = function(text){
  //     let h1 = document.createElement("h1");
  //     h1.textContent = text;
  //     h1.style.color = this.color;
  //     document.body.append(h1);
  //   };
  // let pencil1 = new CreaterPencil("Natraj",15,"Red","Netraj");
  //  let pencil2 = new CreaterPencil("Dooms",25,"Pink","Dooms");
     


  // ------------------------------------------------------------------------------------------ //


                            // <-- Classes -->

//   class CreaterPencil {
//     constructor(name,price,color,brand){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.brand = brand;
//     }
//     erase(){
//      document.querySelectorAll("h1").forEach((elem) => {
//         if(elem.style.color == this.color)
//             elem.remove();
//      });
//     }

//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.append(h1);
//     }
//   }
//   let p1 = new CreaterPencil("natraj",15,"red","natraj")
//   let p2 = new CreaterPencil("Dooms",55,"blue","Dooms")


  class user {
    constructor(name,address,userName,email) {
        this.name = name;
        this.address = address;
        this.userName = userName;
        this.email = email;
        this.role = "user";
    }
    checkrole(){
        return (`Your are ${this.role}`);
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.append(h1);
    }
  }
  
   class admin extends user{
     constructor(name,address,userName,email){
      super(name,address,userName,email);
      this.role = "admin";
     }
     remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        });
     }
   }

  let u1 = new user("Raj","Gkp","Raj009","hello.@gmail.com")
  let u2 = new user("Surya","Gkp","Surya09","hellower.@gmail.com")
  let u3 = new user("Prince","Bihar","prince09","hellowerxvc.@gmail.com")
  let a1 = new  admin("admin","India","admin08","admin@gmail.com")