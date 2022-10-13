const memoBoard = document.querySelector("#memo-board");

const memoForm = document.querySelector("#memo-form");
const memoInput = document.querySelector("#memo-form input");

const saveMemo = ["미리 만들어진 메모입니다", "미리 만들어진 메모입니다2", "미리 만들어진 메모입니다3",
                "미리 만들어진 메모입니다4"]
//const memoform = [
//    {memo: }
//]

for (let m of saveMemo) {
    let memo = document.createElement("div");
    memoBoard.appendChild(memo);
    memo.innerHTML = m;
}

function memoFormSubmit(event) {
    event.preventDefault();
    console.log(memoInput.value);

    
    let memo = document.createElement("div");

    memoBoard.appendChild(memo);
    memo.innerHTML = memoInput.value;
    memoInput.value = "";

    console.dir(memoInput); // memoInput에 있는 속성값을 확인? 왜 ?
    memoInput.autofocus = true;
    
}
memoForm.addEventListener("submit", memoFormSubmit);