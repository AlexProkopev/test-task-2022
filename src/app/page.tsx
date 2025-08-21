import NavBar from "@/components/header/nav-bar";
import Hero from "@/components/hero/hero";
import Users from "@/components/users/users";
import { ReduxProvider } from "./provider";
import Registration from "@/components/registration/registration";

export default function Home() {
  return (
    <>
      <header className="container mx-auto bg-white">
        <NavBar />
      </header>
      <Hero />
      <main>
        <ReduxProvider>
          <Users />
        </ReduxProvider>
      </main>
      <footer className="container mx-auto pt-[140px] pb-[100px]" id="sign-up">
        <ReduxProvider>
        <Registration />
      </ReduxProvider>
      </footer>
    </>
  );
}
