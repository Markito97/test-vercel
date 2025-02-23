import React from "react"
import { FasieIcon } from "../icons/fasie-icon"
import { RospatentIcon } from "../icons/rospatent-icon"
import { RegisterIcon } from "../icons/register-icon"
import Marquee from "react-fast-marquee";

export const HeroMarquee = () => {
    return (
        <div className="pb-14 md:pb-24">
            <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
                <Marquee speed={50} gradient={false}>
                    <div className="min-w-[100px]"><FasieIcon /></div>
                    <div className="min-w-[100px]"><RospatentIcon /></div>
                    <div className="min-w-[100px]"><RegisterIcon /></div>
                </Marquee>
            </div>
            <p className="w-full font-bold text-gray-700 text-center text-sm text-foreground-lighter mt-6 lg:mt-8">
                Программа ЭнергоБИТ включена в реестр российского ПО (реестровая запись № 23968 от 06.09.2024г.)
            </p>
        </div>
    );
}