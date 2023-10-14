import Image from "next/image";

const ContactsInfo = () => {
  return (
    <div className="flex-1">
      <div className="flex-1 mt-28 md:mt-0 md:pt-48 space-y-24 md:relative z-10">
        <h1 className="text-background text-xl font-bold">
          More ways to connect
        </h1>
        <div className="space-y-8 text-background/80">
          <div className="flex items-center jus space-x-12">
            <Image
              src={"/assets/icons/phone-icon.svg"}
              alt="phone"
              width={32}
              height={32}
            />
            <p>+351 964514203 / +351 910101126</p>
          </div>
          <div className="flex items-center space-x-12">
            <Image
              src={"/assets/icons/email-icon.svg"}
              alt="email"
              width={32}
              height={32}
            />
            <p>connect.swb@gmail.com</p>
          </div>
          <div className="flex items-center space-x-12">
            <Image
              src={"/assets/icons/location-icon.svg"}
              alt="location"
              width={32}
              height={32}
            />
            <p>Lisbon</p>
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
