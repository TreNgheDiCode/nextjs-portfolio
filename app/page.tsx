import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { HomeIcon } from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
];

export default function Home() {
  return (
    <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
