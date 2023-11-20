import { UserButton } from "@clerk/nextjs";
import HomeLoginButton from "./components/HomeLoginButton";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center text-red-500">
      <p>Hello Build product fast</p>
      <HomeLoginButton />
    </main>
  );
}
