import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
    weight: ['400', '700'],
    subsets: ['latin',],
});

export const ForecastPeakHoursBenefits = () => {
return <div>
        <h3 className={`${comicNeue.className} text-2xl font-bold text-brand`}>Что вы получаете</h3>
        <div className="mt-8 grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4 bg-brand p-4 text-white rounded-md shadow-lg animate-in fade-in slide-in-from-bottom-10 duration-500">
                Прогноз часы пиковой нагрузки с максимально высокой точностью
            </div>
            <div className="col-span-12 lg:col-span-4 bg-brand p-4 text-white rounded-md shadow-lg animate-in fade-in slide-in-from-bottom-10 duration-500">
                Организация режима потребления энергоресурсов с учетом данных часов пиковых нагрузок
            </div>
            <div className="col-span-12 lg:col-span-4 bg-brand p-4 text-white rounded-md shadow-lg animate-in fade-in slide-in-from-bottom-10 duration-500">
                Уменьшение расходов на электроэнергию за отчетный период
            </div>
        </div>
    </div>
}