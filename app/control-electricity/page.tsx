import { ControlElectricityInfo } from "@/components/ui/control-electricity/control-electricity-info";
import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
    weight: ['400', '700'],
    subsets: ['latin',],
});

export const metadata: Metadata = {
    title: 'Учет, анализ и контроль потребления электроэнергии на предприятии.',
    description: 'Программа «ЭнергоБИТ» обеспечивает интеграцию с интеллектуальными системами учета электроэнергии, анализ и управление энергопотреблением на предприятии. Вы сможете отследить центры затрат на энергоресурсы и принять меры к сокращению расходов на электроэнергию.',
    keywords: 'прогноз, часы пик, уменьшение затрат, электроэнергия, мощность'
};

export default function ElectricityManagement() {
    return <div>
        <main className="relative min-h-screen">
            <section className="relative -mt-[65px] pb-14 md:pb-24">
                <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
                    <div className="text-left mb-12">
                        <h2 className={`${comicNeue.className} text-3xl font-bold text-brand lg:text-4xl`}>
                            Учет, анализ и контроль потребления электроэнергии на предприятии.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <ControlElectricityInfo />
                    </div>
                </div>
            </section>
        </main>
    </div>
}





