import React from "react"
import { FasieIcon } from "../icons/fasie-icon"
import { RospatentIcon } from "../icons/rospatent-icon"
import { RegisterIcon } from "../icons/register-icon"



export const HeroMarquee = () => {
    return <div className="pb-14 md:pb-24">
        <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto overflow-x-hidden">
            <div className="relative w-full opacity-90 dark:opacity-70">
                <div className="relative flex overflow-x-hidden">
                    <div className="flex items-center gap-8 py-12 animate-marquee whitespace-nowrap">
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                <div className="flex-shrink-0 min-w-[100px]">
                                    <FasieIcon />
                                </div>
                                <div className="flex-shrink-0 min-w-[100px]">
                                    <RospatentIcon />
                                </div>
                                <div className="flex-shrink-0 min-w-[100px]">
                                    <RegisterIcon />
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>

}