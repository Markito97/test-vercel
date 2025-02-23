import { Roboto } from "next/font/google"
import { Button } from "./button"

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['cyrillic']
})

export const ContactUs = () => {
    return <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
        <div className="py-12 bg-white rounded-md shadow-xl">
            <div className="col-span-12 text-center">
                <h2 className={`${roboto.className} text-3xl font-bold text-brand lg:text-4xl`}>
                    Свяжитесь с нами чтобы обсудить ваш проект
                </h2>
            </div>
            <div className="flex items-center justify-center gap-2 col-span-12 mt-4">
                <Button className="bg-brand">
                    Обсудить ваш проект
                </Button>
                <Button variant='outline'>
                    Демо доступ
                </Button>
            </div>
        </div>
    </div>
}