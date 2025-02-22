import { Button } from "@/components/ui/button";
import { Comic_Neue, Roboto } from "next/font/google";
import React from "react";
import { HeroMarquee } from "@/components/ui/hero-marquee";
import { PossibilitiesList } from "@/components/ui/possibilities-list";
import { WhatYouGetList } from "@/components/ui/what-you-get-list";
import { ReviewsList } from "@/components/ui/reviews-list";
import { ContactUs } from "@/components/ui/contact-us";


const comicNeue = Comic_Neue({
  weight: ['400', '700'],
  subsets: ['latin',],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic']
})


export default function Home() {
  return (
    <div>
      <main className="relative min-h-screen">
        <section
          className="relative -mt-[65px] pb-14 md:pb-24"
        >
          <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 pb-10 md:pt-16 overflow-hidden">
            <div className="relative">
              <div className="mx-auto">
                <div className="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center">
                  <div className="relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8">
                    <div className="flex flex-col items-center">
                      <h1
                        className={`${comicNeue.className} text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl`}
                      >
                        <span className="block text-foreground">
                          Энергобит
                        </span>
                        <span className="text-brand block md:ml-0">
                          Умное управление энергозатратами
                        </span>
                      </h1>
                      <p className={`${roboto.className} pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg`}>
                        Ваш надежный инструмент для оптимизации расходов на электроэнергию.
                        <br /> Благодаря передовым алгоритмам на базе искусственного интеллекта
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button className="bg-brand">
                        Заказать решение
                      </Button>
                      <Button variant='outline'>
                        Демо доступ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HeroMarquee />
        <WhatYouGetList />
        <PossibilitiesList />
        <ReviewsList />
        <ContactUs/>
      </main>
    </div>
  );
}



