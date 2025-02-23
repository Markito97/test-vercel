import { EnergySimulationChart } from "@/components/ui/energy-simulation/EnergySimulationChart";
import { EnergySimulationInfo } from "@/components/ui/energy-simulation/EnergySimulationInfo";
import { EnergySimulationTable } from "@/components/ui/energy-simulation/EnergySimulationTable";
import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
    weight: ['400', '700'],
    subsets: ['latin',],
});

export const metadata: Metadata = {
    title: "Моделирование энергопотребления",
    description: 'Программа «ЭнергоБИТ» помогает перераспределить невыбранные объёмы потребления электроэнергии в часы пиковой нагрузки региона на другие периоды, с заданными условиями и рассчитывает экономический эффект.',
    keywords: 'прогноз, часы пик, уменьшение затрат, электроэнергия, мощность'
};

export default function EnergySimulation() {
    return <div>
        <main className="relative min-h-screen">
            <section className="relative -mt-[65px] pb-14 md:pb-24">
                <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
                    <div className="text-left mb-12">
                        <h2 className={`${comicNeue.className} text-3xl font-bold text-brand lg:text-4xl`}>
                            Моделирование энергопотребления
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <EnergySimulationInfo />
                    </div>
                    <div className="mt-8">
                        <h3 className={`${comicNeue.className} text-2xl font-bold text-brand`}>
                            Удобный инструмент для выбора условий моделирования энергопотребления
                        </h3>
                    </div>
                    <div className="mt-8 flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <h3 className={`${comicNeue.className} text-xl font-bold`}>
                            Как это работает
                        </h3>
                        <EnergySimulationChart />
                        <h3 className={`${comicNeue.className} text-xl font-bold`}>
                            «Расчёт эффективности снижения мощности в часы пиковой нагрузки». 1 точка учета. Снижение нагрузки на 15% ЧП
                        </h3>
                        <EnergySimulationTable />
                    </div>
                </div>
            </section>
        </main>
    </div>
}





