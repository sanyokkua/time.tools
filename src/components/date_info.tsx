import React from "react";
import {LocalDate} from "@js-joda/core";
import {Card} from "antd";
import LocaleText, {LocaleDayKeys, LocaleLang, LocaleLanguage, LocaleMonthKeys} from "@/utils/locale_util";

type DateInfoProps = {
    locale: LocaleLanguage;
    date: string;
    title: string;
}


export const DateInfo: React.FC<DateInfoProps> = (props: DateInfoProps) => {
    const locale: LocaleLang = LocaleText[props.locale];

    const localDate: LocalDate = LocalDate.parse(props.date || "");
    const dayOfWeekKey: string = localDate.dayOfWeek().name().toLowerCase();
    const monthOfTheYear: string = localDate.month().name().toLowerCase();

    const dayName: string = locale.days[dayOfWeekKey as LocaleDayKeys];
    const monthName: string = locale.months[monthOfTheYear as LocaleMonthKeys];

    return (
        <>
            <Card title={props.title} style={{width: 300}}>
                <p>{dayName} {localDate.dayOfMonth()} {monthName}</p>
                <p>{localDate.year()}</p>
            </Card>
        </>
    );
};