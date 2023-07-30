function getActualDate() {
    let base = new Date();
    return new Date(base.getFullYear(), base.getMonth(), base.getDate());
}

function getNextPayDay(input) {
    let payday = new Date(input.getFullYear(), input.getMonth(), 25)

    if (input >= payday) {
        payday.setMonth(payday.getMonth() + 1)
    }

    return payday
}

function workDays(s,e) {
    let workDaysCount = 0
    let start = structuredClone(s)
    let end = structuredClone(e) 
    while (start <= end) {
        if (start.getDay() > 0 && start.getDay() < 6) {
            workDaysCount++
        }
        start.setDate(start.getDate() + 1)
    }
    return workDaysCount
}

function startMonth() {
    let date = new Date()
    let startMonth = new Date(date.getFullYear(), date.getMonth(), 26)
    if (startMonth > date) {
        startMonth.setMonth(date.getMonth() - 1)
    }
    return startMonth
}

function dayWeekCounterBetweenTwoDates(s, e, day) {
    let daysCount = 0
    let start = structuredClone(s)
    let end = structuredClone(e)

    while (start < end) {
        if (start.getDay() == day) {
            daysCount++
        }
        start.setDate(start.getDate() + 1)
    }
    return daysCount

}

function refill(total, saldo) {
    if (total > saldo) {
        return total - saldo
    }
    if (saldo >= total) {
        return "Valor Suficiente até o proximo pagamento."
    }
}

function formattedDate(date) {
    year = date.getFullYear();
    month = date.getMonth()+1;
    day = date.getDate();
    
    if (month < 10 ) {
        month = "0"+month
    }
    if ( day < 10 ) {
        day = "0"+day
    }
    return `${year}/${month}/${day}`
}

function refresh() {
    dayWeek = document.getElementById("phDayWeek").value
    document.getElementById("phSenacDays").innerHTML = "Dias no SENAC:  "+dayWeekCounterBetweenTwoDates(today,nextPayDay,dayWeek)
}

export {
    getActualDate,
    getNextPayDay,
    workDays,
    dayWeekCounterBetweenTwoDates,
    startMonth
}