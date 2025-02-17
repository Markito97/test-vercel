import { Button } from "./button"
import { Logo } from "./logo"
import { LogoText } from "./logo-text"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./navigation-menu"
import Link from "next/link"

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
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Услуги
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/price-calculator" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Ценовой калькулятор
                                    </NavigationMenuLink>
                                </Link>
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
                <div className="inset-y-0 flex mr-2 items-center px-4 lg:hidden"></div>
            </div>
        </nav>
    </header>
}