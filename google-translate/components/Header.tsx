import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import logo from "./Google_Translate_(4).png";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Header = () => {
  const { userId } = auth();
  return (
    <header className="flex items-center justify-between px-8 border-b mb-5">
      <div>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={100}
            className="object-contain h-32 cursor-pointer"
          ></Image>
        </Link>
      </div>
      {userId ? (
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      ) : (
        <SignedOut>
          <SignInButton />
        </SignedOut>
      )}
    </header>
  );
};

export default Header;
