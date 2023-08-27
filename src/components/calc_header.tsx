import React from "react";
import LocaleText, {LocaleLang, LocaleLanguage} from "@/utils/locale_util";

type CalcHeaderProps = {
    locale: LocaleLanguage;
}

export const CalcHeader: React.FC<CalcHeaderProps> = (props: CalcHeaderProps) => {
    const locale: LocaleLang = LocaleText[props.locale];
    return (
        <>
            <h3>{locale.text.mainHeader}</h3>
        </>
    );
};