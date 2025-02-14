import { Blocks, Brain, ChartCandlestick, Monitor, PanelsTopLeft, RussianRuble, Sparkles, SquareStack, Wallet } from "lucide-react";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";

const whatYouGetList = [
    {
        icon: <Wallet color="#005fb8" size={48} />,
        text: 'Снижение затрат на оплату электроэнергии'
    },
    {
        icon: <Sparkles color="#005fb8" size={48} />,
        text: 'Повышение эффективности использования оборудования'
    },
    {
        icon: <Brain color="#005fb8" size={48} />,
        text: 'Повышение квалификации сотрудников'
    },
    {
        icon: <RussianRuble color="#005fb8" size={48} />,
        text: 'Возможность для заработка на рынке электроэнергии'
    },
    {
        icon: <ChartCandlestick color="#005fb8" size={48} />,
        text: 'Повышение эффективности использования ИСУ',
    },
    {
        icon: <PanelsTopLeft color="#005fb8" size={48} />,
        text: 'Простой и понятный интерфейс'
    },
    {
        icon: <Monitor color="#005fb8" size={48} />,
        text: 'Контроль потребления и качества электроэнергии'
    },
    {
        icon: <SquareStack color="#005fb8" size={48} />,
        text: 'Доработка функционала программы под потребности клиента',
    },
    {
        icon: <Blocks color="#005fb8" size={48} />,
        text: 'Интеграция программы с различными программами по автоматическому съему показаний с приборов учета'
    }
]

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic']
})


export const WhatYouGetList = () => {
    return (
        <section className="relative container mx-auto px-6 py-16 sm:py-18 md:py-24 lg:px-16 lg:py-24 xl:px-20 ">
            <div className="text-left mb-12">
                <h2 className={`${roboto.className} text-3xl font-bold text-brand lg:text-4xl`}>
                    Что вы получите с нашей системой
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Экономьте, повышайте производительность и расширяйте возможности бизнеса
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whatYouGetList.map((item) => (
                    <WhatYouGetListItem key={item.text} {...item} />
                ))}
            </div>
        </section>
    );
};

interface WhatYouGetListItemProps {
    icon: ReactNode
    text: string
}

export const WhatYouGetListItem = (props: WhatYouGetListItemProps) => {
    return (
        <div className="sm:h-[200px] text-center bg-white group relative w-full h-full flex flex-col gap-5 p-6 shadow-lg rounded-lg">
            <div className="flex justify-center">{props.icon}</div>
            <div className="text-lg font-medium">{props.text}</div>
        </div>
    );
};
