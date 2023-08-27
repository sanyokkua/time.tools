import React from "react";
import {DayOfWeek, Duration, LocalDate, LocalDateTime, LocalTime, Period} from "@js-joda/core";
import {Table} from "antd";
import LocaleText, {LocaleLang, LocaleLanguage} from "@/utils/locale_util";

type ResultViewProps = {
    locale: LocaleLanguage;
    dateFrom?: string;
    dateTo?: string;
}

export const ResultView: React.FC<ResultViewProps> = (props: ResultViewProps) => {
    const locale: LocaleLang = LocaleText[props.locale];

    const localDateFrom = LocalDate.parse(props.dateFrom || "");
    const localDateTo = LocalDate.parse(props.dateTo || "");
    const localDateTimeFrom: LocalDateTime = LocalDateTime.of(localDateFrom, LocalTime.MIDNIGHT);
    const localDateTimeTo: LocalDateTime = LocalDateTime.of(localDateTo, LocalTime.MIDNIGHT);

    const duration: Duration = Duration.between(localDateTimeFrom, localDateTimeTo);
    const period: Period = Period.between(localDateFrom, localDateTo);

    const yearsCounter: number = period.toTotalMonths() / 12;
    const monthsCounter: number = period.toTotalMonths();
    const weeksCounter: number = duration.toDays() / 7;
    const daysCounter: number = duration.toDays();
    const decadesCounter: number = yearsCounter / 10;

    let currentDate = localDateTimeFrom;
    let counterOfWeekDays: number = 0;
    let counterOfWeekendDays: number = 0;
    while (currentDate.isBefore(localDateTimeTo) || currentDate.isEqual(localDateTimeTo)) {
        if (currentDate.dayOfWeek() != DayOfWeek.SATURDAY && currentDate.dayOfWeek() != DayOfWeek.SUNDAY) {
            counterOfWeekDays++;
        } else {
            counterOfWeekendDays++;
        }
        currentDate = currentDate.plusDays(1);
    }

    const totalNumberOfDays = `${Math.floor(daysCounter) + 1} ${locale.text.days}`;
    const totalNumberOfWorkingDays = `${Math.floor(counterOfWeekDays)} ${locale.text.days}`;
    const totalNumberOfWeekendDays = `${Math.floor(counterOfWeekendDays)} ${locale.text.days}`;
    const totalNumberOfMonths = `${Math.floor(monthsCounter)} ${locale.text.months}`;

    const dataSource = [
        {
            key: "1",
            text: locale.text.amountTotalDays,
            number: totalNumberOfDays,
        },
        {
            key: "2",
            text: locale.text.amountWorkingDays,
            number: totalNumberOfWorkingDays,
        },
        {
            key: "3",
            text: locale.text.amountWeekends,
            number: totalNumberOfWeekendDays,
        },
        {
            key: "4",
            text: locale.text.weeks,
            number: Math.floor(weeksCounter),
        },
        {
            key: "5",
            text: locale.text.amountMonths,
            number: totalNumberOfMonths,
        },
        {
            key: "6",
            text: locale.text.years,
            number: Math.floor(yearsCounter),
        },
        {
            key: "7",
            text: locale.text.decades,
            number: Math.floor(decadesCounter),
        },
    ];
    const columns = [
        {
            dataIndex: "text",
            key: "text",
        },
        {
            dataIndex: "number",
            key: "number",
        },
    ];

    return (
        <>
            <Table dataSource={dataSource} columns={columns} pagination={false}/>
        </>
    );
};