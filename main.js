import Board from "./models/board.js"
console.log(Board)
let gridW = 10
let gridH = 10

export default function createGrid() {
  const board = document.getElementById("board")

  for (let i = 0; i < gridH; i++) {
    let row = document.createElement("div")
    row.className = "row row" + (i + 1)
    for (let j = 0; j < gridW; j++) {
      let node = document.createElement("div")
      node.className = "node node" + (i * 10 + (j + 1))

      row.appendChild(node)
    }
    board.appendChild(row)
  }
}

function animateDFS() {}
module.exports = { createGrid }
