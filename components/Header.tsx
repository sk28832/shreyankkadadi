"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl md:text-6xl lg:text-7xl mt-8">
        <Link href="/">shreyank kadadi</Link>
      </h1>
      <nav className="flex justify-center space-x-6 py-4">
        <Link
          href="/"
          className={`${pathname === "/"
              ? "font-bold text-gray-900 dark:text-gray-50"
              : "font-normal hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            }`}
        >
          about
        </Link>
        <Link
          href="/experience"
          className={`${pathname === "/experience"
              ? "font-bold text-gray-900 dark:text-gray-50"
              : "font-normal hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            }`}
        >
          experience
        </Link>
        <Link
          href="/blog"
          className={`${pathname === "/blog"
              ? "font-bold text-gray-900 dark:text-gray-50"
              : "font-normal hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            }`}
        >
          blog
        </Link>
        <Link
          href="/contact"
          className={`${pathname === "/contact"
              ? "font-bold text-gray-900 dark:text-gray-50"
              : "font-normal hover:underline hover:text-gray-900 dark:hover:text-gray-50"
            }`}
        >
          contact
        </Link>
      </nav>

    </>
  );
}
