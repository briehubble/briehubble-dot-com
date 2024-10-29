import { fetchContacts } from "../lib/data";
import Link from "next/link";

export default async function Page() {
  const contacts = await fetchContacts();

  return (
    <>
      <h1>Contact Brie</h1>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <Link
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-200 text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              key={contact.name}
              href={contact.value}
              target="_blank"
            >
              {contact.type}: {contact.name}
            </Link>
          ))}
        </ul>
      ) : (
        <p>Loading contacts...</p>
      )}
    </>
  );
}
