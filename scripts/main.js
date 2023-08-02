import * as def from "./functions.js";
let today = def.getActualDate();
let dayweek = document.getElementById('dayweek')
let payday = def.getNextPayDay(today);
let workdays = def.workDays(today, payday);
let classdays = def.dayWeekCounterBetweenTwoDates(today, payday, dayweek.value); // MUDAR TERCEIRO ARGUMENTO QUE É A DATA.
let jobdays = workdays - classdays

dayweek.addEventListener("change", () => {
    classdaysC = def.dayWeekCounterBetweenTwoDates(startmonth, payday, dayweek.value)
    classdays = def.dayWeekCounterBetweenTwoDates(today, payday, dayweek.value)
    refresh()
})

const startmonth = def.startMonth()
const workdaysC = def.workDays(startmonth, payday)
let classdaysC = def.dayWeekCounterBetweenTwoDates(startmonth, payday, dayweek.value)
let jobdaysC = workdaysC - classdaysC


let qtds = document.querySelectorAll(".inputQTD")
let tickets = document.querySelectorAll('.inputValue')
let inputs = document.querySelectorAll('input');
let outputs = document.querySelectorAll('.output')
let totalParcial = document.querySelectorAll(".totalP")
let totalComplete = document.querySelectorAll(".total")


inputs.forEach(input => {
    input.addEventListener('change', refresh );
});

function refresh() {
    {
        outputs.forEach((output, x) => {
            outputs[x].innerHTML = (qtds[x].value) * (tickets[x].value)
        })
        totalParcial.forEach((element, i) => {
            element.innerHTML = Number(outputs[i].innerHTML) * jobdays + classdays * Number(outputs[i + 2].innerHTML)
        })
        totalComplete.forEach((element, i) => {
            element.innerHTML = Number(outputs[i].innerHTML) * jobdaysC + classdaysC * Number(outputs[i+2].innerHTML)
        })
    }
}