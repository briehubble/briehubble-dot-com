import { db } from "@vercel/postgres";
import { about, contacts, links, resume } from "../lib/placeholder_data";

const client = await db.connect();

async function seedAbout() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS about (
      image_url VARCHAR(255) NOT NULL,
      bio TEXT NOT NULL
    );
  `;

  const insertedAbout = await client.sql`
    INSERT INTO about (image_url, bio)
    VALUES (${about.image_url}, ${about.bio});
  `;

  return insertedAbout;
}

async function seedLinks() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS links (
      name VARCHAR(255) NOT NULL,
      url VARCHAR(255) NOT NULL
    );
  `;

  const insertedLinks = await Promise.all(
    links.map(
      (link) => client.sql`
        INSERT INTO links (name, url)
        VALUES (${link.name}, ${link.url})
        ON CONFLICT (name) DO NOTHING;
      `
    )
  );

  return insertedLinks;
}

async function seedResume() {
  await client.sql`
    CREATE TYPE IF NOT EXISTS WORK_EXPERIENCE_TYPE AS (
      company VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      timespan VARCHAR(255) NOT NULL,
      technologies VARCHAR(255)[] NOT NULL,
      points TEXT[] NOT NULL
    );
  `;
  await client.sql`
    CREATE TYPE IF NOT EXISTS EDUCATION_TYPE AS (
      institution VARCHAR(255) NOT NULL,
      timespan VARCHAR(255) NOT NULL,
      degree VARCHAR(255) NOT NULL,
      major VARCHAR(255) NOT NULL,
      points TEXT[] NOT NULL
    );
  `;
  await client.sql`
    CREATE TABLE IF NOT EXISTS resume (
      work_experience WORK_EXPERIENCE_TYPE[] NOT NULL,
      education EDUCATION_TYPE[] NOT NULL,
      pdf_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedResume = await client.sql`
    INSERT INTO resume (work_experience, education, pdf_url)
    VALUES (${resume.work_experience}, ${resume.education}, ${resume.pdf_url})
    ON CONFLICT (type) DO NOTHING;
  `;

  return insertedResume;
}

async function seedContacts() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS links (
      name VARCHAR(255) NOT NULL,
      url VARCHAR(255) NOT NULL
    );
  `;

  const insertedContacts = await Promise.all(
    contacts.map(
      (contact) => client.sql`
        INSERT INTO links (type, name, value)
        VALUES (${contact.type}, ${contact.name}, ${contact.value})
        ON CONFLICT (type) DO NOTHING;
      `
    )
  );

  return insertedContacts;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedAbout();
    await seedLinks();
    await seedResume();
    await seedContacts();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
