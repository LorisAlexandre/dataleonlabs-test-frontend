import { Globe, Server, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-screen size-full font-[family-name:var(--font-geist-sans)]">
      <section className="min-h-screen flex-1 size-full flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl font-extrabold">DataLeon technical test</h1>
        <div className="flex gap-4 items-center flex-col">
          <Link
            prefetch={true}
            href={"/server"}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            <Server /> Server Side Rendering
          </Link>
          <Link
            prefetch={true}
            href="/client"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            <User /> Client Side Rendering
          </Link>
        </div>
      </section>
    </div>
  );
}
