function hideAll() {
  document.getElementById('ds').style.display = "none";
  document.getElementById('ws').style.display = "none";
  document.getElementById('ms').style.display = "none";
}

function showDivDaily() {
    document.getElementById('ds').style.display = "flex";
    document.getElementById('ws').style.display = "none";
    document.getElementById('ms').style.display = "none";
}


function showDivWeekly() {
  document.getElementById('ws').style.display = "flex";
  document.getElementById('ms').style.display = "none";
    document.getElementById('ds').style.display = "none";
}

function showDivMonthly() {
  document.getElementById('ms').style.display = "flex";
  document.getElementById('ds').style.display = "none";
  document.getElementById('ws').style.display = "none";
}

// function myFunction(x) {
//   if (x.matches) {
//     function hideAll() {
//       document.getElementById('ds').style.display = "none";
//       document.getElementById('ws').style.display = "none";
//       document.getElementById('ms').style.display = "none";
//     }
//
//     hideAll()
//
//     function showDivDaily() {
//       document.getElementById('ds').style.display = "flex";
//       document.getElementById('ws').style.display = "none";
//       document.getElementById('ms').style.display = "none";
//     }
//
//     showDivDaily()
//
//     function showDivWeekly() {
//       document.getElementById('ws').style.display = "flex";
//       document.getElementById('ms').style.display = "none";
//         document.getElementById('ds').style.display = "none";
//     }
//     showDivWeekly()
//
//     function showDivMonthly() {
//       document.getElementById('ms').style.display = "flex";
//       document.getElementById('ds').style.display = "none";
//       document.getElementById('ws').style.display = "none";
//     }
// showDivMonthly()
//
//   }
//
//   else {
//     function hideAll() {
//       document.getElementById('ds').style.display = "none";
//       document.getElementById('ws').style.display = "none";
//       document.getElementById('ms').style.display = "none";
//     }
// hideAll()
//
//     function showDivDaily() {
//       document.getElementById('ds').style.display = "block";
//       document.getElementById('ws').style.display = "none";
//       document.getElementById('ms').style.display = "none";
//     }
// showDivDaily()
//
//     function showDivWeekly() {
//       document.getElementById('ws').style.display = "block";
//       document.getElementById('ms').style.display = "none";
//       document.getElementById('ds').style.display = "none";
//     }
// showDivWeekly()
//
//     function showDivMonthly() {
//       document.getElementById('ms').style.display = "block";
//       document.getElementById('ds').style.display = "none";
//       document.getElementById('ws').style.display = "none";
//     }
// showDivMonthly()
//
//   }
//
// }
// var x = window.matchMedia("(min-width: 1199px)");
// myFunction(x);
// x.addListener(myFunction);
