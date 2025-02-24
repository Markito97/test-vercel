import { Roboto } from "next/font/google"
import { PossibilitiesBlock } from "./possibilities-block"
import { PriceCalculatorIcon } from "../icons/price-calculator-icon"
import { ForecastIcon } from "../icons/forecast-icon"
import { ForecastEnergyIcon } from "../icons/forecast-energy-icon"
import { ForecastPriceIcon } from "../icons/forecast-price-icon"
import { ConsumptionModificationIcon } from "../icons/consumption-modification-icon"
import { UserMonitorIcon } from "../icons/user-monitor-icon"


const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['cyrillic']
})


export const PossibilitiesList = () => {

    return <section className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 !pt-0">
        <div className="text-left mb-12">
            <h2 className={`${roboto.className} text-3xl font-bold text-brand lg:text-4xl`}>
                Компоненты программы
            </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12">
            <PossibilitiesBlock
                title='Калькулятор ценовых категорий'
                icon={<PriceCalculatorIcon />}
                href="/price-calculator"
                possibilities={['Расчет ценовых категорий', 'Рекомендации по выбору ценовой категории']}
            />
            <PossibilitiesBlock
                title='Прогноз часов пиковой нагрузки'
                icon={<ForecastIcon />}
                href="/forecast-peak-hours"
                possibilities={['Организация режима потребления', 'Уменьшение расходов на электроэнергию']}
            />
            <PossibilitiesBlock
                title='Прогноз электропотребления предприятия'
                icon={<ForecastEnergyIcon />}
                href="/forecast-enterprise"
                possibilities={['Прогноз объема потребления', 'Расчет затрат на электроэнергию', 'Предоставление скидки на оптовую цену']}
            />
            <PossibilitiesBlock
                title='Прогнозирования цен на электроэнергию и мощность'
                icon={<ForecastPriceIcon />}
                href="/forecast-prices"
                possibilities={['Грамотное составление бюджета','Погрешность прогноза до 5%']}
            />
            <PossibilitiesBlock
                title="Монитор пользователя"
                icon={<UserMonitorIcon/>}
                href="/user-monitor"
                possibilities={['100+ гибко настраиваемых виджетов', 'Данные в реальном времени']}
            />
            <PossibilitiesBlock
                title="Моделирование электропотребления"
                icon={<ConsumptionModificationIcon />}
                href="/energy-simulation"
                possibilities={['Перераспределение потребления из пиковых часов', 'Настройка правил потребления под инфраструктуру', 'Расчёт экономического эффекта']}
            />
        </div>
    </section>
}



