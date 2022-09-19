
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);

// const matches = document.querySelectorAll("div.five, div.six, div.seven, div.eight, div.nine, div.ten, div.eleven, div.twelve, div.thirteen, div.fourteen, div.fifteen");
const matches = document.querySelectorAll("div");

console.log(matches);

document.addEventListener('mousemove', (event) => {
  console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);

});
