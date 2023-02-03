// //console.log("Hello World");
// //alert("K xa hajur?");
// let response = prompt("WHAT IS YOUR NAME?");
// //console.log(response);
// alert("Hello" + " " + response);
// let output = document.querySelector("#output");
// console.log(output);
// // to display output un the website using js
//output.innerText = "K herna ako ta single marxas jatha";

let yourname = document.querySelector("#yourName");
let theirname = document.querySelector("#theirName");
let output = document.querySelector("#output")
let singlePeople = ['bikash', 'dinesh', 'shreejan', 'prabhas', 'sandesh', 'kushal']
function calculate() {
    let name1 = yourname.value;
    let name2 = theirname.value;
    if (name1.length == 0 || name2.length == 0) {
        output.innerText = "Please enter both names!"
    }
    else {
        if (singlePeople.includes(name1.toLowerCase())) {
            output.innerText = "single forever"
        }
        else {
            let lovePercent = parseInt(Math.random() * 100)
            //let lovePercent = Math.random() * 100
            // the below command adds multiplek output at the same time
            //console.log(name1, name2)
            output.innerText = name1 + " and " + name2 + " are " + lovePercent + " % in love"

        }
        yourName.value = ""
        theirName.value = ""

    }
}