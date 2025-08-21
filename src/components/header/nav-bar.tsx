import Image from "next/image";
import logoSVG from "../../assets/logo-task.svg";
import UserButton from "./user-button-list";
import Link from "next/link";

const content: string[] = ["Users", "Sign up"];

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-[13px] px-0 xl:min-w-[1170px]">
      <Image src={logoSVG} alt="Logo-test-task" width={104} height={26} />
      <ul className="flex gap-[10px]">{content.map((item) => <Link key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}><UserButton label={item} /></Link>)}
     </ul>
    </nav>
  );
};

export default NavBar;
