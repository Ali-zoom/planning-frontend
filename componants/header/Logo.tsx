import Link from "next/link";
import logo from "../../public/images/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex  gap-x-6">
      <Link className="text-primary font-semibold text-2xl" href={"/"}>
        <div className="relative h-[50px] w-[50px]">
          <Image
            src={logo}
            fill
            alt="logo"
            sizes="50px"
            className="object-contain"
            priority
          />
        </div>
      </Link>
      <div className="grid justify-items-center gap-y-2">
        <h1 className="font-semibold">ديوان محافظة بابل</h1>
        <h1>قسم التخطيط</h1>
      </div>
    </div>
  );
};

export default Logo;
