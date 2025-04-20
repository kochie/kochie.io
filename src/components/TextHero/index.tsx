import { DM_Sans } from "next/font/google";
import clsx from "clsx";

interface TextHeroProps {
  // Define any props you want to pass to the component
  // For example, you might want to pass a title or subtitle
  title?: string;
  subtitle?: string;
  content?: string[];
}

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export default function TextHero({ title, subtitle, content }: TextHeroProps) {
  return (
    <div>
      <div className="bg-gray-200 dark:bg-gray-800 dark:text-white text-center flex py-10 justify-center">
        <div
          className={clsx("w-[1000px] flex flex-col gap-6", dmSans.className)}
        >
          {title && <h1 className="text-4xl font-bold">{title}</h1>}
          {subtitle && <h2 className="text-2xl font-semibold">{subtitle}</h2>}
          {content && (
            <div className="text-lg">
              {content.map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
