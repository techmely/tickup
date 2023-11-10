import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center text-red-500">
      <p>Hello Build product fast</p>
      <Button size="md" className="px-10 block">
        This is a button
      </Button>
    </main>
  );
}
