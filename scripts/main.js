import * as def from "./functions.js";
let today = def.getActualDate();
let payday = def.getNextPayDay(today);
let workdays = def.workDays(today, payday);
let classdays = def.dayWeekCounterBetweenTwoDates(today,payday,1); // MUDAR TERCEIRO ARGUMENTO QUE É A DATA.
let jobdays = workdays - classdays

const startmonth = def.startMonth()
const workdaysC = def.workDays(startmonth,payday)
const classdaysC = def.dayWeekCounterBetweenTwoDates(startmonth,payday,1)
let jobdaysC = workdaysC - classdaysC


let qtds = document.querySelectorAll(".inputQTD")
let tickets = document.querySelectorAll('.inputValue')
let inputs = document.querySelectorAll('input');
let outputs = document.querySelectorAll('.output')
let totals = document.querySelectorAll('.total')

inputs.forEach(input => {
    input.addEventListener('change', function() {
        outputs.forEach( (output, x) => {
            outputs[x].innerHTML = (qtds[x].value) * (tickets[x].value)
            })
        totals[0].innerHTML = Number(outputs[0].innerHTML)*jobdays +  classdays*Number(outputs[2].innerHTML)
        totals[1].innerHTML = Number(outputs[1].innerHTML)*jobdays +  classdays*Number(outputs[3].innerHTML)
        totals[2].innerHTML = Number(outputs[0].innerHTML)*jobdaysC +  classdaysC*Number(outputs[2].innerHTML)
        totals[3].innerHTML = Number(outputs[1].innerHTML)*jobdaysC +  classdaysC*Number(outputs[3].innerHTML)
        /*totals.forEach((value, x ) => {
            totals[x].innerHTML = 
        })*/
    });
  });