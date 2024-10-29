import { fetchLinks } from "../lib/data";
import Link from "next/link";

export default async function Page() {
  const links = await fetchLinks();

  return (
    <>
      <h1>Brie's Links</h1>
      {links.length > 0 ? (
        <ul>
          {links.map((link) => (
            <Link
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-200 text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              key={link.name}
              href={link.url}
              target="_blank"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      ) : (
        <p>Loading links...</p>
      )}
    </>
  );
}
