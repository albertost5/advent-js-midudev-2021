function daysToXmas(date) {
    const xmasDate = new Date('Dec 25, 2021').getTime();
    const ms = xmasDate - date.getTime();
    const days = ms / (1000*60*60*24);
    return Math.ceil(days);
}

// const date = new Date('Dec 25, 2021')
// console.log(daysToXmas(date)) // 0
// const date1 = new Date('Dec 26, 2021')
// console.log(daysToXmas(date1)) // -1
// const date2 = new Date('Dec 31, 2021')
// console.log(daysToXmas(date2)) // -6
// const date3 = new Date('Jan 1, 2022 00:00:01')
// console.log(daysToXmas(date3)) // -7
// const date4 = new Date('Jan 1, 2022 23:59:59')
// console.log(daysToXmas(date4)) // -7
// const date5 = new Date('Dec 1, 2021')
// console.log(daysToXmas(date5)) // 24
// const date6 = new Date('Dec 24, 2021 00:00:01')
// console.log(daysToXmas(date6)) // 1
// const date7 = new Date('Dec 24, 2021 23:59:59')
// console.log(daysToXmas(date7)) // 1
// const date8 = new Date("December 20, 2021 03:24:00")
// console.log(daysToXmas(date8)) // 5

