

let offer__item = document.querySelectorAll(".dn")
let offer__item__btn = document.querySelectorAll(".catalog__header__filters__item__text")


for (let i = 0; i < offer__item__btn.length ; i++){
    offer__item__btn[i].onclick = function() {
        console.log(1)
        offer__item.classList.toggle("catalog__header__filters__item__offers")
    }
}

const items__header = document.querySelector(".header__nav__items")
const button__header = document.querySelector(".header__nav__btn")
const link__header = document.querySelectorAll(".header__nav__link")
const body = document.querySelector(".body")

function burger(){
    items__header.classList.toggle("header__nav__items__click")
    button__header.classList.toggle("header__nav__btn__click")
    // link__header.classList.toggle("header__nav__link__click")
    body.classList.toggle("body__burger")
}