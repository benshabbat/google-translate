import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const Header = () => {
  const { userId } = auth();
  return (
    <header>
      <div>
        <Link href=""></Link>
      </div>
    </header>
  );
};

export default Header;
