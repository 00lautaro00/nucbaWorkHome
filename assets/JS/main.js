import { getAll, getIds, getImpar, getPrices } from "./buttons.js";
import { getFunctions, getPizzaForId } from "./getFuntcions.js";
import { menu } from "./models/menu.js";

let ids = []
let show = false

const Button = document.querySelectorAll("button");
const ul = document.querySelector('.list');
const form = document.querySelector("form");

Button.forEach(btn=>{
    btn.addEventListener("click", (e) => {
        const value = getFunctions(e,ids,menu,getImpar,ul,btn,getPrices,getAll,show);
        show = !value
    })
})

form.addEventListener("submit", (e) => getPizzaForId(e,menu,form,ids, getIds));

