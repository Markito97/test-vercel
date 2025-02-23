import { PriceCalcChart } from "@/components/ui/price-calculator/price-calc-chart";
import { PricingOptimizationTable } from "@/components/ui/price-calculator/price-calc-optimization-table";
import { PriceCategoryBenefits } from "@/components/ui/price-calculator/price-category-benefits";
import { PriceCategoryCalculator } from "@/components/ui/price-calculator/price-category-calculator";
import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
  weight: ['400', '700'],
  subsets: ['latin',],
});

export const metadata: Metadata = {
  title: "Расчет ценовых категорий электроэнергии",
  description: 'Калькулятор ценовых категорий – программа, которая определяет ценовые категории электроэнергии для оплаты электроэнергии на предприятии и позволяет экономить от 5 % затрат на электроэнергию ежемесячно.',
  keywords: 'калькулятор, ценовая категория, программа'
};

export default function PriceCalculator() {
  return <div>
    <main className="relative min-h-screen">
      <section className="relative -mt-[65px]">
        <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
          <div className="text-left mb-12">
            <h2 className={`${comicNeue.className} text-3xl font-bold text-brand lg:text-4xl`}>
              Калькулятор ценовых категорий
            </h2>
          </div>
          <div className="flex flex-col gap-8 p-8 bg-white rounded-xl shadow-xl">
            <PriceCategoryCalculator />
          </div>
          <div className="mt-8">
            <PriceCategoryBenefits />
          </div>
          <div className="mt-8">
            <h3 className={`${comicNeue.className} text-2xl font-bold text-brand`}>
              Пример оптимизации ценовой категории
            </h3>
          </div>
          <div className="mt-8 flex flex-col gap-8 p-8 bg-white rounded-xl shadow-xl">
            <h4 className={`${comicNeue.className} text-xl font-bold`}>
              Сравнение расходов на электроэнергию по 3 и 1 ценовым категориям, (без НДС)
            </h4>
            <PricingOptimizationTable />
            <h4 className={`${comicNeue.className} text-xl font-bold`}>
              Затраты на электроэнергию
              снижены на 15%
            </h4>
            <PriceCalcChart />
          </div>
        </div>
      </section>
    </main>

  </div>
}





