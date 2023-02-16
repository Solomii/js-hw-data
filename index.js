"use strict";

const handlerBtn = ({
    target: {
        parentElement: parent,
        dataset: { direction },
    },
}) => {
    const boxBtnDir = parent.nextElementSibling;
    boxBtnDir.style.flexDirection = direction;
};

const btnsDataAttribute = document.querySelectorAll(
    "#box-data-attribute>button"
);
const boxDirection = document.getElementById("box-btns-direction");

boxDirection.style.display = "flex";

for (const btn of btnsDataAttribute) {
    btn.addEventListener("click", handlerBtn);
    btn.style.padding = "20px";
    btn.style.margin = "5px";
    btn.style.border = "1px solid #50c4f1";
}
