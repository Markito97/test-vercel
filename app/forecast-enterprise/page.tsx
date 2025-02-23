import { ForecastEnterpriseBenefits } from "@/components/ui/forecast-enterprise/forecast-enterprice-benefits";
import { ForecastEnterpriseInfo } from "@/components/ui/forecast-enterprise/forecast-enterprise-info";
import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import Image from "next/image";

const comicNeue = Comic_Neue({
    weight: ['400', '700'],
    subsets: ['latin',],
});

export const metadata: Metadata = {
    title: "Прогноз электропотребления предприятия",
    description: 'В составе программы «ЭнергоБИТ» находится модуль с использованием искусственного интеллекта для прогнозирования электропотребления предприятием на заданный период времени. ',
    keywords: 'прогноз, часы пик, уменьшение затрат, электроэнергия, мощность'
};

export default function ForecastEnterprise() {
    return <div>
        <main className="relative min-h-screen">
            <section className="relative -mt-[65px] pb-14 md:pb-24">
                <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
                    <div className="text-left mb-12">
                        <h2 className={`${comicNeue.className} text-3xl font-bold text-brand lg:text-4xl`}>
                            Прогноз электропотребления предприятия
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <ForecastEnterpriseInfo />
                    </div>
                    <div className='mt-8'>
                        <ForecastEnterpriseBenefits />
                    </div>
                    <div className="mt-8 flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <h3 className={`${comicNeue.className} text-xl font-bold`}>
                            Как это работает
                        </h3>
                        <div className="flex justify-between">
                            <p>
                                На основе статистических данных за прошлые периоды в программе «ЭнергоБИТ» Вы сможете спрогнозировать объем потребления электроэнергии при плановом изменении объема производства
                            </p>
                            <Image
                                src='/image (1).png'
                                width={500}
                                height={300}
                                alt="Изображение не найдено"
                            />
                        </div>
                        <div className="flex justify-between">
                            <Image
                                src='/image (1).png'
                                width={500}
                                height={300}
                                alt="Изображение не найдено"
                            />
                            <p>
                                Имея спрогнозированные цены на электроэнергию и объемы потребления можно рассчитать затраты на предстоящие периоды
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
}





