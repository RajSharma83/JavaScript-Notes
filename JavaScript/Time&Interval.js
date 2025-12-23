// let time = "Hello time and inerval"
// setTimeout(function(){      // Timeout only run one time
//     console.log(time)
// },3000)


// let t = "Hello time and inerval"
// setInterval(function(){      // Interval run ever time in loop in given time gap
//     console.log(t)
// },3000)


// count = 10;
// let Interval = setInterval(function(){
//    if(count>=1){
//     count--;
//     console.log(count);
//    } else  clearInterval(Interval);
// },2000)


            /* Download progress */

// let count = 0;
// const progressF = document.querySelector("#progressFill");
// const progressD = document.querySelector("#progressText");
// const start = document.querySelector("button");

// start.addEventListener("click", function () {
//   // Reset progress if clicked again
//   count = 0;
//   progressF.style.width = "0%";
//   progressD.textContent = "0%";
//   start.disabled = true;
//   start.textContent = "Downloading...";

//   const intv = setInterval(function () {
//     if (count < 100) {
//       count++;
//       progressF.style.width = `${count}%`;     
//       progressD.textContent = `${count}%`;     
//     } else {
//       clearInterval(intv);                     
//       start.disabled = false;
//       start.textContent = "Download completed";
//       alert("Hi Dear Your download is completed")
//     }
//   }, 100); 
// });


