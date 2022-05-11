
const increase = document.querySelector('#increase img');
const decrease = document.querySelector('#decrease img');
console.log(decrease);

let count = document.querySelector('#count');
let number = count.innerText;
number = +number;
// console.log(typeof number);

increase.addEventListener('click',() =>{
  number += 1;
  // console.log(number);
  count.innerText = number;
});

decrease.addEventListener('click',() =>{
  number -= 1;
  count.innerText = number;
})
