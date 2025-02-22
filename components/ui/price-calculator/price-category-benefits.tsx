import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
    weight: ['400', '700'],
    subsets: ['latin',],
});

export const PriceCategoryBenefits = () => {
    return <div>
        <h3 className={`${comicNeue.className} text-2xl font-bold text-brand`}>Что вы получаете</h3>
        <div className="mt-8 grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-5 bg-brand p-4 text-white rounded-md">
                Расчет ценовых категорий с учетом профиля потребления Вашего предприятия
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 bg-brand p-4 text-white rounded-md">
                Рекомендации по выбору оптимальной ценовой категории
            </div>
        </div>
    </div>
}