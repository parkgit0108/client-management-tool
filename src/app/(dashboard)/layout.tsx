import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDE */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] xl:w-[14%] p-4">
        <Link href="/" className="flex items-center lg:justify-start gap-2">
          <Image
            src="/avatar.png"
            alt="logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="hidden lg:block">The Fitness Hub</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT SIDE */}
      <div className="w-[86%] md:w-[92%] lg:w-[86%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
