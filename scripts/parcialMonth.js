import * as def from "./functions.js";
let today = def.getActualDate();
let payday = def.getNextPayDay(today);
let workdays = def.workDays(today, payday);
let classdays = def.dayWeekCounterBetweenTwoDates(today,payday,1); // MUDAR TERCEIRO ARGUMENTO QUE É A DATA.

