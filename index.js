"use strict";

const handlerBtn = ({
    target: {
        parentElement: parent,
        dataset: { direction},
    },
}) => {
    console.log(direction);
    const boxBtnDir = parent.nextElementSibling;
    boxBtnDir.style.flexDirection = direction;
};

const btns = document.querySelectorAll("#data-btn-direction>button");
const btnsDirTest = document.getElementById("box-btn-direction");

btnsDirTest.style.display="flex";

for (const btn of btns) {
    btn.addEventListener("click", handlerBtn);
    btn.style.padding = "20px";
    btn.style.border = "1px solid #50c4f1";
}
