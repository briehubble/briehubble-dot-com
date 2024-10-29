import { db } from "@vercel/postgres";
// import { about, contacts, links, resume } from "../../lib/placeholder_data";

const client = await db.connect();

async function seedAbout() {
  // await client.sql`
  //   CREATE TABLE IF NOT EXISTS about (
  //     image_url VARCHAR(255) NOT NULL,
  //     bio TEXT NOT NULL
  //   );
  // `;

  // const insertedAbout = await client.sql`
  //   INSERT INTO about (image_url, bio)
  //   VALUES (${about.image_url}, ${about.bio});
  // `;

  // return insertedAbout;
}

async function seedLinks() {
  // await client.sql`
  //   CREATE TABLE IF NOT EXISTS links (
  //     name VARCHAR(255) NOT NULL,
  //     url VARCHAR(255) NOT NULL
  //   );
  // `;

  // const insertedLinks = await Promise.all(
  //   links.map(
  //     (link) => client.sql`
  //       INSERT INTO links (name, url)
  //       VALUES (${link.name}, ${link.url})
  //     `
  //   )
  // );

  // return insertedLinks;
}

async function seedResume() {
  // await client.sql`
  //   CREATE TABLE IF NOT EXISTS resume (
  //     pdf_url VARCHAR(255) NOT NULL
  //   );
  // `;

  // return await client.sql`
  //   INSERT INTO resume (pdf_url)
  //   VALUES (${resume.pdf_url})
  // `;
}

async function seedWorkExperience() {
  // await client.sql`
  //   CREATE TABLE IF NOT EXISTS work_experience (
  //     company VARCHAR(255),
  //     title VARCHAR(255),
  //     timespan VARCHAR(255),
  //     technologies VARCHAR(255)[],
  //     points TEXT[]
  //   );
  // `;

  // return await Promise.all(
  //   resume.work_experience.map(
  //     (experience) => client.sql`
  //   INSERT INTO work_experience (company, title, timespan, technologies, points)
  //   VALUES (${experience.company}, ${experience.title}, ${
  //       experience.timespan
  //     }, array[${JSON.stringify(
  //       experience.technologies
  //     )}], array[${JSON.stringify(experience.points)}])
  // `
  //   )
  // );
}

async function seedEducation() {
  // await client.sql`
  //   CREATE TABLE IF NOT EXISTS education (
  //     institution VARCHAR(255),
  //     timespan VARCHAR(255),
  //     degree VARCHAR(255),
  //     major VARCHAR(255),
  //     points TEXT ARRAY
  //   );
  // `;

  // return await Promise.all(
  //   resume.education.map(
  //     (education) => client.sql`
  //   INSERT INTO education (institution, timespan, degree, major, points)
  //   VALUES (${education.institution}, ${education.timespan}, ${
  //       education.degree
  //     }, ${education.major}, array[${JSON.stringify(education.points)}])
  // `
  //   )
  // );
}

async function seedContacts() {
  // await client.sql`
  //   CREATE TABLE IF NOT EXISTS contacts (
  //     type VARCHAR(255) NOT NULL,
  //     name VARCHAR(255) NOT NULL,
  //     value VARCHAR(255) NOT NULL
  //   );
  // `;

  // const insertedContacts = await Promise.all(
  //   contacts.map(
  //     (contact) => client.sql`
  //       INSERT INTO contacts (type, name, value)
  //       VALUES (${contact.type}, ${contact.name}, ${contact.value})
  //     `
  //   )
  // );

  // return insertedContacts;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedAbout();
    await seedLinks();
    await seedResume();
    await seedWorkExperience();
    await seedEducation();
    await seedContacts();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
