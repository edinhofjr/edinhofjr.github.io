import * as def from "./functions.js"
const startmonth = def.startMonth()
const payday = def.getNextPayDay(def.getActualDate())
const workdays = def.getNextPayDay(startmonth,payday)
const classdays = def.dayWeekCounterBetweenTwoDates(startmonth,payday,1)
