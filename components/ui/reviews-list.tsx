

import React from "react"

export const ReviewsList = () => {
    return <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 relative w-full !px-0 lg:!px-16 xl:!px-0 !pb-0 mb-16 md:mb-12 lg:mb-12 !pt-6 max-w-[1400px]">
        <div className="group overflow-hidden relative transition-all max-h-[500px] w-auto flex-nowrap hidden lg:flex">
            <div className="overflow-x-hidden">
                <div className="relative w-full opacity-90 dark:opacity-70">
                    <div className="relative flex overflow-x-hidden">
                        <div className="flex items-center gap-8 py-12 animate-marquee">
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <div className="flex-shrink-0 flex gap-4 flex-col min-w-[100px]">
                                        <div className="max-w-sm border-2 border-brand rounded-md p-4 shadow-md">
                                            <p className="text-foreground text-sm font-medium">
                                                Aboba
                                            </p>
                                            <p className="text-foreground-lighter mt-3 text-base">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nam vel nemo.
                                            </p>
                                        </div>
                                        <div className="max-w-sm border-2 border-brand rounded-md p-4 shadow-md">
                                            <p className="text-foreground text-sm font-medium">
                                                Aboba
                                            </p>
                                            <p className="text-foreground-lighter mt-3 text-base">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore assumenda voluptatibus aspernatur, distinctio quisquam explicabo ducimus quam dolores autem velit. Eaque amet saepe vel aperiam possimus provident vero ratione harum?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 flex gap-4 flex-col min-w-[100px]">
                                        <div className="max-w-sm border-2 border-brand rounded-md p-4 shadow-md">
                                            <p className="text-foreground text-sm font-medium">Абоба</p>
                                            <p className="text-foreground-lighter mt-3 text-base">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nam vel nemo.
                                            </p>
                                        </div>
                                        <div className="max-w-sm border-2 border-brand rounded-md p-4 shadow-md">
                                            <p className="text-foreground text-sm font-medium">
                                                Абоба
                                            </p>
                                            <p className="text-foreground-lighter mt-3 text-base">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore assumenda voluptatibus aspernatur, distinctio quisquam explicabo ducimus quam dolores autem velit. Eaque amet saepe vel aperiam possimus provident vero ratione harum?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 flex gap-4 flex-col min-w-[100px]">
                                        <div className="max-w-sm border-2 border-brand rounded-md p-4 shadow-md">
                                            <p className="text-foreground text-sm font-medium">
                                                Абоба
                                            </p>
                                            <p className="text-foreground-lighter mt-3 text-base">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore assumenda voluptatibus aspernatur, distinctio quisquam explicabo ducimus quam dolores autem velit. Eaque amet saepe vel aperiam possimus provident vero ratione harum?
                                            </p>
                                        </div>
                                        <div className="max-w-sm border-2 border-brand rounded-md p-4 shadow-md">
                                            <p className="text-foreground text-sm font-medium">
                                                Абоба
                                            </p>
                                            <p className="text-foreground-lighter mt-3 text-base">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nam vel nemo.
                                            </p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" absolute pointer-events-none w-full h-full max-h-[400px] lg:max-h-none inset-0 top-auto lg:bg-[radial-gradient(50%_100%_at_50%_0,transparent_0%,transparent_50%,hsl(var(--background-default))_100%)]"></div>
    </div>


}