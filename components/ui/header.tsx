import { Button } from "./button"
import { Logo } from "./logo"
import { LogoText } from "./logo-text"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./navigation-menu"
import Link from "next/link"
import React from "react"
import { ListItem } from "./list-item"
import { Menu } from "lucide-react"


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Калькулятор ценовых категорий",
        href: "/price-calculator",
        description: "Программа, которая определяет оптимальную ценовую категорию для оплаты электроэнергии на предприятии.",
    },
    {
        title: "Прогноз часов пиковой нагрузки",
        href: "/forecast-peak-hours",
        description: "Модуль предсказание времени, когда энергопотребление достигает максимума в течение дня, недели или другого периода.",
    },
    {
        title: "Прогноз электропотребления предприятия",
        href: "/forecast-enterprise",
        description: "Модуль предсказание объёма электроэнергии, который предприятие будет использовать за определённый период (час, день, неделя и т.д.).",
    },
    {
        title: "Прогнозирования цен на электроэнергию и мощность",
        href: "/docs/primitives/scroll-area",
        description: "Модуль предсказания стоимости электроэнергии и доступной мощности на рынке или для конкретного потребителя в будущем.",
    },
    {
        title: 'Монитор пользователя',
        href: "/user-monitor",
        description: 'Модуль который позволяет каждому настроить удобную панель управления с виджетами энергопотребления. Показатели доступны в реальном времени, с гибкими графиками и настройками под ваши задачи.'
    }
]


export const Header = () => {
    return <header className="sticky top-0 z-40 transform shadow-md p-3">
        <div className="absolute inset-0 h-full w-full bg-background/90 dark:bg-background/95 !opacity-100 transition-opacity"></div>
        <nav className="relative z-40 border-default border-b backdrop-blur-sm transition-opacity">
            <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
                <div className="flex items-center px-6 lg:px-0 flex-1 justify-between">
                    <Link href='/' className='flex items-center cursor-pointer'>
                        <Logo />
                        <LogoText />
                    </Link>
                    <NavigationMenu className="relative z-10 flex-1 items-center justify-center hidden pl-8 sm:space-x-4 lg:flex h-16">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Компоненты</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/pricing" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        О компании
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/pricing" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Контакты
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div>
                        <Button className="bg-brand">
                            Заказать обратный звонок
                        </Button>
                    </div>
                </div>
                <div className="inset-y-0 flex mr-2 items-center px-4 lg:hidden">
                    <Button variant='ghost'>
                        <Menu absoluteStrokeWidth />
                    </Button>
                </div>
            </div>
        </nav>
    </header>
}

