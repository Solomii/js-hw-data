"use strict";

const handlerBtn = ({
    target: {
        parentElement: parent,
        dataset: { direction },
    },
}) => {
    console.log(direction);
    const boxBtnDir = parent.nextElementSibling;
    boxBtnDir.style.flexDirection = direction;
};

const btns = document.querySelectorAll("#data-btn-directon>button");

for (const btn of btns) {
    btn.addEventListener("click", handlerBtn);
}
