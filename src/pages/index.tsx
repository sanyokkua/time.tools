import React, {useState} from "react";
import {ConfigProvider, Layout, Space} from "antd";
import {DateRangePicker} from "@/components/date_range_picker";
import dayjs from "dayjs";
import type {Locale} from "antd/es/locale";
import ukUA from "antd/locale/uk_UA";
import "dayjs/locale/uk";
import {CalcHeader} from "@/components/calc_header";
import LocaleText, {LocaleLang, LocaleLanguage} from "@/utils/locale_util";
import {DateInfo} from "@/components/date_info";
import {ResultView} from "@/components/result_view";

dayjs.locale("uk");

const {Content} = Layout;

const Home: React.FC = () => {
    const appLocale: LocaleLanguage = "uk";
    const localeLang: LocaleLang = LocaleText[appLocale];

    const [locale, setLocal] = useState<Locale>(ukUA);
    const [dateFrom, setDateFrom] = useState<string>("");
    const [dateTo, setDateTo] = useState<string>("");

    return (
        <ConfigProvider locale={locale}>
            <Layout className="layout">
                <Content style={{padding: "0 50px"}}>

                    <CalcHeader locale={appLocale}/>

                    <DateRangePicker locale={appLocale} onDateIsSelected={(dateFrom, dateTo) => {
                        setDateFrom(dateFrom);
                        setDateTo(dateTo);
                    }}/>

                    {dateFrom.length > 0 && dateTo.length > 0 && <div>
                        <Space direction="horizontal" size={16}>
                            <DateInfo locale={appLocale} date={dateFrom} title={localeLang.text.startDate}/>
                            <DateInfo locale={appLocale} date={dateTo} title={localeLang.text.endDate}/>
                        </Space>

                        <ResultView locale={appLocale} dateFrom={dateFrom} dateTo={dateTo}/>
                    </div>}
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default Home;