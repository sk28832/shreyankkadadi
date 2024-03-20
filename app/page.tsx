import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-3 space-y-8 text-center">
      <div className="container px-4">
        <Header />
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          hey! i'm a cofounder @ <a className="text-black" href="https://www.tryswiftlaw.com/">swiftlaw</a>, a legaltech startup revolutionizing client intake. in my free time, i'm particularly interested in art,{" "}
          <a href="https://www.goodreads.com/user/show/65010773-shreyank-kadadi" style={{ textDecoration: 'underline' }}>
            reading
          </a>
          , and martial arts.
        </p>
      </div>
    </div>
  );
}