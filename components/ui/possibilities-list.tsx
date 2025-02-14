import { CalcIcon } from "../icons/calc-icon"
import { ForecastPeakHourIcon } from "../icons/forecast-peak-hour-icon"
import { PossibilitiesBlock } from "./possibilities-block"


export const PossibilitiesList = () => {
    return <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 !pt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12">
        <PossibilitiesBlock
            title='Калькулятор ценовых категорий'
            description="программа, которая определяет оптимальную ценовую категорию для оплаты электроэнергии на предприятии и позволяет экономить от 5 % затрат на электроэнергию ежемесячно."
            icon={<CalcIcon />} />

        <PossibilitiesBlock
            title='Модуль прогнозов'
            description="Прогноз часов пиковой нагрузки, Прогноз электропотребления и управление спросом на рынке электроэнергии. Прогнозирования цен на электроэнергию и мощность"
            icon={<ForecastPeakHourIcon />}
        />

        <PossibilitiesBlock
            title='Моделирование электропотребления'
            description='Программа помогает перераспределить объёмы потребления в часы пиковой нагрузки региона на другие периоды.'
            icon={<ForecastPeakHourIcon />}
        />
    </div>
}