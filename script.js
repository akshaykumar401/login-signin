const btn = document.querySelector(".btn");
let msgDiv = document.querySelector(".msg-div");
let input = document.querySelectorAll(".input");

function msg () {    //  =--> Display Login Message
    console.log("Click");
    msgDiv.style.display = "inline";
}

btn.addEventListener("click", msg );
// () => {
//     if(input.innerText == "") {
//         console.log("Khali hai");
//     } else {
//         msg;
//     }
// });

