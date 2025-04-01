// const colorInputs = document.querySelectorAll(".color-input");
// const boxes = document.querySelectorAll(".box");
// const changeButton = document.getElementById("changeButton");

// function changeKeyColor() {
//     for (let i = 0; i < colorInputs.length; i++) {
//         const inputColor = colorInputs[i].value;
//         boxes[i].style.backgroundColor = inputColor;
//     }
// }

// changeButton.addEventListener("click", changeKeyColor);

// 배경색 적용할 div 배열
const boxList = document.querySelectorAll(".box"); // 클래스 선택자 사용

// 배경색 입력할 input 배열
const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", function(){
    for(let i = 0; i < boxList.length; i++){
        boxList[i].style.backgroundColor = inputList[i].value; // inputList 변수 사용
    }
});