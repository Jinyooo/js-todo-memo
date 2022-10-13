//입력값 받아와서 리스트로 작성
//받아올 때 체크박스, 텍스트, x버튼 생성

const todoInput = document.querySelector("#memo-form input");
const todoButton = document.querySelector("#todo-button");
const todoBoard = document.querySelector("#todo-board");

//투두 버튼을 누르면(이벤트) 입력값 리스트로 작성 
todoButton.addEventListener("click", todoWrite);

function todoWrite() {
    // 필요한 변수들 생성 - 리스트 > 체크박스, 텍스트, 버튼
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const button = document.createElement("button");
    const text = document.createTextNode(todoInput.value);

    // 입력값을 투두 보드에 리스트로 작성하기
    todoBoard.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(text);
    li.appendChild(button);

    // X버튼 만들기
    button.textContent = "X";
    button.addEventListener("click",todoDelete)

    //checkbox 체크하면 색 변화주기
    checkBox.addEventListener("click",todoDone)

    // 입력값 초기화
    todoInput.value = "";
}

function todoDone(event) {
    if (event.target.checked) {
        event.target.parentNode.style.color = "lightgrey";
    }
    else {
        event.target.parentNode.style.color = "black";
    }
}

function todoDelete(event) {
    // x버튼의 부모요소 통해 삭제
    event.target.parentNode.remove();
}