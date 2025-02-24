import { ForecastPricesSchemaIcon } from "@/components/icons/forecast-prices-schema-icon";
import { ForecastPricesInfo } from "@/components/ui/forecast-prices/forecast-prices-info";
import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import Image from "next/image";

const comicNeue = Comic_Neue({
    weight: ['400', '700'],
    subsets: ['latin',],
});

export const metadata: Metadata = {
    title: "Прогноз цен на электроэнергию и мощность",
    description: 'С помощью модуля искусственного интеллекта программы «ЭнергоБИТ» специалисты Вашего предприятия смогут спрогнозировать стоимость на электроэнергию и мощность, используя данные о ценах за предыдущие периоды. Погрешность прогноза не превышает 5%',
    keywords: 'прогноз, часы пик, уменьшение затрат, электроэнергия, мощность'
};

export default function ForecastPeakHours() {
    return <div>
        <main className="relative min-h-screen">
            <section className="relative -mt-[65px] pb-14 md:pb-24">
                <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
                    <div className="text-left mb-12">
                        <h2 className={`${comicNeue.className} text-3xl font-bold text-brand lg:text-4xl`}>
                        Прогноз цен на электроэнергию и мощность
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <ForecastPricesInfo />
                    </div>
                    <div className="mt-8 flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <h3 className={`${comicNeue.className} text-xl font-bold`}>
                            Как это работает
                        </h3>
                        <ForecastPricesSchemaIcon />
                        <h3 className={`${comicNeue.className} text-xl font-bold`}>
                            Прогнозируемая цена на электроэнергию
                        </h3>
                        <Image
                            src='/Снимок экрана 2025-02-23 в 19.47.31.png'
                            width={1000}
                            height={500}
                            alt="Прогнозируемые цены на электроэнергию"
                        />
                    </div>
                </div>
            </section>
        </main>
    </div>
}





