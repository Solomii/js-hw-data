"use strict";

const handlerBtn = ({ target }) => {
    // console.log(target.innerText)
    target.style.backgroundColor = target.innerText;
};

const btns = document.querySelectorAll("#wrapper>button");

for (const btn of btns) {
    btn.addEventListener("click", handlerBtn);
}
