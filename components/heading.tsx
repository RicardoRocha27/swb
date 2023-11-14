import { Proza_Libre } from "next/font/google";

import { cn } from "@/lib/utils";

type THeading = {
  title: string;
  subtitle: string;
  isBackgroundLight?: boolean;
};

const prozaLibre = Proza_Libre({ subsets: ["latin"], weight: "700" });

const Heading = ({ title, subtitle, isBackgroundLight }: THeading) => {
  return (
    <div className="flex flex-col items-center space-y-4 pt-32 pb-24 text-center">
      <h1 className={cn("text-4xl text-accent", prozaLibre.className)}>
        {title}
      </h1>
      <p
        className={cn(
          "max-w-[400px]",
          isBackgroundLight ? "text-foreground/80" : "text-background/80"
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
