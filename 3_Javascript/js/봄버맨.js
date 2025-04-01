const box = document.getElementById('box');
const bomberman = document.getElementById('bomberman');

const initialBombermanX = 200; 
const initialBombermanY = 200; 

bomberman.style.left = `${initialBombermanX}px`;
bomberman.style.top = `${initialBombermanY}px`;

let bombermanX = initialBombermanX;
let bombermanY = initialBombermanY;
const moveSpeed = 5; // 이동 속도 (원하는 값으로 변경)
let isMoving = {
  up: false,
  down: false,
  left: false,
  right: false,
};

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      isMoving.up = true;
      break;
    case 'ArrowDown':
      isMoving.down = true;
      break;
    case 'ArrowLeft':
      isMoving.left = true;
      break;
    case 'ArrowRight':
      isMoving.right = true;
      break;
  }
});

document.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      isMoving.up = false;
      break;
    case 'ArrowDown':
      isMoving.down = false;
      break;
    case 'ArrowLeft':
      isMoving.left = false;
      break;
    case 'ArrowRight':
      isMoving.right = false;
      break;
  }
});

function moveBomberman() {
  if (isMoving.up) {
    bombermanY -= moveSpeed;
  }
  if (isMoving.down) {
    bombermanY += moveSpeed;
  }
  if (isMoving.left) {
    bombermanX -= moveSpeed;
  }
  if (isMoving.right) {
    bombermanX += moveSpeed;
  }

  // 게임 영역 경계 확인 (box의 크기에 따라 값 조절)
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;
  const bombermanWidth = bomberman.offsetWidth;
  const bombermanHeight = bomberman.offsetHeight;

  bombermanX = Math.max(0, Math.min(bombermanX, boxWidth - bombermanWidth));
  bombermanY = Math.max(0, Math.min(bombermanY, boxHeight - bombermanHeight));

  bomberman.style.left = `${bombermanX}px`;
  bomberman.style.top = `${bombermanY}px`;

  requestAnimationFrame(moveBomberman); // 부드러운 움직임을 위한 애니메이션 프레임 요청
}

moveBomberman(); // 움직임 함수 시작