import { ForecastPeakHoursBenefits } from "@/components/ui/forecast-peak-hours/forecast-peak-hours-benefits";
import { ForecastPeakHoursChart } from "@/components/ui/forecast-peak-hours/forecast-peak-hours-chart";
import { ForecastPeakHoursInfo } from "@/components/ui/forecast-peak-hours/forecast-peak-hours-info";
import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
    weight: ['400', '700'],
    subsets: ['latin',],
});

export const metadata: Metadata = {
    title: "Прогноз часов пиковых нагрузок на электроэнергию и мощность",
    description: 'С помощью программы «ЭнергоБИТ» мы предлагаем эффективный способ уменьшения затрат на оплату электроэнергии и мощности – высокоточный прогноз пиковых нагрузок.',
    keywords: 'прогноз, часы пик, уменьшение затрат, электроэнергия, мощность'
};

export default function ForecastPeakHours() {
    return <div>
        <main className="relative min-h-screen">
            <section className="relative -mt-[65px] pb-14 md:pb-24">
                <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
                    <div className="text-left mb-12">
                        <h2 className={`${comicNeue.className} text-3xl font-bold text-brand lg:text-4xl`}>
                            Прогноз часов пиковых нагрузок на электроэнергию и мощность
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <ForecastPeakHoursInfo />
                    </div>
                    <div className='mt-8'>
                        <ForecastPeakHoursBenefits/>
                    </div>
                    <div className='mt-8'>
                        <ForecastPeakHoursChart/>
                    </div>
                </div>
            </section>
        </main>
    </div>
}





