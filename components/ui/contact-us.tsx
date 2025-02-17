import { Roboto } from "next/font/google"
import { Button } from "./button"

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['cyrillic']
})

export const ContactUs = () => {
    return <div className="grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16 border-none">
        <div className="col-span-12">
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
}