import { UserMonitorInfo } from "@/components/ui/user-monitor/UserMonitorInfo";
import { UserMonitorSlider } from "@/components/ui/user-monitor/UserMonitorSlider";
import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import Image from "next/image";

const comicNeue = Comic_Neue({
    weight: ['400', '700'],
    subsets: ['latin',],
});

export const metadata: Metadata = {
    title: 'Монитор пользователя',
    description: 'В программе реализован модуль «Монитор пользователя», с помощью которого каждый пользователь может настроить свой рабочий стол, добавив туда виджеты, отчёты и диаграммы, необходимые для выполнения своих задач.',
    keywords: 'прогноз, часы пик, уменьшение затрат, электроэнергия, мощность'
};

export default function ElectricityManagement() {
    return <div>
        <main className="relative min-h-screen">
            <section className="relative -mt-[65px] pb-14 md:pb-24">
                <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
                    <div className="text-left mb-12">
                        <h2 className={`${comicNeue.className} text-3xl font-bold text-brand lg:text-4xl`}>
                            Монитор пользователя
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <UserMonitorInfo />
                    </div>
                    <div className="mt-8 flex flex-col gap-8 p-8 bg-white rounded-md shadow-xl">
                        <UserMonitorSlider/>
                        {/* <Image
                            src="/all.png"
                            width={1000}
                            height={100}
                            alt="Мониторы пользователя"
                            /> */}
                    </div>
                </div>
            </section>
        </main>
    </div>
}





