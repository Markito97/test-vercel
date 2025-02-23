import { ElectricityManagementInfo } from "@/components/ui/electricity-management/electricity-management";
import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
    weight: ['400', '700'],
    subsets: ['latin',],
});

export const metadata: Metadata = {
    title: "Управление спросом на электроэнергию",
    description: 'Для определения процента скидки для предприятия Вы оперативно сможете предоставить системному оператору график базовой нагрузки за последние 10 дней. И далее отчеты об энергопотреблении, на основании которого системный оператор сможет оценить в какие часы и в каком размере был снижен объем потребления электроэнергии.',
    keywords: 'прогноз, часы пик, уменьшение затрат, электроэнергия, мощность'
};

export default function ElectricityManagement() {
    return <div>
        <main className="relative min-h-screen">
            <section className="relative -mt-[65px] pb-14 md:pb-24">
                <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
                    <div className="text-left mb-12">
                        <h2 className={`${comicNeue.className} text-3xl font-bold text-brand lg:text-4xl`}>
                            Управление спросом на электроэнергию
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <ElectricityManagementInfo />
                    </div>
                </div>
            </section>
        </main>
    </div>
}





