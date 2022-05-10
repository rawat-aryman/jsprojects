
// retriving button
const button = document.querySelector('.btn');
button.style.color = 'darkGrey';



button.addEventListener('click',()=>{
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let col = `rgb(${red},${green},${blue})`;

  button.textContent = col;
  document.body.style.backgroundColor = col;
  // button.style.backgroundColor = col;
});
