"use client";

import {
  HomeIcon,
  DocumentIcon,
  EnvelopeIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
const links = [
  { name: "About", href: "/about", icon: HomeIcon },
  {
    name: "Resume",
    href: "/resume",
    icon: DocumentIcon,
  },
  { name: "Links", href: "/links", icon: LinkIcon },
  { name: "Contact", href: "/contact", icon: EnvelopeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-200 text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-200 text-blue-600": pathname === link.href,
              }
            )}
          >
            <Icon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
