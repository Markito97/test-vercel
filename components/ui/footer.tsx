import Link from "next/link"
import { BitIcon } from "../icons/bit-icon"
import { Logo } from "./logo"
import { LogoText } from "./logo-text"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic']
})

export const Footer = () => {
    return <footer className="bg-brand">
        <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 py-8">
            <div className="flex">
                <div className="mt-12 flex w-full justify-between">
                    <Link href='/' className="flex items-center">
                        <Logo />
                        <LogoText />
                    </Link>
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
            <div className="mt-12 text-white">
                <address className='flex flex-col gap-2'>
                    <strong className={`${roboto.className}`}>Адрес:</strong>
                    <p>150040, Россия, Ярославская обл., г. Ярославль, пр-т Ленина, д. 25, офис 503</p>
                    <strong className={`${roboto.className}`}>Телефоны:</strong>
                    <p>
                        <a href="tel:+7 (4852) 609-099">
                            +7 (4852) 609-099
                        </a>,
                        <a href="tel:+7 (903) 823-91-01">
                            +7 (903) 823-91-01
                        </a>
                    </p>
                    <strong className={`${roboto.className}`}>Принимаем звонки по будням</strong>
                    <p>с 08:30 до 17:30</p>
                    <strong className={`${roboto.className}`}>Вы также можете написать нам письмо:</strong>
                    <a href="mailto:info@bit76.ru">info@bit76.ru</a>
                </address>
            </div>

            <div className="bg-second-brand rounded-md p-4 mt-12">
                <BitIcon />
                <p className={`${roboto.className} mt-6 text-md text-gray-700 font-bold max-w-2xl`}>
                    Компания ООО «БИТ» является разработчиком расчетно-информационных комплексов и программ, созданных для автоматизации бизнес-процессов в сфере ЖКХ.
                </p>
                <p className="mt-6 text-sm text-gray-700 max-w-2xl">Используя этот сайт, вы даете согласие на использование файлов cookie на вашем устройстве в соответствии с Политикой обработки персональных данных.</p>
                <p className="mt-6 text-sm text-gray-700">
                    © 2009-2025, г. Ярославль
                </p>
            </div>
        </div>

    </footer>
}

