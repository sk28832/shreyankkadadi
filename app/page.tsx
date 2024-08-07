// app/page.tsx
import Link from "next/link";
import Header from "@/components/Header";
import "animate.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-3 space-y-8 text-center">
      <div className="container px-4">
        <Header />
        <div className="animate__animated animate__fadeIn animate__faster">
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            hey! i&apos;m a cofounder @{" "}
            <a className="text-black" href="https://www.tryswiftlaw.com/">
              swiftlaw
            </a>
            , a legaltech startup revolutionizing drafting for lawyers. in my free time,
            i&apos;m particularly interested in art,{" "}
            <a
              href="https://www.goodreads.com/user/show/65010773-shreyank-kadadi"
              style={{ textDecoration: "underline" }}
            >
              reading
            </a>
            , and martial arts.
          </p>
        </div>
      </div>
    </div>
  );
}