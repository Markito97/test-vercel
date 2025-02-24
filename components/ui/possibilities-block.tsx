import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { Check } from "lucide-react";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
});

interface PossibilitiesBlockProps {
  title: string;
  icon: ReactNode;
  href: string
  possibilities?: string[]
}

export const PossibilitiesBlock = ({
  title,
  icon,
  href,
  possibilities,
}: PossibilitiesBlockProps) => {
  return (
    <a
      href={href}
      className="cursor-svg-zap text-white group relative w-full sm:h-[250px] flex flex-col gap-5 lg:flex-row focus:outline-none focus:border-none focus:ring-brand focus:ring-2 focus:rounded-xl col-span-6 md:col-span-12 xl:col-span-6"
    >
      <div className="group/panel rounded-lg md:rounded-xl p-px bg-brand from-border to-border/50 dark:to-surface-100 transition-all shadow-xl hover:bg-gradient-to-br hover:from-brand/80 hover:to-surface-200 flex items-center justify-center relative w-full h-full">
        <div className="z-10 rounded-[7px] md:rounded-[11px] relative overflow-hidden flex-1 flex flex-row sm:flex-col gap-4 items-start sm:items-center lg:items-start justify-between bg-surface-75 w-full h-full text-foreground-lighter [&_strong]:!font-normal [&_strong]:!text-foreground p-4 sm:py-6 transition-colors group-hover:bg-surface-100">
          <div className="relative z-10 h-full w-full mx-auto gap-2 sm:gap-4 flex flex-col justify-between items-start sm:items-center text-left sm:text-center md:ml-2 md:mt-2 lg:pl-0 md:text-left md:items-start">
            <div className="flex items-center gap-2 text-foreground">
              <h3 className={`${roboto.className} text-3xl font-bold text-white`}>
                {title}
              </h3>
            </div>
            {possibilities?.length &&
              <div className="bg-white text-gray-700 p-3 rounded-xl shadow-xl">
                <ul>
                  {possibilities?.map((el) =>
                    <li key={el} className="font-bold flex gap-2">
                      <Check absoluteStrokeWidth />
                      {el}
                    </li>
                  )}
                </ul>
              </div>
            }
          </div>
          <figure className="absolute inset-0 z-0 hidden sm:block">
            <span className="px-4 absolute opacity-30 w-full h-full md:aspect-square flex items-end md:items-center justify-center md:justify-end right-0 left-0 xl:-right-12 2xl:right-0 top-12 md:top-0 md:bottom-0 my-auto transition-opacity group-hover:opacity-70">
              {icon}
            </span>
          </figure>
          <div className="absolute z-10 inset-0 w-full h-full pointer-events-none opacity-20"></div>
        </div>
      </div>
    </a>
  );
};