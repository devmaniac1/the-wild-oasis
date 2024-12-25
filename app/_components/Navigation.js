import Link from "next/link";
import { auth } from "@/app/_lib/auth";

export default async function Navigation() {
  const session = await auth();
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session && session.user ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              {session.user.image != undefined ? (
                <img
                  src={session.user.image}
                  className="h-10 rounded-full object-cover brightness-75"
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="text-xs">({session.user.name || ""})</span>
              )}
              Guest area
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-2"
            >
              {/* <span className="text-xs">({session.user.name})</span> */}
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
