import React from "react";
import {DatePicker, notification} from "antd";
import LocaleText, {LocaleLanguage} from "@/utils/locale_util";

const {RangePicker} = DatePicker;

type DateRangePickerProps = {
    locale: LocaleLanguage;
    onDateIsSelected?: (dateFrom: string, dateTo: string) => void
}

export function DateRangePicker(props: DateRangePickerProps) {
    const [notificationInstance, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (dateFrom: string, dateTo: string) => {
        notificationInstance["success"]({
            message: "Success",
            description: `${dateFrom}, ${dateTo}`,
        });
    };
    const datesAreSelected = (dateFrom: string, dateTo: string) => {
        console.log(`Date From ${dateFrom}, DateTo: ${dateTo}`);
        if (dateFrom && dateTo && dateFrom.length > 0 && dateTo.length > 0 && props.onDateIsSelected) {
            openNotificationWithIcon(dateFrom, dateTo);
            props.onDateIsSelected(dateFrom, dateTo);
            console.log("Called callback from DateRangePicker");
        }
    };

    return <div>
        <p>{LocaleText[props.locale].text.choseDateText}</p>

        <RangePicker allowClear bordered size={"large"}
                     onCalendarChange={(dates, dateStrings: [string, string], info) => {
                         datesAreSelected(dateStrings[0], dateStrings[1]);
                         console.log(dates);
                         console.log(info);
                     }}
        />

        {contextHolder}
    </div>;
}