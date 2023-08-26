let color = [
    "red",
  "green",
  "cyan",
  "black",
  "blue",
  "yellow",
  "purple",
  "orange",
  "lightgreen",
  "lemon",
]
let index = 0
const colorButton = document.getElementById("changeColor")
colorButton.addEventListener("click", ()=>{
    document.querySelector("#outerDiv").style.backgroundColor = color[index]
    index++
})

let height = [
    "40px",
    "50px",
    "70px",
    "60px",
    "10px",
]
let width = [
    "40px",
    "50px",
    "70px",
    "60px",
    "10px",
]
let radius = [
    "10px",
    "20px",
    "30px",
    "40px",
    "50px",
]
let heightIndex = 0
let widthIndex = 0
let radiusIndex = 0
const shapeButton = document.querySelector("#changeShape")

shapeButton.addEventListener("click", ()=>{
    document.querySelector("#innerDiv").style.height = height[heightIndex]
    heightIndex++
    document.querySelector("#innerDiv").style.width = width[widthIndex]
    widthIndex++
    document.querySelector("#innerDiv").style.borderRadius = radius[radiusIndex]
    radiusIndex++
})