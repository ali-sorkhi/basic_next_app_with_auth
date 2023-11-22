import Image from "next/image";
import logo from "../../public/img/Logo.png";
import pin from "../../public/img/icon_map_pin.svg";
import instagram from "../../public/img/icon_instagram.svg";
import phone from "../../public/img/icon_phone.svg";

export default function Footer() {
  return (
    <div className="w-[100%] lg:w-[100%] h-[200px] lg:h-[250px] bg-dark-gray/30 mt-[40px] pt-[10px] lg:pt-[13px] ">
      <div className=" w-full h-full bg-dark-gray/30 pt-[10px] lg:pt-[10px]">
        <div className="w-full h-full bg-dark-gray/40 flex flex-row ">
          <div className="flex flex-col gap-3 pt-[40px] md:pr-[70px] lg:pr-[150px] xl:pr-[300px] basis-1/2">
            <div className="flex flex-row gap-1">
              <Image src={pin} alt="loc"></Image>
              <p>
                آدرس : گراش بلوار سرداران خیابان باقرالعلوم سالن ورزشی ریاست
                جمهوری
              </p>
            </div>
            <div className="flex flex-row gap-1">
              <Image src={phone} alt="phone"></Image>
              <p>09171847358</p>
            </div>
            <div className="flex flex-row gap-1">
              <Image src={instagram} alt="insta"></Image>
              <p>progym.gr</p>
            </div>
          </div>
          <div className="basis-1/2 pt-[30px] md:pl-[100px] xl:pl-[450px]">
            <Image
              src={logo}
              className="h-[120px] w-auto float-left"
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
