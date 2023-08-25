// BIR:Scope 3 turga bo'linadi bular 1-Global, 2-Function, 3-Block. 
// if,for,while,do while bular Block scopeka turiga kiradi.
// Oddiy yozishimiz Global scopeka turiga kiradi.

// IKKI:
// function Bolunuvchi() {
//     let number = parseInt(prompt("Sonni kiriting: "));
//     for (let i = 1; i <= number; i++) {
//       if (number % i === 0) {
//         console.log(i);
//       }
//     }
//   }
//   Bolunuvchi();

// UCH:
// function Number(a) {
//     switch (a) {
//       case 1:
//         return "Yomon";
//       case 2:
//         return "Qoniqarsiz";
//       case 3:
//         return "Qoniqarli";
//       case 4:
//         return "Yaxshi";
//       case 5:
//         return "A`lo";
//       default:
//         return "Xato";
//     }
//   }
//   let a = 5;
//   let evaluation = Number(a);
//   console.log(evaluation);

// TO`RT:
// function count(a) {
//     let hours = Math.floor(a / 3600);
//     let seconds = a % 3600;
//     return [hours, seconds];
//   }
//   let a = 12345;
//   let [hours, seconds] = count(a);
//   if (hours === 1) {
//     console.log(`${hours} soat ${seconds} second o'tdi kun boshlangandan beri.`);
//   } else {
//     console.log(`${hours} soat ${seconds} second o'tdi kun boshlangandan beri.`);
//   }

// BESH: Java script 1995-yilda paydo bo'lgan Web siteni harakatlantirish uchun yasalgan dasturlash tili.
//Va shu yil browserda ishlay boshladi.
// JavaScript backendda 2009-yil  ishlay boshladi.