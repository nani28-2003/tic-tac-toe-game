let BOXES = document.querySelectorAll(".cells")
let Display = document.querySelector(".display")
let msgConatiner = document.querySelector(".msg")
let newGameBtn = document.querySelector(".NewGame")
// console.log(BOXES)
let winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];
 function displaywinner(winner){
  msgConatiner.innerText= `🎉 Player ${winner} wins!`
  msgConatiner.classList.remove('hide')
newGameBtn.classList.remove("hide")
}
let user = true;
BOXES.forEach((box) => {
  box.addEventListener("click", () => {
    if (user) {
      box.innerHTML = "X"
      user = false
    } else {
      box.innerHTML = "O"
      user = true
    }
    box.disabled = true;
    checkWinner()
  })
});

function checkWinner(){
for (let pattern of winPatterns) {
  let pos1val = BOXES[pattern[0]].innerText;
  let pos2val = BOXES[pattern[1]].innerText;
  let pos3val = BOXES[pattern[2]].innerText;


  if (pos1val !== '' && pos2val !== '' && pos3val !== '') {
    if (pos1val === pos2val && pos2val === pos3val) {
      DisBtn()
      displaywinner(pos1val)
    }
  }
}}

newGame=()=>{
    BOXES.forEach((box) => {
      box.innerText=""
      user=true;
      msgConatiner.classList.add('hide')
      EnBtn()
    });
}
newGameBtn.addEventListener("click",newGame)

DisBtn=()=>{
 BOXES.forEach((box) => {
  box.disabled=true
 });
}
EnBtn=()=>{
  BOXES.forEach((box) => {
   box.disabled=false
  });
 }
 