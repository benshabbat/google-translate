import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import logo from "./Google_Translate_(4).png"
const Header = () => {
  const { userId } = auth();
  return (
    <header>
      <div>
        <Link href="/">
            <Image
            src={logo}
            alt="logo"
            width={200}
            height={100}
            className="object-contain h-32 cursor-pointer">

            </Image>
        </Link>
      </div>
    </header>
  );
};

export default Header;
