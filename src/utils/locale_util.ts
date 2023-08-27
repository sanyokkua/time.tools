export type LocaleLanguage = "en" | "uk";
export type LocaleDayKeys = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
export type LocaleMonthKeys =
    "january"
    | "february"
    | "march"
    | "april"
    | "may"
    | "june"
    | "july"
    | "august"
    | "september"
    | "october"
    | "november"
    | "december";


export type LocaleLangDayNode = {
    [key in LocaleDayKeys]: string;
}

export type LocaleLangMonthNode = {
    [key in LocaleMonthKeys]: string;
}

export type LocaleLang = {
    text: {
        mainHeader: string,
        choseDateText: string,
        haveBeenChosen: string,
        startDate: string,
        endDate: string,
        amountTotalDays: string,
        amountWorkingDays: string,
        amountWeekends: string,
        amountMonths: string,
        days: string,
        decades: string,
        years: string,
        months: string,
        weeks: string,
        hours: string,
        minutes: string
    },
    days: LocaleLangDayNode,
    months: LocaleLangMonthNode
}

export type LocaleTextType = {
    [key in LocaleLanguage]: LocaleLang
}

const LocaleText: LocaleTextType = {
    "en": {
        text: {
            mainHeader: "Days Calculator",
            choseDateText: "Chose begin and end dates",
            haveBeenChosen: "Have been chosen next values:",
            startDate: "Start date",
            endDate: "End Date",
            amountTotalDays: "Total amount of days between dates",
            amountWorkingDays: "Amount of working days",
            amountWeekends: "Amount of weekends",
            amountMonths: "Amount of months",
            days: "Days",
            decades: "Decades",
            years: "Years",
            months: "Months",
            weeks: "Weeks",
            hours: "Hours",
            minutes: "Minutes",
        },
        days: {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday",
        },
        months: {
            january: "January",
            february: "February",
            march: "March",
            april: "April",
            may: "May",
            june: "June",
            july: "July",
            august: "August",
            september: "September",
            october: "October",
            november: "November",
            december: "December",
        },
    },
    "uk": {
        text: {
            mainHeader: "Калькулятор днів",
            choseDateText: "Виберіть дату початку та кінцеву дату",
            haveBeenChosen: "Було обрано:",
            startDate: "Дата початку",
            endDate: "Дата кінця",
            amountTotalDays: "Загальна кількість днів між датами",
            amountWorkingDays: "Кількість робочих днів",
            amountWeekends: "Кількість вихідних днів",
            amountMonths: "Кількість місяців",
            days: "Днів",
            decades: "Декад",
            years: "Років",
            months: "Місяців",
            weeks: "Тижнів",
            hours: "Годин",
            minutes: "Хвилин",
        },
        days: {
            monday: "Понеділок",
            tuesday: "Вівторок",
            wednesday: "Середа",
            thursday: "Четвер",
            friday: "ятниця",
            saturday: "Субота",
            sunday: "Неділя",
        },
        months: {
            january: "Січень",
            february: "Лютий",
            march: "Березень",
            april: "Квітень",
            may: "Травень",
            june: "Червень",
            july: "Липень",
            august: "Серпень",
            september: "Вересень",
            october: "Жовтень",
            november: "Листопад",
            december: "Грудень",
        },
    },
};

export default LocaleText;