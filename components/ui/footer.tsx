import { BitIcon } from "../icons/bit-icon"
import { Logo } from "./logo"
import { LogoText } from "./logo-text"

export const Footer = () => {
    return <footer className="bg-brand">
        <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 py-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8 xl:col-span-1">
                    <div className="flex items-center">
                        <Logo />
                        <LogoText />
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="flex items-center">
                            <h6 className="text-white text-foreground overwrite text-base font-bold">Услуги</h6>
                        </div>
                        <div className="flex items-center">
                            <h6 className="text-white text-foreground overwrite text-base font-bold">Ценовой калькулятор</h6>
                        </div>
                        <div className="flex items-center">
                            <h6 className="text-white text-foreground overwrite text-base font-bold">О компании</h6>
                        </div>
                        <div className="flex items-center">
                            <h6 className="text-white text-foreground overwrite text-base font-bold">Контакты</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-second-brand rounded-md p-4 mt-12">
                <BitIcon />
                <p className="mt-6 text-sm text-gray-700">
                    Компания ООО «БИТ» является разработчиком расчетно-информационных комплексов и программ, созданных для автоматизации бизнес-процессов в сфере ЖКХ.
                </p>
                <p className="mt-6 text-sm text-gray-700">
                    © 2009-2025, г. Ярославль
                </p>
            </div>
        </div>

    </footer>
}

