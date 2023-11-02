import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export type TProjectCard = {
  href: string;
  image: string;
  color: string;
  title: string;
  subtitle: string;
  text: string;
  services: {
    web_design: boolean;
    web_development: boolean;
    copywriting: boolean;
  };
};

const ProjectCard = ({
  href,
  image,
  color,
  title,
  subtitle,
  text,
  services,
}: TProjectCard) => {
  function transformServiceName(serviceName: string) {
    return serviceName
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Link href={href} target="_blank" className="hover:opacity-80">
      <div className="flex border rounded-lg flex-col md:flex-row shadow-lg h-full md:relative">
        <div
          className={cn(
            "p-8 rounded-lg md:rounded-none md:rounded-l-lg flex items-center justify-center md:min-w-[248px]",
            color === "#1893c6"
              ? "bg-[#1893C6]/90"
              : color === "#c1a661"
              ? "bg-[#c1a661]/90"
              : color === "#0f172a"
              ? "bg-[#0f172a]/90"
              : ""
          )}
        >
          <Image
            src={image}
            alt={title}
            width={308}
            height={341}
            className="md:absolute md:ml-24 md:px-8"
          />
        </div>
        <div className="p-8 flex flex-col justify-between md:max-w-[550px] md:ml-36 space-y-8 ">
          <div className="flex items-center space-x-4">
            <p>{title}</p>
            <div
              className={cn(
                "w-8 border",
                color === "#1893c6"
                  ? "border-[#1893C6]/90"
                  : color === "#c1a661"
                  ? "border-[#c1a661]/90"
                  : color === "#0f172a"
                  ? "border-[#0f172a]/90"
                  : ""
              )}
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-bold">{subtitle}</h1>
            <p>{text}</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {Object.entries(services).map(
              (service, index) =>
                service[1] && (
                  <p
                    key={index}
                    className="bg-[#efefef] p-3 rounded-lg w-fit text-xs text-center"
                  >
                    {transformServiceName(service[0])}
                  </p>
                )
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
