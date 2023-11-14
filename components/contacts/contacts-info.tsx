import Image from "next/image";
import Link from "next/link";

type TContactsInfo = {
  heading: string;
  city: string;
};

const ContactsInfo = ({ heading, city }: TContactsInfo) => {
  return (
    <div className="flex-1">
      <div className="flex-1 mt-28 md:mt-0 md:pt-48 space-y-24 md:relative z-10">
        <h1 className="text-background text-xl font-bold">{heading}</h1>
        <div className="space-y-8 text-background/80">
          <div className="flex items-center jus space-x-12">
            <Image
              src={"/assets/icons/phone-icon.svg"}
              alt="phone"
              width={32}
              height={32}
            />
            <div className="flex gap-x-2">
              <Link href="tel:964514203">+351 964514203 </Link>
              <p>/</p>
              <Link href="tel:910101126"> +351 910101126</Link>
            </div>
          </div>
          <div className="flex items-center space-x-12">
            <Image
              src={"/assets/icons/email-icon.svg"}
              alt="email"
              width={32}
              height={32}
            />
            <Link href="mailto:connect.swb@gmail.com">
              connect.swb@gmail.com
            </Link>
          </div>
          <div className="flex items-center space-x-12">
            <Image
              src={"/assets/icons/location-icon.svg"}
              alt="location"
              width={32}
              height={32}
            />
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/Lisboa/@38.742249,-9.1876256,12.9z/data=!4m6!3m5!1s0xd19331a61e4f33b:0x400ebbde49036d0!8m2!3d38.7222524!4d-9.1393366!16zL20vMDRsbGI?hl=pt-PT&entry=ttu"
            >
              {city}
            </Link>
          </div>
        </div>
        <Image
          src={"/assets/photos/balls.png"}
          alt="balls"
          width={302}
          height={355}
          className="absolute bottom-0 right-0 md:hidden"
        />
      </div>
      <div className="hidden md:flex absolute bg-[#463F50] w-1/2 ml-auto h-full inset-0">
        <div className="md:absolute md:bottom-0 md:right-0 flex justify-end">
          <Image
            src={"/assets/photos/balls.png"}
            alt="balls"
            width={382}
            height={335}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactsInfo;
