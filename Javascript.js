// let btn = document.querySelectorAll(".btn");

// let result = document.getElementById('result');

// for(let i = 0; i < btn.length; i++){
//     btn[i].onclick = function(){
//         if(btn[i].textContent == 'C'){
//             result.value = '';
//         }
//         else if(btn[i].textContent == '='){
//             result.value = eval(result.value);
//         }
//         else{
//             result.value += btn[i].textContent;
//         }
//     }
// }


let result = document.getElementById("result");
let btn = document.querySelectorAll(".btn");

for(let i = 0; i < btn.length; i++)
{
    btn[i].onclick = function(){
        if(btn[i].textContent == 'C'){
            result.value = '';
        }
        else if(btn[i].textContent == '='){
            result.value = eval(result.value);
        }
        else{
            result.value += btn[i].textContent;
        }
    }
}