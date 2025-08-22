import NavBar from "@/components/header/nav-bar";
import Hero from "@/components/hero/hero";
import Users from "@/components/users/users";
import { ReduxProvider } from "./provider";
import Registration from "@/components/registration/registration";

const footerStyles = "container mx-auto pt-[140px] pb-[100px]"
const headerStyles = "mx-auto bg-white"
export default function Home() {
  return (
    <>
      <header className={headerStyles}>
        <NavBar />
      </header>
      <Hero />
      <main>
        <ReduxProvider>
          <Users />
        </ReduxProvider>
      </main>
      <footer className={footerStyles} id="sign-up">
        <ReduxProvider>
          <Registration />
        </ReduxProvider>
      </footer>
    </>
  );
}
