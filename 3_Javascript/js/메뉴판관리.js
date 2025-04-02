// 식당명 관련 요소
const resNameSpan = document.getElementById('resName');
const resNameInput = document.getElementById('resNameInput');

// 버튼 관련 요소
const updateBtn = document.getElementById('updateBtn');
const addMenuBtn = document.getElementById('addMenu');
const deleteMenuBtn = document.getElementById('deleteMenu');
const exitBtn = document.getElementById('exitBtn');

// 메뉴 관련 요소
const menuContainer = document.querySelector('.menu-container');

// 버튼 컨테이너
const normalContainer = document.querySelector('.normal-container');
const editContainer = document.querySelector('.edit-container');

// 식당명 span 클릭 시 입력창 활성화
resNameSpan.addEventListener('click', () => {
  resNameSpan.classList.add('res-name-hidden');
  resNameInput.classList.remove('res-name-hidden');
  resNameInput.focus(); // 입력창에 자동으로 포커스 주기
});

// 입력창에서 포커스가 해제되면(blur) 식당명 업데이트 및 입력창 숨기기
resNameInput.addEventListener('blur', () => {
  resNameSpan.innerText = resNameInput.value;
  resNameSpan.classList.remove('res-name-hidden');
  resNameInput.classList.add('res-name-hidden');
});

updateBtn.addEventListener('click', () => {
  normalContainer.classList.add('b-hidden');
  editContainer.classList.remove('b-hidden');
  menuContainer.classList.add('edit-mode'); // 편집 모드 클래스 추가

  // 모든 메뉴 항목에 삭제 버튼 추가 (기존 버튼은 제외)
  const currentMenus = menuContainer.querySelectorAll('.menu'); // 현재 모든 .menu 항목 선택
  currentMenus.forEach(menu => {
    if (!menu.querySelector('.delete-btn')) {
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = '삭제';
      deleteBtn.classList.add('delete-btn');
      menu.appendChild(deleteBtn);

      // 삭제 버튼 클릭 시 메뉴 항목 삭제
      deleteBtn.addEventListener('click', (event) => {
        event.target.parentNode.remove(); // 클릭된 삭제 버튼의 부모(li) 삭제
      });
    }
  });
});

exitBtn.addEventListener('click', () => {
  editContainer.classList.add('b-hidden');
  normalContainer.classList.remove('b-hidden');
  menuContainer.classList.remove('edit-mode'); // 편집 모드 클래스 제거

  // 삭제 버튼 제거
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(btn => btn.remove());
});

addMenuBtn.addEventListener('click', () => {
  const newMenuItem = document.createElement('li');
  newMenuItem.classList.add('menu');

  const menuNameInput = document.createElement('input');
  menuNameInput.type = 'text';
  menuNameInput.classList.add('menu-name-input');
  menuNameInput.placeholder = '미입력'; // 수정: placeholder로 "미입력" 설정

  const menuPriceInput = document.createElement('input');
  menuPriceInput.type = 'number';
  menuPriceInput.classList.add('menu-price-input');
  menuPriceInput.placeholder = '가격';
  menuPriceInput.value = 0; // 초기값을 0으로 설정

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '삭제';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  });

  newMenuItem.append(menuNameInput, ' ', menuPriceInput, deleteBtn);
  menuContainer.appendChild(newMenuItem);
});